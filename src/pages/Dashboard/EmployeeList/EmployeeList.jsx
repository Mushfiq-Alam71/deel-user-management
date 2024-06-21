import { Link } from "react-router-dom";
import { useState } from "react";
import PayFrom from "../../../components/PayForm/PayFrom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";



const EmployeeList = () => {
   const [months, setMonths] = useState({});
   const axiosSecure = useAxiosPublic();
   const { data: employees = [] } = useQuery({
      queryKey: ['employee'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })
   console.log(employees);

   // const form = useForm();
   const onSubmit = () => {
      const payEmployeeInfo = { employee_name: payableEmployee.name, salary: payableEmployee.salary, payment_month: months.monthName }

      axiosSecure.post('/payment', payEmployeeInfo)
         .then(res => {
            if (res.data.insertedId) {
               Swal.fire({
                  title: 'Congratulations!',
                  text: `Your payment has been Successfully!`,
                  icon: 'success',
                  position: 'top-right',
                  confirmButtonText: 'Okay!'
               })
            }
         })
         .catch(error => {
            console.error(error);
            if (error) {
               Swal.fire({
                  title: 'Error!!',
                  text: error,
                  position: 'top-right',
                  icon: 'error',
                  confirmButtonText: 'Close'
               })
            }
         })
   }

   const axiosPublic = useAxiosPublic();

   const [payableEmployee, setPayableEmployee] = useState(null);

   const toggleVerified = async (id) => {
      const res = await axiosPublic.patch(`users/${id}`);
      employees((prevEmployees) =>
         prevEmployees.map((employee) =>
            employee._id === id ? { ...employee, verified: res.data.verified } : employee
         )
      );
   };

   return (
      <div>
         EmployeeList: {employees.length}
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
                        <th className="text-lg text-black" >Pay</th>
                        <th className="text-lg text-black">Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        employees.filter(emp => emp.role !== 'HR' && emp.role !== 'admin').map((employee, index) => (
                           // && emp.role !== 'admin'
                           <tr key={employee._id}>
                              <th>{index + 1}</th>
                              <td>{employee.name}</td>
                              <td>{employee.email}</td>
                              <td>{employee.role}</td>
                              <td onClick={() => toggleVerified(employee._id)}>
                                 {employee.verified ? '✅' : '❌'}
                              </td>
                              <td>{employee.bank}</td>
                              <td>{employee.salary}</td>
                              <td onClick={() => { document.getElementById('my_modal').showModal(); setPayableEmployee(employee) }} className="btn btn-outline btn-sm mt-1">Pay</td>
                              <td><Link className="hover:underline hover:text-blue-500" to={`/dashboard/single-employee/${employee._id}`}>View Details</Link></td>
                              {/* modal */}
                           </tr>
                        ))
                     }
                  </tbody>
               </table>
               <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box w-2/3 h-[600px]">
                     <PayFrom setMonths={setMonths} employee={payableEmployee} onSubmit={onSubmit} />
                  </div>
               </dialog>
            </div>
         </div>

      </div>
   );
};

export default EmployeeList;