import abi from "./contracts/demo.json"
import {useState,useEffect} from 'react';
import {ethers, Signer} from 'ethers';
import Buy from "./components/Buy";
import memos from "./components/memo";
import './App.css';

function App() {
  const [state,setState] = useState({
    provider : null,
    signer : null,
    contract :  null,

  })
  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress = "0x2BA7675698bfa41e987d16f27eB05F05DCAc41A0";
      const contractAbi = abi.abi;

      try{
        const {ethereum} = window;
        if(ethereum){
          const account = await ethereum.request({method : "eth_requestAccounts"})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractAbi,signer);
       setState({provider,signer,contract});
      }
      catch{
        console.error();
      }


    };
    connectWallet();

  },[]);
  console.log(state);
  return (

    <div className="App">
    <Buy state={state}> </Buy>
     
    </div>
  );
}

export default App;
