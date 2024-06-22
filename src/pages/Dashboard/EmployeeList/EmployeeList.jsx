import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import PayFrom from "../../../components/PayForm/PayFrom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import TableFeatured from "./TableFeatured";

const EmployeeList = () => {
   const [months, setMonths] = useState({});
   const [payableEmployee, setPayableEmployee] = useState(null);
   const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosPublic();

   const { data: employees = [], refetch } = useQuery({
      queryKey: ['employees'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users');
         return res.data;
      }
   });

   console.log(employees);

   const onSubmit = async () => {
      const payEmployeeInfo = {
         employee_name: payableEmployee.name,
         salary: payableEmployee.salary,
         payment_month: months.monthName
      };

      try {
         const res = await axiosSecure.post('/payment', payEmployeeInfo);
         if (res.data.insertedId) {
            Swal.fire({
               title: 'Congratulations!',
               text: 'Your payment has been Successfully!',
               icon: 'success',
               position: 'top-right',
               confirmButtonText: 'Okay!'
            });
         }
      } catch (error) {
         console.error(error);
         Swal.fire({
            title: 'Error!!',
            text: error.message,
            position: 'top-right',
            icon: 'error',
            confirmButtonText: 'Close'
         });
      }
   };

   const toggleVerified = async (vEmployee) => {
      const verifiedState = { verified: !vEmployee.verified };

      try {
         const res = await axiosPublic.patch(`users/${vEmployee._id}`, verifiedState);
         if (res.data.modifiedCount > 0) {
            toast.success('Status Changed');
            refetch();
         }
      } catch (error) {
         console.error(error);
         toast.error('Failed to change status');
      }
   };

   const filteredEmployees = employees.filter(emp => emp.role !== 'HR' && emp.role !== 'admin');

   const data = useMemo(() => filteredEmployees, [filteredEmployees]);

   /** @type import('@tanstack/react-table').ColumnDef<any> */
   const columns = [
      {
         header: '#',
         accessorKey: 'serial',
         enableSorting: false
      },
      {
         header: 'Name',
         accessorKey: 'name'
      },
      {
         header: 'Email',
         accessorKey: 'email'
      },
      {
         header: 'Role',
         accessorKey: 'role'
      },
      {
         header: 'Verified',
         accessorKey: 'verified',
         cell: (cell) => (
            <button className="cursor-pointer text-xl" onClick={() => toggleVerified(cell.row.original)}>
               {cell.row.original.verified ? '✅' : '❌'}
            </button>
         )
      },
      {
         header: 'Bank Account',
         accessorKey: 'bank'
      },
      {
         header: 'Salary',
         accessorKey: 'salary'
      },
      {
         header: 'Pay',
         accessorKey: 'verified',
         cell: (cell) => (
            <button
               disabled={!cell.row.original.verified}
               className="btn btn-outline btn-sm mt-1"
               onClick={() => {
                  document.getElementById('my_modal').showModal();
                  setPayableEmployee(cell.row.original);
               }}>
               Pay
            </button>
         )
      },
      {
         header: 'Details',
         accessorKey: '_id',
         cell: (cell) => (
            <Link className="hover:underline hover:text-blue-500" to={`/dashboard/single-employee/${cell.row.original._id}`}>
               View Details
            </Link>
         )
      }
   ];

   return (
      <div>
         <TableFeatured data={data} columns={columns} />
         <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-2/3 h-[600px]">
               <PayFrom setMonths={setMonths} employee={payableEmployee} onSubmit={onSubmit} />
            </div>
         </dialog>
      </div>
   );
};

export default EmployeeList;
