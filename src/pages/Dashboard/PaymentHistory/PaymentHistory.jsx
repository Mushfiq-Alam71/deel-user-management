import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";


const PaymentHistory = () => {
   const axiosSecure = useAxiosPublic();
   const { data: payment = [] } = useQuery({
      queryKey: ['payment'],
      queryFn: async () => {
         const res = await axiosSecure.get('/payment')
         return res.data;
      }
   })
   return (
      <div className="">
         <div className="overflow-x-auto">
            <table className="table table-zebra">
               {/* head */}
               <thead>
                  <tr className="">
                     <th className="text-lg text-black"></th>
                     <th className="text-lg text-black">Employee Name</th>
                     <th className="text-lg text-black">Month</th>
                     <th className="text-lg text-black">Amount</th>
                     <th className="text-lg text-black">Transaction Id</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     payment.map((payment, index) => (
                        <tr key={payment._id}>
                           <th>{index + 1}</th>
                           <td>{payment.employee_name}</td>
                           <td>{payment.payment_month}</td>
                           <td>{payment.salary}</td>
                           <td>Blue</td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default PaymentHistory;