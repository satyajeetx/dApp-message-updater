// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;



const { ethers, network } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// console.log(JSON.stringify(contract.abi));

let alchemyProvider = new ethers.providers.AlchemyProvider("goerli",API_KEY); 
// let alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli",API_KEY);
// This will throw error,Just provide the network name, that should resolve your issue

const signer = new ethers.Wallet(PRIVATE_KEY,alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS,contract.abi,signer);

async function main(){
    const message = await helloWorldContract.message();
    console.log("The message is: "+message);

    // console.log("Updating the message......");
    // const tx = await helloWorldContract.update("This is the new message");
    // await tx.wait();
}
main();