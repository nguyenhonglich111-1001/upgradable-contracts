// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const numericFac = await ethers.getContractFactory("Numeric_uups");
  const numericDeploy = await upgrades.deployProxy(
    numericFac,
    [],
    (opts = { kind: "uups" })
  );
  await numericDeploy.deployed();
  console.log("numeric proxy deployed to:", numericDeploy.address);

  const proxyAddress = numericDeploy.address;
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );
  console.log("Implementation address: ", implementationAddress);

  console.log(`2./ Verify contract numeric`);
  // console.log("\n Waiting for 5 block confirmations\n");
  // await numericDeploy.deployTransaction.wait(6);

  // console.log("\nStart Verify\n");
  // await hre.run("verify:verify", {
  //   address: implementationAddress,
  //   constructorArguments: [],
  //   contract: "contracts/numeric.sol:numeric",
  // });
}

main();
