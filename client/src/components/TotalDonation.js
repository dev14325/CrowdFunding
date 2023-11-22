import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const TotalDonation = ({ state }) => {
  const { contract } = state;
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    const fetchTotalDonation = async () => {
      if (contract) {
        try {
          const donation = await contract.getTotalDonation();
          setTotalDonation(ethers.utils.formatEther(donation)); // Convert from wei to Ether if needed
        } catch (error) {
          // Handle errors if any
          console.error("Error fetching total donation:", error);
        }
      }
    };

    fetchTotalDonation(); // Fetch on component mount
  }, [contract]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
       <h3>Total Donation Amount</h3> 
       <p>{`${totalDonation} ETH`}</p> 
    </div>
  );
};

export default TotalDonation;
