import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { ConfigProvider } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0ABAC3",
          fontFamily: "Manrope",
        },
      }}
    >
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </ConfigProvider>
  </Provider>
);
