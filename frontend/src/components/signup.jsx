import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const newUser = {
      name,
      phoneNumber,
      gender,
      dateOfBirth,
      membershipStatus,
      email,
      password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Signup Successful');
        navigate('/'); // Redirect to the home page or a dashboard
      } else {
        toast.error(data.message || 'Signup Failed');
      }
    } catch (error) {
      toast.error('Signup Failed. Please try again.');
      console.error('Signup Error:', error);
    }
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Sign Up</h2>

            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter your name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='phone_number' className='block text-gray-700 font-bold mb-2'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phone_number'
                name='phone_number'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter your phone number'
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='gender' className='block text-gray-700 font-bold mb-2'>
                Gender
              </label>
              <select
                id='gender'
                name='gender'
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=''>Select your gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor='date_of_birth' className='block text-gray-700 font-bold mb-2'>
                Date of Birth
              </label>
              <input
                type='date'
                id='date_of_birth'
                name='date_of_birth'
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='membership_status' className='block text-gray-700 font-bold mb-2'>
                Membership Status
              </label>
              <select
                id='membership_status'
                name='membership_status'
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value={membershipStatus}
                onChange={(e) => setMembershipStatus(e.target.value)}
              >
                <option value=''>Select membership status</option>
                <option value='bronze'>Bronze</option>
                <option value='silver'>Silver</option>
                <option value='gold'>Gold</option>
                <option value='platinum'>Platinum</option>
              </select>
            </div>

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

            <div className='mb-4'>
              <label htmlFor='confirmPassword' className='block text-gray-700 font-bold mb-2'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Confirm your password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
