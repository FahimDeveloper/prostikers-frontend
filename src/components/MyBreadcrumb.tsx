/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const MyBreadcrumb = (prop: any) => {
  const items = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/membership",
      title: "Membership",
    },
    {
      path: "/rental",
      title: "Rental",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  function itemRender(currentRoute: any, params: any, items: any, paths: any) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;
    return isLast ? (
      <span {...prop}>{currentRoute.title}</span>
    ) : (
      <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>
    );
  }

  return <Breadcrumb itemRender={itemRender} items={items} />;
};

export default MyBreadcrumb;
