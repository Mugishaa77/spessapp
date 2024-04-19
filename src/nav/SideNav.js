export default function SideNav () {
    return (
        <div className="sidenav">
             <div class="col-auto sidebar">
      <h4>Home</h4>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Post Space</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Space</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Permissions</a>
        </li>
      </ul>
      <h4>General</h4>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Logout</a>
        </li>
        </ul>
    </div>
    </div>
    );
}