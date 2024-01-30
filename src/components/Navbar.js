// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand">Navbar</span>
            {/*a連結有加上href的話會影響路由的運作 沒有做其他用途的話會建議換成別的標籤*/}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    {/* 對應的是Home連結 */}
                    {/* <NavLink className={({isActive})=>{
                        console.log('NavLink:',isActive);
                        return `nav-link ${isActive?'newClassName':''}`;
                    }} to="/">Home</NavLink> */}
                     <NavLink className="nav-link" style={({isActive})=>{
                        return {
                            color:isActive?'red':''
                        }
                     }} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">關於我</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/album">相簿</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}