import {Link} from "react-router-dom"

function Navbar(){
    return(<>
    <section className="page">
        <div>
<nav className="nav-links">

<Link to= "/">Home</Link>
<br></br>
<Link to= "/about">about</Link>
<br></br>

<Link to= "/projects">projects</Link>
<br></br>

<Link to= "/contact">contact</Link>
<br></br>


</nav>
</div>
    </section>
       
    </>)
}

export default Navbar