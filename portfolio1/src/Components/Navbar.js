import '../App.css';

function NavBar(){
    return(
    <div className="NavBar">
       
            {/* //navbar link setup */}
            <div className= "links">
                <a href="/">home </a>
                <a href="/about"> about </a>
                <a href="/experience">experience </a>
                <a href="/projects">projects </a>
            </div>


      
    </div>

    );

}

export default NavBar;