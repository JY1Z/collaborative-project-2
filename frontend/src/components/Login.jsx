import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = ({ loginSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    loginSubmit(user);

    toast.success('Login Successful');

    return navigate('/dashboard'); // Redirect to dashboard or any appropriate page
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Login</h2>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter your email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter your password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

// import React from 'react';

// const Login = () => {
//     const { handleLogin, email, password, handleChange } = useLogin();

//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;