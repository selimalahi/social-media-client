import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { AuthContext } from './../../../AuthProvider/AuthProvider';

const Header = () => {
  const { user, SignOut } = useContext(AuthContext);
  const handlelogout = () => {
    SignOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'><li><a>Home</a></li></Link>
            <Link to='/media'><li><a>Media</a></li></Link>
            {/* <Link to='/massage'><li><a>massage</a></li></Link> */}
            {/* <Link to='/message'>Message</Link> */}
            <Link to ='/about'><li><a>About</a></li></Link>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Social-Media</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to='/'><li><a>Home</a></li></Link>
          <Link to='/media'><li><a>Media</a></li></Link>
          <Link to='/massage'><li><a>massage</a></li></Link>
          <Link to='/about'><li><a>About</a></li></Link>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.uid ?
            <Link onClick={handlelogout} className="btn"> logout</Link>
            :
            <Link to='/login' className="btn"> login</Link>
        }
      </div>
    </div>
  );
};

export default Header;