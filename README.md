# Ethernaut Challenges

I'm just solving ethernaut challenges

1. Clone respository
2. Create .env file and put PRIVATE_KEY=put_key_here (NO QUOTES)
3. npm install hardhat
4. To run any scripts, use npx hardhat run scripts/script.js

Solutions:

0. Tutorial level (Used web console)
1. Simply send some ether via contribute and then send ether to the contract directly to win. (Used web console)
2. The constructor name is slightly different from the contract name. You can simply call this misnamed function to win. (Used web console)
3. Because the random number is based on the current block number, CoinFlipExploiter can simply calculate the random number and call CoinFlip's flip function with the precomputed outcome. Do this ten times to win. (Used remix)
4. The transaction origin is always an EOA account while msg.sender can be the intermediary in a chain of contracts. Just make a contract that calls the telephone contract to win. (Used remix)
5. This is a demonstration of the behavior of numbers in early solidity versions. Just transfer more than 20 tokens from yourself to cause an underflow and bring your token up to near the max amount.
6. Openzeppelin has great documentation on fallback functions. After doing the research, compute web3.utils.sha3() of the data you want to send. In this instance, this is the string "pwn()". This will trigger the delegateCall and call pwn from the Delegate contract with the Delegation storage as the context. Then call contract.sendTransaction({data: hash}). Check your gas limit if this isn't working.
7. Contracts have a method to self destruct, and all their ether is transferred to a designated address. This can be abused to force ether payment into a contract where you normally wouldnt.
8. The private keyword is only a promise and is easily bypassed. You can read any variable directly from storage by manually retrieving the storage at a specified index and decoding it as necessary.
9. Anything that relies on external contracts is a potential attack vector. Transferring ether is not guaranteed to work if the receiving contract has no fallback function, or the receive or fallback function is malicious.
10. Even transferring ether can be dangerous to untrusted contracts because contracts can implement malicious fallback functions. Here, we can abuse the fallback function to withdraw continuously before balances are updated properly in the contract.
11. The elevator relies on a function from an interface that hasn't been implemented. We can use this as an attack vector by implementing this function in a contract with evil in our hearts.
12. Another storage problem, but this time it's about figuring out where the password is stored and how to cast bytes32 to bytes16. Storage space is organized into blocks of 32 bytes, and variables will fill any available space if they can fit in the block in the order they are declared.
