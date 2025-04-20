import React from 'react';
import '../css/InputBox.css';
import { useId } from 'react'; // Import useId from React

export default function InputBox({ 
    label, 
    amount=0, 
    selectedCurrency, 
    currencyOptions = [],
    onCurrencyChange, 
    onAmountChange }) {

        //const roundedAmount = Math.round(amount);
        const amountInputId = useId(); // Generate a unique ID for the amount input field
        const currencySelectId = useId(); // Generate a unique ID for the currency select field
  return (
    <div className="bg-gray-400 shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
    <div className='border-rounded-lg'>
      <label className='pr-5'>{label}</label>
      <input type="text" 
            value={amount} 
            onChange={onAmountChange} 
            id={amountInputId}
            className="text-white bg-gray-700 rounded-lg p-1"
        />
    </div>
    <div>
        <label className='pr-5'>Currency</label>
        <select value={selectedCurrency} 
            onChange={onCurrencyChange} 
            id={currencySelectId}
            className="text-white bg-gray-700 rounded-lg p-1">

                            {currencyOptions.map((curr) => (
                            <option key={curr} value={curr}>
                            {curr}
                            </option>
                        ))}

        </select>
    </div>
    </div>
  );
}