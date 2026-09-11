import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom 100% DSGVO-compliant Vercel Web Analytics tracker for React Router & Vite.
 * Fires pageview telemetry to Vercel Insights Edge (/_vercel/insights/event).
 */
export default function VercelAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // 1. Ensure Vercel Insights queue is defined
    const win = window as any;
    win.va = win.va || function () { (win.vaq = win.vaq || []).push(arguments); };

    // 2. Dynamically inject Vercel Insights script if not already in DOM
    if (!document.getElementById('vercel-insights-script')) {
      const script = document.createElement('script');
      script.id = 'vercel-insights-script';
      script.src = '/_vercel/insights/script.js';
      script.defer = true;
      document.head.appendChild(script);
    }

    // 3. Send route pageview telemetry to Vercel Insights Edge
    try {
      win.va('pageview', { 
        route: location.pathname + location.search 
      });
    } catch {
      // Fallback queue push
      win.vaq = win.vaq || [];
      win.vaq.push(['pageview', { route: location.pathname + location.search }]);
    }
  }, [location]);

  return null;
}
