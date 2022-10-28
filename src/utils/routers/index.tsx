import { ThemeProvider } from "@emotion/react";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Alert from "../../components/Alert/Alert.Component";
import Pages from "../../pages";
import { theme } from "../../styles/theme";

export default function Router() {
  return (
    <ThemeProvider theme={theme}>
        <Alert/>
        <Suspense fallback={<>Loading</>}>
          <Routes>
            {/* <Route path={"/"} element={<App/>} /> */}
            {Pages.map((item) => (
              <Route key={item.path} path={item.path} element={<item.element />} />
            ))}
          </Routes>
        </Suspense>
    </ThemeProvider>
  );
}
