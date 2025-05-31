import { Link, Outlet } from "react-router-dom"
function Layout(){
    return(
        <div>
        <div>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/Others">Others</Link>
        </div>
        <br/>
        <Outlet/>
        </div>
    )
}
export default Layout;