// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {

  // numeric proxy deployed to: 0x7Bcb860C326B75CeFB8c2fc366750E8ACfA6f31c
  // Implementation address:  0x4b19Aa9de7B64b571212d62eDa842c531071EB80
  const numeric = await ethers.getContractAt(
    "numeric",
    "0x7Bcb860C326B75CeFB8c2fc366750E8ACfA6f31c"
  );
  // 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512

  console.log('Cur num:',await (numeric.num()))

  await numeric.numadjust()

  console.log('Cur num:',await (numeric.num()))



}

main();
