import '../App.css';

function NavBar(){
    return(
    <div className="NavBar">
       
            {/* //navbar link setup */}
            <div className= "links">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/experience">Experience</a>
                <a href="/projects">Projects</a>
            </div>


      
    </div>

    );

}

export default NavBar;