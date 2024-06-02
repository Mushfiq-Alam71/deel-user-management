import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from '../../assets/register_animation.json'
import { updateProfile } from "firebase/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form"

const Register = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { createUser } = useContext(AuthContext);
   const navigate = useNavigate();

   const onSubmit = (data) => {
      console.log(data);
      createUser(data.email, data.password)
         .then(result => {
            const signedUser = result.user;
            console.log(signedUser);
            reset();
            navigate('/');
         })

   }

   // const location = useLocation();
   // const from = location?.state ? location.state : '/';

   // useEffect(() => {
   //    document.title = "Register";
   // }, [])

   // const [registerError, setRegisterError] = useState(null);
   // const [registerSuccess, setRegisterSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   // const handleRegister = e => {
   //    e.preventDefault();
   //    // console.log(e.currentTarget);
   //    // const form = new FormData(e.currentTarget);
   //    // const name = form.get('name');
   //    // const photo = form.get('photo');
   //    // const email = form.get('email');
   //    // const password = form.get('password');
   //    const form = e.target;
   //    const name = form.name.value;
   //    const email = form.email.value;
   //    const password = form.password.value;
   //    const photo = form.photo.value;
   //    console.log(name, photo, email, password);


   //    if (password.length < 6) {
   //       setRegisterError('Password must be at least 6 characters or longer');
   //       toast.error(registerError)
   //       return;
   //    } else if (!/[A-Z]/.test(password)) {
   //       setRegisterError('Password must contain a upper case letter!');
   //       toast.error(registerError)
   //       return;
   //    } else if (!/[a-z]/.test(password)) {
   //       setRegisterError('Password must contain a lower case letter!');
   //       toast.error(registerError)
   //       return;
   //    }

   //    console.log("btn clicked");

   //    // create user
   //    createUser(email, password)
   //       .then(result => {
   //          console.log(result.user);
   //          updateProfile(result.user, {
   //             displayName: name,
   //             photoURL: photo,
   //          });
   //          const createdAt = result.user?.metadata?.creationTime;
   //          const user = { email, createdAt };
   //          fetch('', {
   //             method: 'POST',
   //             headers: {
   //                'content-type': 'application/json'
   //             },
   //             body: JSON.stringify(user)
   //          })
   //             .then(res => res.json())
   //             .then(data => {
   //                console.log(data);
   //             })

   //          setRegisterSuccess(toast.success('User created successfully!'));
   //       })
   //       .catch(error => {
   //          console.error(error);
   //          setRegisterError(error.message);
   //       })
   // }
   return (
      <div>
         <div className="hero min-h-[90vh] bg-base-100">
            <div className="hero-content flex flex-row gap-12">
               <div >
                  <div >
                     <Lottie
                        height={800}
                        width={1000}
                        animationData={animationData}
                     />
                  </div>
               </div>
               <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                     <h1 className="text-center text-4xl font-bold ">Register</h1>
                     {/* first row*/}
                     <div className="flex flex-row gap-2">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Name</span>
                           </label>
                           <input type="text" {...register("name", { required: true })} placeholder="Enter name" name='name' className="input input-bordered" />
                           {errors.name && <span className="text-red-400">Name is required</span>}
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Email</span>
                           </label>
                           <input type="email" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                           {errors.email && <span className="text-red-400">Email is required</span>}
                        </div>
                     </div>
                     {/* user roles | designation */}
                     <div className="flex flex-row gap-2">
                        <div className="form-control w-full">
                           <label className="label">
                              <span className="label-text">User role</span>
                           </label>
                           <select {...register("role", { required: true })} name="role" className="select select-bordered">
                              <option disabled selected>Choose user role</option>
                              <option value="Employee" className="">Employee</option>
                              <option value="HR" className="">HR</option>
                           </select>
                           {errors.role && <span className="text-red-400">Please choose role</span>}
                        </div>
                        <div className="form-control w-full">
                           <label className="label">
                              <span className="label-text">Designation</span>
                           </label>
                           <select {...register("designation", { required: true })} name="designation" className="select select-bordered">
                              <option disabled selected>Choose your designation</option>
                              <option value="Administrative Assistant" className="">Administrative Assistant</option>
                              <option value="Manager" className="">Manager</option>
                              <option value="Receptionist" className="">Receptionist</option>
                              <option value="Project Manager" className="">Project Manager</option>
                              <option value="Software Developer" className="">Software Developer</option>
                              <option value="System Analyst" className="">System Analyst</option>
                              <option value="HR Manager" className="">HR Manager</option>
                              <option value="HR Coordinator" className="">HR Coordinator</option>
                              <option value="Accountant" className="">Accountant</option>
                              <option value="Sales Representative" className="">Sales Representative</option>
                              <option value="Account Executive" className="">Account Executive</option>
                              <option value="Graphic Designer" className="">Graphic Designer</option>
                              <option value="Content Writer" className="">Content Writer</option>
                              <option value="Medical Assistant" className="">Medical Assistant</option>
                              <option value="Customer Service Representative" className="">Customer Service Representative</option>
                           </select>
                           {errors.designation && <span className="text-red-400">Please choose role</span>}
                        </div>
                     </div>
                     {/* user roles | designation */}
                     <div className="flex flex-row gap-2">
                        <div className="form-control w-full">
                           <label className="label">
                              <span className="label-text">Salary</span>
                           </label>
                           <input type="text" {...register("salary", { required: true })} placeholder="Enter your salary" name='salary' className="input input-bordered" />
                           {errors.salary && <span className="text-red-400">Salary info is required</span>}
                        </div>
                        <div className="form-control w-full">
                           <label className="label">
                              <span className="label-text">Bank account no.</span>
                           </label>
                           <input type="text" {...register("bank", { required: true })} placeholder="Enter bank account no" name='bank' className="input input-bordered" />
                           {errors.bank && <span className="text-red-400">Bank account no. is required</span>}
                        </div>
                     </div>

                     {/* third row | password */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                           <input
                              type={showPassword ? 'text' : "password"}
                              {...register("password", {
                                 required: true,
                                 minLength: 6,
                                 maxLength: 20,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                              })}
                              placeholder="password"
                              name='password'
                              className="input input-bordered w-full" />
                           {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
                           {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be 6 characters</p>}
                           {errors.password?.type === 'maxLength' && <p className="text-red-400">Password must be less than 20 characters</p>}
                           {errors.password?.type === 'pattern' && <p className="text-red-400">Password must have one uppercase, one lowercase and one special character</p>}

                           <span className="absolute top-4 right-4 text-base" onClick={() => setShowPassword(!showPassword)}>
                              {
                                 showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                              }
                           </span>
                        </div>
                     </div>
                     {/* fourth row | photo */}

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} placeholder="photo" name='photo' className="input input-bordered" />
                        {errors.photo && <span className="text-red-400">PhotoURL is required</span>}
                     </div>
                     <div className="form-control mt-4">
                        <button type="submit" className="btn btn-outline">Register</button>
                     </div>
                     <p>Already have an accout? please <NavLink className='text-blue-500 hover:underline font-semibold' to='/login'>Login</NavLink></p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;