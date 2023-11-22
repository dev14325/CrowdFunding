import { ethers } from "ethers";
import { useState } from "react";

const Buy = ({ state }) => {
  const [amount, setAmount] = useState(""); // Default amount

  const buyCofee = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);

    // Convert the user input to the appropriate format
    const userAmount = ethers.utils.parseEther(amount);
    console.log("User Amount:", userAmount);

    // Create the transaction object
    const transaction = await contract.buyCofee(name, message, {
      value: userAmount,
    });

    // Wait for the transaction to be mined
    await transaction.wait();
    console.log("Transaction is done");
  };

  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyCofee}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount (ETH)</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
