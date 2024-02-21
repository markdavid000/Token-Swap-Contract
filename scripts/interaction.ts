import { ethers } from "hardhat";

async function main() {
  const spender = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const allowance = 50;

  const ERC20TokenOne = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const ERC20TOKENONE = await ethers.getContractAt("ERC20Token", ERC20TokenOne);

  const approveOne = await ERC20TOKENONE.approve(spender, allowance);

  await approveOne.wait();

  const ERC20TokenTwo = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const ERC20TOKENTWO = await ethers.getContractAt("ERC20Token", ERC20TokenTwo);

  const approveTwo = await ERC20TOKENTWO.approve(spender, allowance);

  await approveTwo.wait();

  const tokenAmount = 30;

  const TokenSwap = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

  const SWAPPING = await ethers.getContractAt("ITokenSwap", TokenSwap);

  const createStakingTx = await SWAPPING.swap(tokenAmount);

  await createStakingTx.wait();

  console.log(createStakingTx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
