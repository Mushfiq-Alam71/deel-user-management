import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";


const WorkManagement = () => {
   return (
      <div className="flex lg:flex-row gap-12 pt-28">
         <div>
            <img className="rounded-xl" src="../../../public/images/worksheet.jpg" alt="" />
         </div>
         <div className="flex flex-col justify-center gap-8">
            <p>THE NEW WAY</p>
            <h1 className="text-4xl font-semibold">Deel Engage lets you run all things talent in one place</h1>
            <div className="flex flex-col justify-center gap-4">
               <div className="flex flex-row gap-2 items-center">
                  <SiTicktick />
                  <p>Use a single tool for performance and learning management</p>
               </div>
               <div className="flex flex-row gap-2 items-center">
                  <SiTicktick />
                  <p>Save hours of manual work with powerful AI at every step of the way</p>
               </div>
               <div className="flex flex-row gap-2 items-center">
                  <SiTicktick />
                  <p>Deeply connect all areas for a data-driven process</p>
               </div>
               <div className="flex flex-row gap-2 items-center">
                  <SiTicktick />
                  <p>Optionally use Deel as your free HRIS</p>
               </div>
            </div>
            <Link to='/register' className="btn btn-outline rounded-xl w-1/4">Sign Up</Link>
         </div>
      </div>
   );
};

export default WorkManagement;