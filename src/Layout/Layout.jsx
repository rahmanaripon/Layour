import { Helmet } from "react-helmet";

const Layout = ({ children , title}) => {
  return (
    <div>
    <Helmet>
        <title>{ title}</title>
    </Helmet>
    <main>{children}</main>
  
  </div>
  )
  
  
};

export default Layout;
