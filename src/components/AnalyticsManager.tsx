import React, { useEffect } from 'react';
import { initGoogleAnalytics, initFacebookPixel } from '../utils/analytics';

interface AnalyticsManagerProps {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

export default function AnalyticsManager({ googleAnalyticsId, facebookPixelId }: AnalyticsManagerProps) {
  useEffect(() => {
    if (googleAnalyticsId) {
      initGoogleAnalytics(googleAnalyticsId);
    }
    if (facebookPixelId) {
      initFacebookPixel(facebookPixelId);
    }
  }, [googleAnalyticsId, facebookPixelId]);

  return null;
}