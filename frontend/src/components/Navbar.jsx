import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useAuthCheck from '../customHooks/useAuthCheck';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthCheck();

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate('/login');
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                {isAuthenticated ? (
                  <>
                    <NavLink to='/add-job' className={linkClass}>
                      Add Job
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to='/signup' className={linkClass}>
                      Signup
                    </NavLink>
                    <NavLink to='/login' className={linkClass}>
                      Login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
