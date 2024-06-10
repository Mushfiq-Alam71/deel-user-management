import { useLoaderData, useParams } from "react-router-dom";
// import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const EmployeeDetails = () => {
   const loadedEmployee = useLoaderData();
   const { id } = useParams();
   console.log(id, loadedEmployee);

   // const { id } = useParams();
   // const axiosSecure = useAxiosSecure();

   // const { isLoading, data: employee, refetch } = useQuery({
   //    enabled: !!id,
   //    queryKey: ['employee', id],
   //    queryFn: async () => {
   //       const res = await axiosSecure(`dashboard/single-employee/${id}`)
   //       return res.data;
   //    }
   // });
   return (
      <div className="text-center">
         <h1>{loadedEmployee._id}</h1>
         <h1>{loadedEmployee.name}</h1>
         <h1>{loadedEmployee.email}</h1>
         <h1>{loadedEmployee.role}</h1>
         <h1>{loadedEmployee.salary}</h1>
         <h1>{loadedEmployee.bank}</h1>
      </div>
   );
};

export default EmployeeDetails;