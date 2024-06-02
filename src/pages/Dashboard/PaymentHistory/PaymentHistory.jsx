

const PaymentHistory = () => {
   return (
      <div className="my-8">
         <div className="overflow-x-auto">
            <table className="table table-zebra">
               {/* head */}
               <thead>
                  <tr className="">
                     <th className="text-lg text-black"></th>
                     <th className="text-lg text-black">Month</th>
                     <th className="text-lg text-black">Amount</th>
                     <th className="text-lg text-black">Transaction Id</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  <tr>
                     <th>1</th>
                     <td>Cy Ganderton</td>
                     <td>Quality Control Specialist</td>
                     <td>Blue</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default PaymentHistory;