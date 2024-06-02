import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const WorkSheet = () => {
   const [startDate, setStartDate] = useState(new Date());

   return (
      <div className="max-w-7xl mx-auto my-8 ">
         <div className="py-20 px-36 rounded-xl  bg-[#b2b5b548] ">
            <div className="text-center pb-8">
               <h2 className="text-4xl font-semibold dark:text-black">Work Sheet</h2>
            </div>
            <form className="p-8 rounded-2xl">

               {/* form row 1*/}
               <div className="md:flex gap-4">
                  {/* task category */}
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-base font-semibold dark:text-black">Task category</span>
                     </label>
                     <select id="taskSelect" className="select select-bordered w-full">
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
                  </div>
                  {/* hours worked */}
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-base font-semibold dark:text-black">Hours Worked</span>
                     </label>
                     <label className="input-group">
                        <input type="number" placeholder="Enter hours worked" name="hours" className="input input-bordered w-full" />
                     </label>
                  </div>
                  {/* date */}
                  <div className="md:flex gap-4">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-base font-semibold dark:text-black">Date</span>
                        </label>
                        <div className="App">
                           <DatePicker className="input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                     </div>
                  </div>
               </div>

               <input type="submit" className="btn btn-outline w-full text-white bg-[#04041cd8] hover:bg-[#04041cbf] mt-4" value="Add Work" />
            </form>
         </div>
      </div>
   );
};

export default WorkSheet;