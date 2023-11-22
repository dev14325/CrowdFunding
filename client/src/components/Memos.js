import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };

    contract && fetchMemos();
  }, [contract]);

  return (
    <>
      <h3> Messages</h3>
      <p style={{ textAlign: "center", marginTop: "20px" }}> 
    
      </p>
      {memos.map((memo) => (
        <div key={memo.timestamp}>
          <p>{`Name: ${memo.name}`}</p>
          <p>{`Timestamp: ${new Date(memo.timestamp * 1000).toLocaleString()}`}</p>
          <p>{`Message: ${memo.message}`}</p>
          <p>{`From: ${memo.from}`}</p>
          {memo.amount !== undefined && (
            <p>{`Amount: ${ethers.utils.formatUnits(memo.amount, "ether")} Eth`}</p>
          )}
          <hr />
        </div>
      ))}
    </>
  );
};

export default Memos;
