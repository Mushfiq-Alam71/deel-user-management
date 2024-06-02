import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Dashboard = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <Navbar></Navbar>
         <div className="flex flex-row gap-16 ">
            {/* dashboard nav */}
            <div className="w-64 min-h-screen bg-base-200 my-8">
               <ul className="menu my-4">
                  <li><NavLink to="/dashboard/work-sheet" className="text-lg font-semibold">Work Sheet</NavLink></li>
                  <li><NavLink to="/dashboard/payment-history" className="text-lg font-semibold">Payment History</NavLink></li>
                  <li><NavLink to="/dashboard/employee-list" className="text-lg font-semibold">Employee List</NavLink></li>
               </ul>
            </div>

            {/* outlet */}
            <div className="my-8 flex-1">
               <Outlet></Outlet>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;