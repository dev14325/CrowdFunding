import {ethers} from "ethers";
const Buy =({state})=>{
    const buyCofee = async(event)=>{
        event.preventDefault();
        const {contract} = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        // console.log(name,message,contract);
        const amount = {value:ethers.utils.parseEther("0.001")}
        const transaction = await contract.buyCofee(name,message,amount);
        await transaction.wait();
        console.log("Transaction done !");


    };
    return( <> 
    <form onSubmit={buyCofee}>
        <label>Name</label>
        <input type ="text" id = "name" placeholder="Enter your name"></input>

        <label>Message</label>
        <input type ="text" id = "message" placeholder="Message"></input>
    
    <button type ="submit">Pay</button>
    </form>
    </>
    
    );
};
export default Buy;