export default function Navbar () {
    return (
        <div className="nav">
            <nav>
              <span className="logo">
                <img src="" />
              </span>
              <form>
                <input type="text" className="form-control"
                 placeholder="Search" aria-label="search" aria-describedby="search"></input>
               <span id="search">@</span>
              </form>
              
            </nav>
        </div>
    );
}