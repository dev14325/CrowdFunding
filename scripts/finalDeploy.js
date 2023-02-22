const hre = require("hardhat");

async function main() {
    const ins = await hre.ethers.getContractFactory("demo");
    const contract = await ins.deploy();
    await contract.deployed();

};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });