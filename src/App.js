import './App.css';
import { ethers } from "ethers";
import { useState } from 'react';
import './Font.css'

function App() {
  const [address, setAddress] = useState("Click button Generate untuk Generate Phrase")
  const [phrase, setPhrase] = useState("")
  const [pk, setPk] = useState("")
  const [total, setTotal] = useState(0)

  function generateEVM() {
      const generateRandom = ethers.Wallet.createRandom()

      const address = generateRandom.address
      const phrase = generateRandom.mnemonic.phrase
      const privateKey = generateRandom.privateKey;

      setAddress(`Address : ${address}`)
      setPhrase(`Phrase : ${phrase}`)
      setPk(`Private Key : ${privateKey}`)

      setTotal(total+1)
  }

  return (
    <div className="App text-center font mx-10">
      <h1 className='text-3xl pt-10'>Generate Phrase</h1>

      <button onClick={() => generateEVM()} className='border border-black bg-slate-200 w-32 h-10 mt-5'>Generate</button>

      <h1 className='pt-4 text-sm break-words'>{address}</h1>
      <h1 className='pt-1 text-sm overflow-hidden break-words'>{phrase}</h1>
      <h1 className='pt-1 text-sm break-words'>{pk}</h1>

      <h1 className='pt-6'>Total Generate : {total}</h1>
    </div>
  );

  
}



export default App;
