import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
       <div>
          <nav className="navbar navbar-default">
              <div className="container">
                  <div className="row">
                    <div className="link col-4 col-md-4">
                      <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Trang chủ</Link>
                      </div>
                    </div>

                    <div className="link col-4 col-md-4 form-search">
                      <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" />
                        <button className="d-none btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                      </form>
                    </div>

                    <div className="link col-4 col-md-4">
                      <div className="navbar-header txt-right">
                        <Link className="navbar-brand" to="/shop">Của hàng</Link>
                      </div>
                    </div>
                   
                  </div>
                  
              </div>
          </nav>

          <Outlet />

          <footer className="container-fluid bg-4 text-center">
              <p>Bootstrap Theme Made By <a href="https://www.w3schools.com">www.w3schools.com</a></p> 
          </footer>
      </div>  
    </>
  )
};

export default Layout;