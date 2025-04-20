import React, { useEffect } from "react";
import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import currencyImg from "../assets/currency-bg.jpg";

export default function CurrencyHome() {

    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(fromCurrency);
    const options = Object.keys(currencyInfo);

    useEffect(() => {
        console.log("fromAmount", fromAmount);
        console.log("currencyInfo", currencyInfo);
        console.log("toCurrency", toCurrency);
        console.log("currencyInfo[toCurrency]", currencyInfo[toCurrency]);


        setToAmount((fromAmount * currencyInfo[toCurrency]));
    }, [fromAmount, currencyInfo, toCurrency, fromCurrency]);

    const swap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setFromAmount(toAmount)
        setToAmount(fromAmount)
      }

    return (
        <div style={{ backgroundImage: `url(${currencyImg})`, backgroundSize: 'cover', height: '100vh' }} className="bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 shadow-xl bg-orange-200 rounded-xl p-4">Currency Converter (React+Vite)</h1>
        <h4 className="text-lg font-semibold text-center text-yellow-200 mb-4 shadow-lg bg-gray-400 rounded-xl p-4">Data is fetched in real-time from https://v6.exchangerate-api.com</h4>
        <div className="shadow-md rounded-4xl px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 max-w-lg items-center mt-20 mx-auto bg-linear-[10deg,darkgray_10%,silver_50%]">
        <InputBox 
        label="From"
        selectedCurrency={fromCurrency}
        currencyOptions={options}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onAmountChange={(e) => setFromAmount(e.target.value)}
        />

        <br/>
        <button onClick={swap}
        className="shadow-xl border-red-50 m-6 p-2 flex  bg-cyan-500 rounded-lg">Swap</button>
        <br/>

        <InputBox label="To"
        selectedCurrency={toCurrency}
        currencyOptions={options}
        onCurrencyChange={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        />
        </div>
        </div>
    );
    }
