// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const numericAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const numeric = await ethers.getContractFactory("Numeric_uups1");
  const numericUpgraded = await upgrades.upgradeProxy(
    numericAddress,
    numeric,
    (opts = { kind: "uups" })
  );
  console.log("numericUpgraded upgraded");
}

main();
