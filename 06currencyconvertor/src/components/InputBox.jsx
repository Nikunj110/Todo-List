import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-black border border-gray-600 p-3 rounded-lg text-sm flex justify-between gap-4 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-white mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent text-white placeholder-white/70 py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          min="0"
          step="0.01"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-end">
        <label className="text-white mb-2 inline-block">Currency Type</label>
        <select
          className="rounded-md px-2 py-1 bg-gray-800 text-white cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable || !currencyOptions.length}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;