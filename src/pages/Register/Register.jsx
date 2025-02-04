import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from '../../assets/register_animation.json'
import { updateProfile } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form"
import moment from "moment";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosPublic from "../../components/Hooks/useAxiosPublic";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { createUser, setUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();

   const onSubmit = async (data) => {
      // console.log(data);

      // image upload to imgbb and then get an url
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append('image', imageFile);

      const res = await axios.post(image_hosting_api, formData, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      });

      if (res.data.success) {
         const image = res.data.data.display_url;

         createUser(data.email, data.password)
            .then(result => {
               updateProfile(result.user, {
                  displayName: data.name,
                  photoURL: image,
               })
                  .then(() => { })
                  .catch(error => {
                     toast.error(error.message.split(': ')[1]);
                  })
               const signedUser = result.user;
               console.log(signedUser);
               reset();
               setUser(prevUser => ({
                  ...prevUser,
                  displayName: data.name,
                  photoURL: image || prevUser.photoURL,
               }));
               navigate('/');

            })

         let registeredInfo = { ...data, joined_on: moment().format("YYYY-MM-DD HH:mm:ss") };
         delete registeredInfo.image;
         registeredInfo.photo = image;
         axiosPublic.post(`/users`, registeredInfo)
            .then(res => {
               if (res.data.insertedId) {
                  Swal.fire({
                     title: 'Congratulations!',
                     text: `User Added Successfully!`,
                     icon: 'success',
                     confirmButtonText: 'Okay!'
                  })
                  reset();
               }
            })
            .catch(error => {
               console.error(error);
               if (error) {
                  Swal.fire({
                     title: 'Error!!',
                     text: error,
                     icon: 'error',
                     confirmButtonText: 'Close'
                  })
               }
            })
      }
   }

   const [showPassword, setShowPassword] = useState(false);

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
                        <input type="file" {...register("image", { required: true })} placeholder="photo" name='image' className="input input-bordered" />
                        {errors.image && <span className="text-red-400">PhotoURL is required</span>}
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