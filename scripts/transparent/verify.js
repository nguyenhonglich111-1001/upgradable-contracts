const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    
    console.log("\nStart Verify\n");
    await hre.run("verify:verify", {
      address: "0x35e6C42eEc24Eb87c2944EE84c31fA2A1edC9Ccb",
      constructorArguments: [],
      contract: "contracts/OwnerOperator.sol:OwnerOperator",
    });
}

main();
