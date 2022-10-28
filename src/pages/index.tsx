import App from "./App";
import ProductDetail from "./Detail";

type Page={
  path: string
  element: any
  name: string
}

const Pages: Page[] = [
  {
    path: "/",
    element: App,//React.lazy(() => import("./App")),
    name: "Home"
  },
  {
    path: "/detail",
    element: ProductDetail,//React.lazy(() => import("./Detail")),
    name: "Detail"
  }
];

export default Pages;