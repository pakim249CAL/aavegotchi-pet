import "@nomiclabs/hardhat-waffle";
import {ethers} from "hardhat";
import utils from "web3-utils";
import hre from "hardhat";


const gameAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";
const GWEI = 1000000000n
const HOUR = 1000 * 60 * 60;

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Owner", owner.address);

  while(true) {
    const tx = await owner.sendTransaction({to: gameAddress, data: process.env.TX_DATA, gasPrice: 50n * GWEI, gasLimit: 60000});
    console.log(tx.hash);
    console.log("Going to sleep for 12.2 hours");
    await delay(HOUR * 12.2);
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
