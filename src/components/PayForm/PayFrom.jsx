import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const PayFrom = ({ employee, form }) => {

   const [selectedMonthData, setSelectedMonthData] = useState({
      month: 1,
      year: 2024,
   });
   const [isPickerOpen, setIsPickerOpen] = useState(false);

   const onSubmit = (data) => {
      console.log(data);
   }

   return (
      <div className="modal-action">
         <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <div className="relative flex flex-row">
               <div>
                  <h1 className='text-center clear-start text-3xl pb-12'>You want to pay '{employee.name}'?</h1>
                  <h1 className='text-2xl font-semibold pb-2'>Employee name: {employee.name}</h1>
                  <h1 className='text-2xl font-semibold pb-2'>Salary: {employee.salary}</h1>
                  <div className='text-sm'>
                     <div>
                        <MonthInput
                           selected={selectedMonthData}
                           setShowMonthPicker={setIsPickerOpen}
                           showMonthPicker={isPickerOpen}
                        />
                        {isPickerOpen ? (
                           <MonthPicker
                              setIsOpen={setIsPickerOpen}
                              selected={selectedMonthData}
                              onChange={setSelectedMonthData}
                           />
                        ) : null}
                     </div>
                  </div>
               </div>
               <button className="btn absolute top-[280px] right-[90px]">Pay</button>

               <button onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById('my_modal');
                  modal.close()
               }} className="btn absolute top-[280px] right-[0px]">Cancel</button>
            </div>
         </form>
      </div>

   );
};

export default PayFrom;