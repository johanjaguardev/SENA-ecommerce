import type { ShopifyProduct, ShopifyResponse } from '../types';

const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`;

export const getProducts = async (): Promise<ShopifyProduct[]> => {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText}, Body: ${errorBody}`);
    }

    const json: ShopifyResponse = await response.json();
    if (json.errors) {
      throw new Error(`GraphQL Errors: ${JSON.stringify(json.errors)}`);
    }

    return json.data.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching products from Shopify:', error);
    return [];
  }
};
