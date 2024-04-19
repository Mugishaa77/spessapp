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
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
              </span>
              <span className="profile">
                <img src="" />
              </span>
              <span className="drop-down">
                Account <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
<ul>
  <li>Login </li>
  <li>Sign-up</li>
</ul>
              </span>
              
            </nav>
        </div>
    );
}