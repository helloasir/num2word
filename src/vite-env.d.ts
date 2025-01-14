/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  fbq: any;
  _fbq: any;
}

declare function gtag(...args: any[]): void;
declare function fbq(...args: any[]): void;