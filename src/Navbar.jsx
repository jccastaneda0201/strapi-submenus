import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="nav-toggle" onClick={useGlobalContext().openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
