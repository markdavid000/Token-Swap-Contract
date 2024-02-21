import { ethers } from "hardhat";

async function main() {
  const InitialAddress1 = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const InitialAddress2 = "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2";

  const ERC20TokenOne = await ethers.deployContract("ERC20Token", [
    InitialAddress1,
    "MarkToken1",
    "MTK1",
  ]);

  await ERC20TokenOne.waitForDeployment();

  console.log(`ERC20TokenOne has been deployed to ${ERC20TokenOne.target}`);

  const ERC20TokenTwo = await ethers.deployContract("ERC20Token", [
    InitialAddress2,
    "MarkToken2",
    "MTK2",
  ]);

  await ERC20TokenTwo.waitForDeployment();

  console.log(`ERC20TokenTwo has been deployed to ${ERC20TokenTwo.target}`);

  const tokenSwap = await ethers.deployContract("TokenSwap", [
    ERC20TokenOne.target,
    InitialAddress1,
    ERC20TokenTwo.target,
    InitialAddress2
  ]);

  await tokenSwap.waitForDeployment();

  console.log(`tokenSwap has been deployed to ${tokenSwap.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
