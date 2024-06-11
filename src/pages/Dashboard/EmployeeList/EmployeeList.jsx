import { Link } from "react-router-dom";
import useEmployee from "../../../components/Hooks/useEmployee";
import { useState } from "react";
import PayFrom from "../../../components/PayForm/PayFrom";



const EmployeeList = () => {
   const [employees] = useEmployee();
   const [payableEmployee, setPayableEmployee] = useState({});


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
                        employees.filter(emp => emp.role !== 'HR').map((employee, index) => (
                           <tr key={employee._id}>
                              <th>{index + 1}</th>
                              <td>{employee.name}</td>
                              <td>{employee.email}</td>
                              <td>{employee.role}</td>
                              <td>❌</td>
                              <td>{employee.bank}</td>
                              <td>{employee.salary}</td>
                              <td onClick={() => { document.getElementById('my_modal_5').showModal(); setPayableEmployee(employee) }} className="btn btn-outline btn-sm mt-1">Pay</td>
                              <td><Link className="hover:underline hover:text-blue-500" to={`/dashboard/single-employee/${employee._id}`}>View Details</Link></td>
                              {/* modal */}
                           </tr>
                        ))
                     }
                  </tbody>
               </table>
               <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                     <PayFrom employee={payableEmployee} />
                     <div className="modal-action">
                        <form method="dialog">
                           {/* if there is a button in form, it will close the modal */}
                           <button className="btn">Close</button>
                        </form>
                     </div>
                  </div>
               </dialog>
            </div>
         </div>

      </div>
   );
};

export default EmployeeList;