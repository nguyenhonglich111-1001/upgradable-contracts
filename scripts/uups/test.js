// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {

  // numeric proxy deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
  // Implementation address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
  const numeric = await ethers.getContractAt(
    "Numeric_uups",
    "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  );
  // 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512

  console.log('Cur num:',await (numeric.num()))

  await numeric.numadjust()

  console.log('Cur num:',await (numeric.num()))



}

main();
