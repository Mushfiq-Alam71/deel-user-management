import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AllEmployeeList = () => {

   const axiosSecure = useAxiosSecure();
   const { data: employee = [], refetch } = useQuery({
      queryKey: ['employee'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })


   const handleMakeAdmin = employee => (
      axiosSecure.patch(`/users/admin/${employee._id}`)
         .then(res => {
            console.log(res.data);
            if (res.data.modification > 0) {
               refetch();
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${employee.name} is an Admin now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
   )
   return (
      <div>
         EmployeeList: {employee.length}
         <div>
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th className="text-lg text-black"></th>
                        <th className="text-lg text-black">Name</th>
                        <th className="text-lg text-black">Email</th>
                        <th className="text-lg text-black">Role</th>
                        <th className="text-lg text-black">Verified</th>
                        <th className="text-lg text-black">Bank Account</th>
                        <th className="text-lg text-black">Salary</th>
                        {/* <th className="text-lg text-black">Pay</th> */}
                        <th className="text-lg text-black">Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        employee.map((employee, index) => <tr key={employee._id}>
                           <th>{index + 1}</th>
                           <td>{employee.name}</td>
                           <td>{employee.email}</td>
                           <td> {employee.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(employee)} className="btn btn-sm bg-blue-500"><FaUser className="text-white text-sm"></FaUser></button>}</td>
                           <td>❌</td>
                           <td>{employee.bank}</td>
                           <td>{employee.salary}</td>
                           {/* <td className="btn btn-outline btn-sm mt-1">Pay</td> */}
                           <td><Link className="hover:underline hover:text-blue-500" to={`/dashboard/single-employee/${employee._id}`}>View Details</Link></td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllEmployeeList;