import { FaSpinner } from "react-icons/fa";
import Container from "../../../components/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsView = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function loadScript() {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${scriptURL}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        script.onload = () => resolve(true);
        document.head.appendChild(script);
      });
    }

    async function initShopify() {
      if (!window.ShopifyBuy) {
        await loadScript();
      } else if (!window.ShopifyBuy.UI) {
        await loadScript();
      }

      const client = window.ShopifyBuy.buildClient({
        domain: "cxi580-p2.myshopify.com",
        storefrontAccessToken: "bf47e4a4d40a8068e2fa09e0a681871c",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        const node = document.getElementById(`collection-component-${id}`);

        if (!node) return;

        const observer = new MutationObserver(() => {
          if (node.querySelector("iframe, .shopify-buy__collection")) {
            setLoading(false);
            observer.disconnect();
          }
        });

        observer.observe(node, { childList: true, subtree: true });

        ui.createComponent("collection", {
          id: id,
          node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(33.33333% - 30px)",
                    "margin-left": "30px",
                    "margin-bottom": "50px",
                    width: "calc(33.33333% - 30px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                button: {
                  ":hover": { "background-color": "#09a7b0" },
                  "background-color": "#0abac3",
                  ":focus": { "background-color": "#09a7b0" },
                },
              },
              buttonDestination: "modal",
              contents: { options: false },
              text: { button: "View product" },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-30px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  ":hover": { "background-color": "#09a7b0" },
                  "background-color": "#0abac3",
                  ":focus": { "background-color": "#09a7b0" },
                },
              },
              text: { button: "Add to cart" },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  ":hover": { "background-color": "#09a7b0" },
                  "background-color": "#0abac3",
                  ":focus": { "background-color": "#09a7b0" },
                },
                title: { color: "#000000" },
                header: { color: "#000000" },
                lineItems: { color: "#000000" },
                subtotalText: { color: "#000000" },
                subtotal: { color: "#000000" },
                notice: { color: "#000000" },
                currency: { color: "#000000" },
                close: { color: "#000000", ":hover": { color: "#000000" } },
                empty: { color: "#000000" },
                noteDescription: { color: "#000000" },
                discountText: { color: "#000000" },
                discountIcon: { fill: "#000000" },
                discountAmount: { color: "#000000" },
              },
              text: { total: "Subtotal", button: "Checkout" },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#0abac3",
                  ":hover": { "background-color": "#09a7b0" },
                  ":focus": { "background-color": "#09a7b0" },
                },
              },
            },
            lineItem: {
              styles: {
                variantTitle: { color: "#000000" },
                title: { color: "#000000" },
                price: { color: "#000000" },
                fullPrice: { color: "#000000" },
                discount: { color: "#000000" },
                discountIcon: { fill: "#000000" },
                quantity: { color: "#000000" },
                quantityIncrement: {
                  color: "#000000",
                  "border-color": "#000000",
                },
                quantityDecrement: {
                  color: "#000000",
                  "border-color": "#000000",
                },
                quantityInput: {
                  color: "#000000",
                  "border-color": "#000000",
                },
              },
            },
          },
        });
      });
    }

    initShopify();
  }, [id]);

  return (
    <Container>
      {loading && (
        <div className="h-svh w-full flex justify-center items-center">
          <FaSpinner className="animate-spin size-8 text-primary" />
        </div>
      )}

      <div
        id={`collection-component-${id}`}
        className={`py-5 ${loading ? "hidden" : ""}`}
      />
    </Container>
  );
};

export default ProductsView;
