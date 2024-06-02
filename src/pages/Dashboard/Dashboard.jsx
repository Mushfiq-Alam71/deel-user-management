import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
   return (
      <div className="flex flex-row gap-16 max-w-7xl mx-auto">

         {/* dashboard nav */}
         <div className="w-64 min-h-screen bg-base-200 my-8">
            <ul className="menu my-4">
               <li><NavLink to="/dashboard/work-sheet" className="text-lg font-semibold">Work Sheet</NavLink></li>
               <li><NavLink to="/dashboard/payment-history" className="text-lg font-semibold">Payment History</NavLink></li>
            </ul>
         </div>

         {/* outlet */}
         <div className=" flex-1">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Dashboard;