import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updatedJob);

    toast.success('Job Updated Successfully');

    return navigate(`/jobs/${id}`);
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Update Job
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Job Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Listing Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Beautiful Apartment In Miami'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Add any job duties, expectations, requirements, etc'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditJobPage;

// import { useState, useEffect } from 'react';
// import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const EditJobPage = ({ updateJobSubmit }) => {
//   const job = useLoaderData(); // 从 loader 中获取 job 数据
//   const [title, setTitle] = useState('');
//   const [type, setType] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');
//   const [salary, setSalary] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [companyDescription, setCompanyDescription] = useState('');
//   const [contactEmail, setContactEmail] = useState('');
//   const [contactPhone, setContactPhone] = useState('');

//   const navigate = useNavigate();
//   const { id } = useParams();

//   // 在 useEffect 中初始化状态，只在 job 存在并且有效时
//   useEffect(() => {
//     if (job && job.company) {
//       setTitle(job.title || '');
//       setType(job.type || '');
//       setLocation(job.location || '');
//       setDescription(job.description || '');
//       setSalary(job.salary || '');
//       setCompanyName(job.company.name || '');
//       setCompanyDescription(job.company.description || '');
//       setContactEmail(job.company.contactEmail || '');
//       setContactPhone(job.company.contactPhone || '');
//     }
//   }, [job]);

//   const submitForm = (e) => {
//     e.preventDefault();

//     const updatedJob = {
//       id,
//       title,
//       type,
//       location,
//       description,
//       salary,
//       company: {
//         name: companyName,
//         description: companyDescription,
//         contactEmail,
//         contactPhone,
//       },
//     };

//     updateJobSubmit(updatedJob);

//     toast.success('Job Updated Successfully');

//     return navigate(`/jobs/${id}`);
//   };

//   // 检查 job 是否加载完成
//   if (!job) {
//     return <p>Loading job details...</p>;
//   }

//   // 确保 job.company 存在，避免访问未定义的属性
//   if (!job.company) {
//     return <p>Company information is not available for this job.</p>;
//   }

//   return (
//     <form onSubmit={submitForm}>
//       {/* 表单元素 */}
//       <div>
//         <label htmlFor="title">Title</label>
//         <input
//           id="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="type">Type</label>
//         <input
//           id="type"
//           type="text"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="location">Location</label>
//         <input
//           id="location"
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="salary">Salary</label>
//         <input
//           id="salary"
//           type="text"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="companyName">Company Name</label>
//         <input
//           id="companyName"
//           type="text"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="companyDescription">Company Description</label>
//         <textarea
//           id="companyDescription"
//           value={companyDescription}
//           onChange={(e) => setCompanyDescription(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="contactEmail">Contact Email</label>
//         <input
//           id="contactEmail"
//           type="email"
//           value={contactEmail}
//           onChange={(e) => setContactEmail(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="contactPhone">Contact Phone</label>
//         <input
//           id="contactPhone"
//           type="text"
//           value={contactPhone}
//           onChange={(e) => setContactPhone(e.target.value)}
//         />
//       </div>

//       <button type="submit">Update Job</button>
//     </form>
//   );
// };

// export default EditJobPage;

// // import { useState, useEffect } from 'react';
// // import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const EditJobPage = ({ updateJobSubmit }) => {
// //   const job = useLoaderData();
// //   const [title, setTitle] = useState(job.title);
// //   const [type, setType] = useState(job.type);
// //   const [location, setLocation] = useState(job.location);
// //   const [description, setDescription] = useState(job.description);
// //   const [salary, setSalary] = useState(job.salary);
// //   const [companyName, setCompanyName] = useState(job.company.name);
// //   const [companyDescription, setCompanyDescription] = useState(
// //     job.company.description
// //   );
// //   const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
// //   const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

// //   const navigate = useNavigate();
// //   const { id } = useParams();

// //   useEffect(() => {
// //     if (job) {
// //       setTitle(job.title);
// //       setType(job.type);
// //       setLocation(job.location);
// //       setDescription(job.description);
// //       setSalary(job.salary);
// //       setCompanyName(job.company?.name || '');
// //       setCompanyDescription(job.company?.description || '');
// //       setContactEmail(job.company?.contactEmail || '');
// //       setContactPhone(job.company?.contactPhone || '');
// //     }
// //   }, [job]);

// //   const submitForm = (e) => {
// //     e.preventDefault();

// //     const updatedJob = {
// //       id,
// //       title,
// //       type,
// //       location,
// //       description,
// //       salary,
// //       company: {
// //         name: companyName,
// //         description: companyDescription,
// //         contactEmail,
// //         contactPhone,
// //       },
// //     };

// //     updateJobSubmit(updatedJob);

// //     toast.success('Job Updated Successfully');

// //     return navigate(`/jobs/${id}`);
// //   };

