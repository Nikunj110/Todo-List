import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    if (amount > 0 && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 bg-black shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(value) => setAmount(value)}
              selectCurrency={from}
            />
          </div>

          <div className="relative w-full h-8 my-2">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-md bg-blue-600 text-white px-3 py-1 shadow-md hover:bg-blue-700 transition-colors"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold tracking-wide shadow-md hover:bg-blue-700 transition-colors"
            onClick={() => {
              if (amount > 0 && currencyInfo[to]) {
                setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
              }
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;