import logo from "../src/images/logo.svg"
import { Data } from "./data"
import { links } from "./data"
const Navbar=  ()=>{
    return (
        <div><nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
            {Data.map((link)=>{
                return(
           <li key={link.id}>
            <a href={link.href} className="nav-link">{link.text} </a>
          </li>
                )
            }
            
            )
        }
          </ul>

        <ul className="nav-icons">
            {links.map((links)=>{
                return(
                    <li key={links.id} >
            <a href={links.href}target="_blank" className="nav-icon"
            ><i className={links.icon}></i>
            </a>
            </li>
                )
            }
            )
}
         
          
        </ul>
      </div>
    </nav>
</div>
    )
}
export default Navbar