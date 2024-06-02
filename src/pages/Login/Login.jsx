import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import animationData from '../../assets/login_animation.json'
import Swal from "sweetalert2";

const Login = () => {
   useEffect(() => {
      document.title = "Login";
   }, [])
   const { signIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state ? location.state : '/';

   const handleLogin = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      console.log(email, password);

      // sign In
      signIn(email, password)
         .then(result => {
            console.log(result.user);
            // navigate after login
            navigate(from);
            Swal.fire({
               position: "center",
               icon: "success",
               title: "You've logged in successfully",
               showConfirmButton: false,
               timer: 2000
            });
         })
         .catch(error => {
            console.error(error);
         })
   };
   return (
      <div>
         <div className="hero min-h-[90vh] bg-base-100">
            <div className="hero-content flex flex-row">
               <div style={{ position: "relative", width: "100vw", height: "60vh" }}>
                  <div style={{ position: "absolute", top: "50%", left: "35%", transform: "translate(-50%, -50%)" }}>
                     <Lottie
                        height={800}
                        width={1000}
                        animationData={animationData}
                     />
                  </div>
               </div>
               <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
                     <h1 className="text-center text-4xl font-bold ">Login</h1>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-4">
                        <button className="btn btn-outline">Login</button>
                     </div>
                     <p>Don&#39;t have an accout? please <NavLink className='text-blue-500 hover:underline font-semibold' to='/register'>Register</NavLink></p>
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

export default Login;