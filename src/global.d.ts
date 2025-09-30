export {};

declare global {
  interface Window {
    ShopifyBuy: any;
    EmitrrWidget?: {
      initV2: (options: { webchatId: string }) => void;
    };
  }
}
