import { useState, useEffect } from 'react';
import { getProducts } from '../services/shopify';
import type { ShopifyProduct } from '../types';

export function useShopify() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const productList = await getProducts();
      setProducts(productList);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, retry: fetchProducts };
}
