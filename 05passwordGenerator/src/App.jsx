import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // User Ref Hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+=-/.,<>?;':[]{}`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // const copyPasswordToClipboard = () => {
  //   navigator.clipboard.writeText(password);
  //   alert("Password copied to clipboard!");
  // };

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
     alert("Password copied to clipboard!");
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-6 py-6 my-8 bg-gray-800">
      <h1 className="text-center text-white text-2xl font-semibold mb-4">
        Password generator
      </h1>

      <div className="flex overflow-hidden rounded-lg bg-white shadow-inner">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-4 text-gray-700 text-lg"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 text-white px-4 text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          copy
        </button>
      </div>

      <div className="flex flex-col sm:flex-row text-sm gap-4 mt-4">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-white">Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
