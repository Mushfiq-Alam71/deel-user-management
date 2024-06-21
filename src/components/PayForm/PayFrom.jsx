import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const PayFrom = ({ employee, onSubmit, setMonths }) => {
   const [selectedMonthData, setSelectedMonthData] = useState({
      month: 1,
      year: 2024,
   });
   const [isPickerOpen, setIsPickerOpen] = useState(false);

   const { register, handleSubmit, formState: { errors } } = useForm();

   const handleMonthChange = (data) => {
      setSelectedMonthData(data);
      setMonths(data); // Update the parent state with the selected month data
   };

   return (
      <div className="modal-action">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex flex-row">
               <div>
                  <h1 className='text-center clear-start text-3xl pb-12'>You want to pay {employee?.name}?</h1>
                  <div {...register("name", { required: false })}>
                     <h1 className='text-2xl font-semibold pb-2'>Employee name: {employee?.name}</h1>
                  </div>
                  {errors.name && <span className="text-red-400">Please choose date</span>}
                  <div {...register("salary", { required: false })}>
                     <h1 className='text-2xl font-semibold pb-2'>Salary: {employee?.salary}</h1>
                  </div>
                  {errors.salary && <span className="text-red-400">Please choose date</span>}
                  <div className='text-sm'>
                     <div {...register("date", { required: false })}>
                        <MonthInput
                           onChange={handleMonthChange}
                           selected={selectedMonthData}
                           setShowMonthPicker={setIsPickerOpen}
                           showMonthPicker={isPickerOpen}
                        />
                        {isPickerOpen && (
                           <MonthPicker
                              setIsOpen={setIsPickerOpen}
                              selected={selectedMonthData}
                              onChange={handleMonthChange}
                           />
                        )}
                     </div>
                     {errors.date && <span className="text-red-400">Please choose date</span>}
                  </div>
               </div>
               <button type="submit" className="btn absolute top-[280px] right-[90px]">Pay</button>
               <button onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById('my_modal');
                  modal.close();
               }} className="btn absolute top-[280px] right-[0px]">Close</button>
            </div>
         </form>
      </div>
   );
};

export default PayFrom;