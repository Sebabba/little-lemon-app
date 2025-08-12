import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main data-testid="main-content">{children}</main>
      <Navbar />
    </>
  );
};

export default Layout;