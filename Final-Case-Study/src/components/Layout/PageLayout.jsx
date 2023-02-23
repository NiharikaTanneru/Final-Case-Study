import { Outlet } from "react-router-dom";
import NavigationMenu from "../Navigation/NavigationMenu";
import Footer from "../Footer";

// PageLayout component helps us in  nested routing to handle elements with header and footer

const PageLayout = () => (
  <>
    <NavigationMenu />
    <Outlet />
    <Footer />
  </>
);
export default PageLayout;
