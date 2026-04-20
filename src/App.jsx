import React from 'react'
import { useState, useCallback, useEffect , useRef} from 'react'; 

function App() {

    const[length, setLength] = useState(8);
    const[number, setNumber] = useState(false);
    const[char, setChar] = useState(false);
    const[password, setPassword] = useState("");
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(number){
        str += "0123456789";
      }
      if(char){
        str += "@#$%^&*()!_+";
      }

      for(let i=0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1 );
      pass += str.charAt(char);
      }
      setPassword(pass);
    } , [length, number, char, setPassword])

    const copytoclipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 9999);
      window.navigator.clipboard.writeText(password)
    } , [password]);

    useEffect(() => {
  passwordGenerator();
}, [length, number, char, passwordGenerator]); 

        return (
    <>
  <div class="border-2 border-green-500 shadow-md rounded w-100 p-5 mx-auto text-orange-800 px-4 my-10">
    <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
    <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} readOnly placeholder="Generated Password" ref={passwordRef} className="outline-none w-full py-1 px-3" />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-500 rounded cursor-pointer" onClick={() => copytoclipboard()}>Copy</button>
    </div>

    <div className="flex text-sm gap-x-2 mt-6">
      <div className="flex item-center gap-x-1">
        <input type="range" min="8" max="50" value={length} onChange={(e) => setLength(e.target.value)} />
        <span>{length}</span>
      </div>
      <div className="flex item-center gap-x-1">
        <input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)} className="cursor:pointer"/>
        {/* <input type="checkbox" checked={number} onChange={(e) => setNumber((prev) => !prev)) className="cursor:pointer"/> */}
        <span>Numbers</span>
      </div>
      <div className="flex item-center gap-x-1">
        <input type="checkbox" checked={char} onChange={(e) => setChar(e.target.checked)} className="cursor:pointer"/>
        {/* <input type="checkbox" checked={char} onChange={(e) => setChar((prev) => !prev))} className="cursor:pointer"/> */}
        <span> Characters</span>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
