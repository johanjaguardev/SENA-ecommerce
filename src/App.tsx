// src/App.tsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CheckoutMvpPage from './pages/CheckoutMvpPage';
import InfoPage from './pages/InfoPage';
import NotFoundPage from './pages/NotFoundPage';
import OfflineWarning from './components/OfflineWarning';
import './App.css';

function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <OfflineWarning isOffline={isOffline} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        <Route path="/checkout-mvp" element={<CheckoutMvpPage />} />
        <Route path="/informacion/:slug" element={<InfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
