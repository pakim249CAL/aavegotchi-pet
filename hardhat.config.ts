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
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/6adOn8fQFLYEk7XrpUHgQ2gaBGiB3Sv7",
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
        version: "0.8.0",
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