// //   return (
// //     <section className='bg-indigo-50'>
// //       <div className='container m-auto max-w-2xl py-24'>
// //         <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
// //           <form onSubmit={submitForm}>
// //             <h2 className='text-3xl text-center font-semibold mb-6'>
// //               Update Job
// //             </h2>

// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='type'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Job Type
// //               </label>
// //               <select
// //                 id='type'
// //                 name='type'
// //                 className='border rounded w-full py-2 px-3'
// //                 required
// //                 value={type}
// //                 onChange={(e) => setType(e.target.value)}
// //               >
// //                 <option value='Full-Time'>Full-Time</option>
// //                 <option value='Part-Time'>Part-Time</option>
// //                 <option value='Remote'>Remote</option>
// //                 <option value='Internship'>Internship</option>
// //               </select>
// //             </div>

// //             <div className='mb-4'>
// //               <label className='block text-gray-700 font-bold mb-2'>
// //                 Job Listing Name
// //               </label>
// //               <input
// //                 type='text'
// //                 id='title'
// //                 name='title'
// //                 className='border rounded w-full py-2 px-3 mb-2'
// //                 placeholder='eg. Beautiful Apartment In Miami'
// //                 required
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //               />
// //             </div>
// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='description'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Description
// //               </label>
// //               <textarea
// //                 id='description'
// //                 name='description'
// //                 className='border rounded w-full py-2 px-3'
// //                 rows='4'
// //                 placeholder='Add any job duties, expectations, requirements, etc'
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //               ></textarea>
// //             </div>

// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='type'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Salary
// //               </label>
// //               <select
// //                 id='salary'
// //                 name='salary'
// //                 className='border rounded w-full py-2 px-3'
// //                 required
// //                 value={salary}
// //                 onChange={(e) => setSalary(e.target.value)}
// //               >
// //                 <option value='Under $50K'>Under $50K</option>
// //                 <option value='$50K - 60K'>$50K - $60K</option>
// //                 <option value='$60K - 70K'>$60K - $70K</option>
// //                 <option value='$70K - 80K'>$70K - $80K</option>
// //                 <option value='$80K - 90K'>$80K - $90K</option>
// //                 <option value='$90K - 100K'>$90K - $100K</option>
// //                 <option value='$100K - 125K'>$100K - $125K</option>
// //                 <option value='$125K - 150K'>$125K - $150K</option>
// //                 <option value='$150K - 175K'>$150K - $175K</option>
// //                 <option value='$175K - 200K'>$175K - $200K</option>
// //                 <option value='Over $200K'>Over $200K</option>
// //               </select>
// //             </div>

// //             <div className='mb-4'>
// //               <label className='block text-gray-700 font-bold mb-2'>
// //                 Location
// //               </label>
// //               <input
// //                 type='text'
// //                 id='location'
// //                 name='location'
// //                 className='border rounded w-full py-2 px-3 mb-2'
// //                 placeholder='Company Location'
// //                 required
// //                 value={location}
// //                 onChange={(e) => setLocation(e.target.value)}
// //               />
// //             </div>

// //             <h3 className='text-2xl mb-5'>Company Info</h3>

// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='company'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Company Name
// //               </label>
// //               <input
// //                 type='text'
// //                 id='company'
// //                 name='company'
// //                 className='border rounded w-full py-2 px-3'
// //                 placeholder='Company Name'
// //                 value={companyName}
// //                 onChange={(e) => setCompanyName(e.target.value)}
// //               />
// //             </div>

// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='company_description'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Company Description
// //               </label>
// //               <textarea
// //                 id='company_description'
// //                 name='company_description'
// //                 className='border rounded w-full py-2 px-3'
// //                 rows='4'
// //                 placeholder='What does your company do?'
// //                 value={companyDescription}
// //                 onChange={(e) => setCompanyDescription(e.target.value)}
// //               ></textarea>
// //             </div>

// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='contact_email'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Contact Email
// //               </label>
// //               <input
// //                 type='email'
// //                 id='contact_email'
// //                 name='contact_email'
// //                 className='border rounded w-full py-2 px-3'
// //                 placeholder='Email address for applicants'
// //                 required
// //                 value={contactEmail}
// //                 onChange={(e) => setContactEmail(e.target.value)}
// //               />
// //             </div>
// //             <div className='mb-4'>
// //               <label
// //                 htmlFor='contact_phone'
// //                 className='block text-gray-700 font-bold mb-2'
// //               >
// //                 Contact Phone
// //               </label>
// //               <input
// //                 type='tel'
// //                 id='contact_phone'
// //                 name='contact_phone'
// //                 className='border rounded w-full py-2 px-3'
// //                 placeholder='Optional phone for applicants'
// //                 value={contactPhone}
// //                 onChange={(e) => setContactPhone(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <button
// //                 className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
// //                 type='submit'
// //               >
// //                 Update Job
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// // export default EditJobPage;
