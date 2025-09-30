import { useEffect } from "react";

export default function EmitrrChat() {
  useEffect(() => {
    if (!document.querySelector("#emitrr-widget")) {
      const script = document.createElement("script");
      script.src = "https://widget.emitrr.com/v1.0.0/emitrr-widget.js";
      script.id = "emitrr-widget";
      script.defer = true;
      script.onload = () => {
        if (window.EmitrrWidget) {
          window.EmitrrWidget.initV2({
            webchatId: "7a93ec53-28fa-4913-88ae-b155804f5ddf",
          });
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.EmitrrWidget) {
        window.EmitrrWidget.initV2({
          webchatId: "7a93ec53-28fa-4913-88ae-b155804f5ddf",
        });
      }
    }
  }, []);

  return null;
}
