import useEmployee from "../../../components/Hooks/useEmployee";



const EmployeeList = () => {
   const [employee] = useEmployee();
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
                        <th className="text-lg text-black">Verified</th>
                        <th className="text-lg text-black">Bank Account</th>
                        <th className="text-lg text-black">Salary</th>
                        <th className="text-lg text-black">Pay</th>
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
                           <td>❌</td>
                           <td>{employee.bank}</td>
                           <td>{employee.salary}</td>
                           <td className="btn btn-outline btn-sm mt-1">Pay</td>
                           <td>View Details</td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default EmployeeList;