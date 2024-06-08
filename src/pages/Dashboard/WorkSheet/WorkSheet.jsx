import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import moment from "moment";
import { AuthContext } from "../../../providers/AuthProvider";
import useWorksheet from "../../../components/Hooks/useWorksheet";


const WorkSheet = () => {
   const [startDate, setStartDate] = useState(new Date());
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const axiosSecure = useAxiosSecure();
   const { user } = useContext(AuthContext);

   console.log(user);

   const onSubmit = (data) => {

      const workSheetInfo = { ...data, submitted_time: moment().format("YYYY-MM-DD HH:mm A"), submitted_by: user && user.displayName ? user.displayName : "Unknown", submitted_email: user.email }

      axiosSecure.post('/worksheet', workSheetInfo)
         .then(res => {
            if (res.data.insertedId) {
               Swal.fire({
                  title: 'Congratulations!',
                  text: `Your work info added Successfully!`,
                  icon: 'success',
                  confirmButtonText: 'Okay!'
               })
               reset();
            }
         })
         .catch(error => {
            console.error(error);
            if (error) {
               Swal.fire({
                  title: 'Error!!',
                  text: error,
                  icon: 'error',
                  confirmButtonText: 'Close'
               })
            }
         })

   }

   const [worksheet] = useWorksheet();

   return (
      <div className="max-w-7xl mx-auto my-8 ">
         <div className="py-8 px-28 rounded-xl  bg-[#b2b5b548] ">
            <div className="text-center pb-2">
               <h2 className="text-3xl font-semibold dark:text-black">Work Sheet</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-2 rounded-2xl">

               {/* form row 1*/}
               <div className="md:flex gap-4">
                  {/* task category */}
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-base font-medium dark:text-black">Task category</span>
                     </label>
                     <select {...register("task", { required: true })} id="taskSelect" className="select select-bordered w-full">
                        <option disabled selected>Choose task</option>
                        <option value="Sales" className="">Sales</option>
                        <option value="Support" className="">Support</option>
                        <option value="Content" className="">Content</option>
                        <option value="Paper-work" className="">Paper-work</option>
                        <option value="Development" className="">Development</option>
                        <option value="Testing" className="">Testing</option>
                        <option value="Design" className="">Design</option>
                        <option value="Marketing" className="">Marketing</option>
                        <option value="Data entry" className="">Data entry</option>
                        <option value="Finance" className="">Finance</option>
                        <option value="Quality Assurance" className="">Quality Assurance</option>
                     </select>
                     {errors.task && <span className="text-red-400">Please select task</span>}
                  </div>
                  {/* hours worked */}
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-base font-medium dark:text-black">Hours Worked</span>
                     </label>
                     <label className="input-group">
                        <input {...register("hours", { required: true })} type="number" placeholder="Enter hours worked" name="hours" className="input input-bordered w-full" />
                        {errors.hours && <span className="text-red-400">Enter hours worked</span>}
                     </label>
                  </div>
                  {/* date */}
                  <div className="md:flex gap-4">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-base font-medium dark:text-black">Date</span>
                        </label>
                        <div {...register("date", { required: true })} className="App">
                           <DatePicker className="input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        {errors.date && <span className="text-red-400">Please choose date</span>}
                     </div>
                  </div>
               </div>

               <input type="submit" className="btn btn-outline w-full text-white bg-[#04041cd8] hover:bg-[#04041cbf] mt-4" value="Add Work" />
            </form>
         </div>
         <div className="my-20">
            <div className="overflow-x-auto">
               <table className="table table-zebra">
                  {/* head */}
                  <thead>
                     <tr>
                        <th></th>
                        <th className="text-lg text-blue-400">Employee Name</th>
                        <th className="text-lg text-blue-400">Task worked</th>
                        <th className="text-lg text-blue-400">Hours worked</th>
                        <th className="text-lg text-blue-400">Submission time</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        worksheet.map((worksheet, index) => <tr key={worksheet._id}>
                           <th>{index + 1}</th>
                           <td>{worksheet.submitted_by}</td>
                           <td>{worksheet.task}</td>
                           <td>{worksheet.hours}</td>
                           <td>{worksheet.submitted_time}</td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default WorkSheet;