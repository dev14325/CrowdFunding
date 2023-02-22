require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
const GEORLI_URL = process.env.GEORLI_URL;


const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GEORLI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};