import { updateProfile } from "firebase/auth";
import { NavLink, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import animationData from '../../assets/register_animation.json'
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
   const location = useLocation();
   const from = location?.state ? location.state : '/';

   useEffect(() => {
      document.title = "Register";
   }, [])

   const [registerError, setRegisterError] = useState('');
   const [registerSuccess, setRegisterSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const { createUser } = useContext(AuthContext);

   const handleRegister = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password');
      console.log(name, photo, email, password);

      // reset error
      setRegisterError('');
      setRegisterSuccess('');

      if (password.length < 6) {
         setRegisterError(toast.error('Password must be at least 6 characters or longer'));
         return;
      } else if (!/[A-Z]/.test(password)) {
         setRegisterError(toast.error('Password must contain a upper case letter!'));
         return;
      } else if (!/[a-z]/.test(password)) {
         setRegisterError(toast.error('Password must contain a lower case letter!'));
         return;
      }

      // create user
      createUser(email, password)
         .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
               displayName: name,
               photoURL: photo,
            });
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email, createdAt };
            fetch('', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(user)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
               })
            setRegisterSuccess(toast.success('User created successfully!'));
         })
         .catch(error => {
            console.error(error);
            setRegisterError(error.message);
         })
   }
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
                  <form onSubmit={handleRegister} className="card-body">
                     <h1 className="text-center text-4xl font-bold ">Register</h1>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Enter name" name='name' className="input input-bordered" required />
                     </div>
                     {/* second row */}
                     <div className="flex flex-row gap-2">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Photo URL</span>
                           </label>
                           <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                        </div>
                        {/* user roles */}
                        <div className="form-control w-full">
                           <label className="label">
                              <span className="label-text">User role</span>
                           </label>
                           <select id="roleSelect" className="select select-bordered">
                              <option disabled selected>Choose user role</option>
                              <option value="Employee" className="">Employee</option>
                              <option value="HR" className="">HR</option>
                           </select>
                        </div>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                           <input
                              type={showPassword ? 'text' : "password"}
                              placeholder="password"
                              name='password'
                              className="input input-bordered w-full"
                              required />
                           <span className="absolute top-4 right-4 text-base" onClick={() => setShowPassword(!showPassword)}>
                              {
                                 showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                              }
                           </span>
                        </div>
                     </div>
                     <div className="form-control mt-4">
                        <button className="btn btn-outline">Register</button>
                     </div>
                     <p>Already have an accout? please <NavLink className='text-blue-500 hover:underline font-semibold' to='/login'>Login</NavLink></p>
                  </form>
                  <div className="mb-6">
                     <SocialLogin from={from}></SocialLogin>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;