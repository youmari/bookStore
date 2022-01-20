import { Link } from 'react-router-dom';
import user from '../assets/user.png';

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
    <button type="button" className="profile-btn">
      <img src={user} className="profile-icon" alt="profile-icon" />
    </button>
  </header>
);

export default Header;
