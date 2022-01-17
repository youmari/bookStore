import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo">Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="link" to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
