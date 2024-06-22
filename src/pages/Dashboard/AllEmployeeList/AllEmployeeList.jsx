import { Link } from "react-router-dom";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useHR from "../../../components/Hooks/useHR";
import RoleSelection from "../../../components/RoleSelection/RoleSelection";
import useAdmin from "../../../components/Hooks/useAdmin";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";

const AllEmployeeList = () => {
   const axiosPublic = useAxiosPublic();
   const [isAdmin] = useAdmin();


   const axiosSecure = useAxiosSecure();
   const { data: employee = [], refetch } = useQuery({
      queryKey: ['employee'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })


   const toggleVerified = async (vEmployee) => {
      let verifiedState = {};
      if (vEmployee.verified && vEmployee.verified === true) {
         verifiedState = { verified: false }
      } else {
         verifiedState = { verified: true }
      }

      const res = await axiosPublic.patch(`users/${vEmployee._id}`, verifiedState);
      if (res.data.modifiedCount > 0) {
         toast.success('Status Changed');
         refetch();
      }
   };

   const handleDelete = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {

            axiosSecure.delete(`/users/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
               })
         }
      });
   }

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
                        <th className="text-lg text-black">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        employee.map((employee, index) => <tr key={employee._id}>
                           <th>{index + 1}</th>
                           <td><Link className="cursor-pointer hover:text-blue-500" to={`/dashboard/single-employee/${employee._id}`}>{employee.name}</Link></td>
                           <td>{employee.email}</td>
                           {/* <td> {employee.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(employee)} className="btn btn-sm bg-blue-500"><FaUser className="text-white text-sm"></FaUser></button>}</td> */}
                           <td><RoleSelection refetch={refetch} employeeID={employee._id} role={employee.role} enabled={isAdmin} /></td>
                           <td className="cursor-pointer text-xl" onClick={() => toggleVerified(employee)}>{employee.verified ? '✅' : '❌'}</td>
                           <td>{employee.bank}</td>
                           <td>{employee.salary}</td>
                           {/* <td className="btn btn-outline btn-sm mt-1">Pay</td> */}
                           <td>
                              <button onClick={() => handleDelete(employee._id)} className="btn btn-ghost btn-lg text-red-500">
                                 <FaTrashAlt></FaTrashAlt>
                              </button>
                           </td>
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