// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {

    const numericAddress = "0x7Bcb860C326B75CeFB8c2fc366750E8ACfA6f31c";
    const numeric = await ethers.getContractFactory("numeric1");
    const numericUpgraded = await upgrades.upgradeProxy(numericAddress, numeric);
    console.log("numericUpgraded upgraded");
}

main();
