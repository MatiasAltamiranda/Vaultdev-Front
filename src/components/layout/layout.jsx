import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = (prop) => {
  const { children } = prop;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
