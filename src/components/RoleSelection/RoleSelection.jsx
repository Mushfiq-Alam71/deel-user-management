import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const RoleSelection = ({ enabled, role, employeeID, refetch }) => {

   const axiosSecure = useAxiosSecure();

   const isAdmin = role === 'admin';
   const isHR = role === 'hr';
   const isEmployee = role === 'Employee';

   const handleMakeAdmin = async (employee, value) => (
      await axiosSecure.patch(`/users/role/${employee}/${value}`)
         .then(res => {
            console.log(res.data);
            if (res.data.modification > 0) {
               refetch();
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Role changed!`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
   )

   return (

      <select onChange={(e) => handleMakeAdmin(employeeID, e.target.value,)} disabled={!enabled} name="roleSelection" id="roleSelection">
         <option selected={isEmployee} value="Employee">Employee</option>
         <option selected={isHR} value="hr">HR</option>
         <option selected={isAdmin} value="admin">Admin</option>
      </select>

   );
};

export default RoleSelection;