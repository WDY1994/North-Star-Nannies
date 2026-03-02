import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Services } from "./pages/Services";
import { Vetting } from "./pages/Vetting";
import { About } from "./pages/About";
// import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { Nannies } from "./pages/Nannies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "services", element: <Services /> },
      { path: "vetting", element: <Vetting /> },
      { path: "about", element: <About /> },
      // { path: "resources", element: <Resources /> },
      { path: "contact", element: <Contact /> },
      { path: "nannies", element: <Nannies /> },
    ],
  },
]);