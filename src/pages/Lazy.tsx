import App from "./App";
import ProductDetail from "./Detail";

type LazyPage={
  path: string
  element: any
  name: string
}

const LazyPages: LazyPage[] = [
  {
    path: "/",
    element: App,//React.lazy(() => import("./App")),
    name: "Home"
  },
  {
    path: "/detail",
    element: ProductDetail,//React.lazy(() => import("./ProductDetail")),
    name: "Detail"
  }
];

export default LazyPages;