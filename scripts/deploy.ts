import { ethers } from "hardhat";

async function main() {
  const InitialAddress = "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2";

  const ERC20TokenOne = await ethers.deployContract("ERC20Token", [
    InitialAddress,
    "MarkToken1",
    "MTK1",
  ]);

  await ERC20TokenOne.waitForDeployment();

  console.log(`ERC20TokenOne has been deployed to ${ERC20TokenOne.target}`);

  const ERC20TokenTwo = await ethers.deployContract("ERC20Token", [
    InitialAddress,
    "MarkToken2",
    "MTK2",
  ]);

  await ERC20TokenTwo.waitForDeployment();

  console.log(`ERC20TokenTwo has been deployed to ${ERC20TokenTwo.target}`);

  const tokenSwap = await ethers.deployContract("TokenSwap", [
    ERC20TokenOne.target,
    ERC20TokenTwo.target,
  ]);

  await tokenSwap.waitForDeployment();

  console.log(`TokenSwap has been deployed to ${tokenSwap.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
