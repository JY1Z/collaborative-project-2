import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import Signup from './components/signup';
import Login from './components/Login';

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) throw new Error('Failed to add job');
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete job');
    } catch (error) {
      console.error(error);
    }
  };

  // Update Job
  const updateJob = async (job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      if (!res.ok) throw new Error('Failed to update job');
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Signup
  const signupSubmit = async (userData) => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error('Signup failed');
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Login
  const loginSubmit = async (credentials) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!res.ok) throw new Error('Login failed');
    } catch (error) {
      console.error(error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/signup' element={<Signup signupSubmit={signupSubmit} />} />
        <Route path='/login' element={<Login loginSubmit={loginSubmit} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import HomePage from './pages/HomePage';
// import JobsPage from './pages/JobsPage';
// import NotFoundPage from './pages/NotFoundPage';
// import JobPage, { jobLoader } from './pages/JobPage';
// import AddJobPage from './pages/AddJobPage';
// import EditJobPage from './pages/EditJobPage';
// import Signup from './components/Signup';
// import Login from './components/Login';

// const App = () => {
//   // Add New Job
//   const addJob = async (newJob) => {
//     const res = await fetch('/api/jobs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newJob),
//     });
//     return;
//   };

//   // Delete Job
//   const deleteJob = async (id) => {
//     const res = await fetch(`/api/jobs/${id}`, {
//       method: 'DELETE',
//     });
//     return;
//   };

//   // Update Job
//   const updateJob = async (job) => {
//     const res = await fetch(`/api/jobs/${job.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(job),
//     });
//     return;
//   };

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path='/jobs' element={<JobsPage />} />
//         <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
//         <Route
//           path='/edit-job/:id'
//           element={<EditJobPage updateJobSubmit={updateJob} />}
//           loader={jobLoader}
//         />
//         <Route
//           path='/jobs/:id'
//           element={<JobPage deleteJob={deleteJob} />}
//           loader={jobLoader}
//         />
//         <Route path='*' element={<NotFoundPage />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/login' element={<Login />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };
// export default App;
