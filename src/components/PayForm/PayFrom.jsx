import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const PayFrom = ({ employee }) => {

   const [selectedMonthData, setSelectedMonthData] = useState({
      month: 1,
      year: 2024,
   });
   const [isPickerOpen, setIsPickerOpen] = useState(false);
   return (
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
   );
};

export default PayFrom;