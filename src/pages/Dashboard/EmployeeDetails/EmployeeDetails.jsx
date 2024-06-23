import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const EmployeeDetails = () => {
   const axiosPublic = useAxiosPublic();
   const loadedEmployee = useLoaderData();

   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FB0100', '#AA3BBC', '#23BE0A', '#59C6D2', '#005467', '#FFBB28', '#FF8042', '#FB0100', '#AA3BBC', '#23BE0A', '#59C6D2'];

   const { data: details = [] } = useQuery({
      queryKey: ['details'],
      queryFn: async () => {
         const res = await axiosPublic.get(`/payment/${loadedEmployee.name}`);
         return res.data;
      }
   });

   const chartData = details?.map(pay => ({
      month: pay.payment_month,
      salary: parseInt(pay.salary)
   }));

   console.log('Chart Data:', chartData);

   return (
      <div>
         <div className="text-center">
            <h1 className="text-3xl font-medium pb-8">
               <span className="text-3xl font-bold">Employee Name:</span> {loadedEmployee.name}
            </h1>
            <div className="flex flex-row justify-between">
               <div className="flex flex-col items-start gap-8">
                  <h1 className="text-3xl font-medium">
                     <span className="text-3xl font-bold">Email:</span> {loadedEmployee.email}
                  </h1>
                  <h1 className="text-3xl font-medium">
                     <span className="text-3xl font-bold">Role:</span> {loadedEmployee.role}
                  </h1>
               </div>
               <div className="flex flex-col items-start gap-8">
                  <h1 className="text-3xl font-medium">
                     <span className="text-3xl font-bold">Salary:</span> {loadedEmployee.salary}
                  </h1>
                  <h1 className="text-3xl font-medium">
                     <span className="text-3xl font-bold">Bank Info:</span> {loadedEmployee.bank}
                  </h1>
               </div>
            </div>
         </div>
         <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
               <BarChart
                  data={chartData}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis dataKey="salary" strokeDasharray="1 5" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="salary" fill="#8884d8" > {
                     chartData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                     ))
                  }</Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default EmployeeDetails;
