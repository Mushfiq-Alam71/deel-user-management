import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useEmployee = () => {
   const axiosSecure = useAxiosSecure();
   const { data: employee = [] } = useQuery({
      queryKey: ['employee'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })
   return [employee]
};

export default useEmployee;