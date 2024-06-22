import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://b9-a12-server-puce.vercel.app'
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;