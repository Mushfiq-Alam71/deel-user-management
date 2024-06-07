import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UserProfile = () => {
   const { user } = useContext(AuthContext);

   useEffect(() => {
      document.title = "User Profile";
   }, [])


   return (
      <div>
         <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-xl p-16 sm:flex sm:space-x-6 rounded-xl dark:bg-gray-200 dark:text-gray-900 ">
               <div className="flex-shrink-0  mb-6 sm:h-32 sm:w-32 sm:mb-0">
                  <img src={user.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
               </div>
               <div className="flex flex-col space-y-4 justify-center ">
                  <div>
                     <h2 className="text-4xl font-semibold">{user.displayName}</h2>
                  </div>
                  <div className="space-y-1">
                     <span className="flex items-center space-x-2">
                        <span className="dark:text-gray-600 text-xl font-bold">{user.email}</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;