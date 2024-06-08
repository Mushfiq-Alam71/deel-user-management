import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorksheet = () => {
   const axiosSecure = useAxiosSecure();
   const { data: worksheet = [] } = useQuery({
      queryKey: ['worksheet'],
      queryFn: async () => {
         const res = await axiosSecure.get('/worksheet')
         return res.data;
      }
   })
   return [worksheet]
};

export default useWorksheet;