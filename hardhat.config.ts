import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-gas-reporter";
require('dotenv').config();

import {task} from "hardhat/config";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  defaultNetwork: "polygon",
  networks: {
    polygon: {
      url: process.env.ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY],
      gas: 6500000,
      gasLimit: 1000000,
      
    }
  },
  solidity:  {
    compilers: [
      {
        version: "0.6.0",
      },
      {
        version: "0.8.1",
        settings: {},
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
