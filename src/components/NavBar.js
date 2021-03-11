import { CartWidget } from './CartWidget'


function NavBar() {
  return (
    <div className="NavBar">

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#">Logo</a>
  <div className="text-success flex-right">
  <CartWidget />
  </div>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>

   
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
  
</nav>
    </div>
  );
}

export default NavBar;
