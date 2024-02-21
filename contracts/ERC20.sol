// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Token is ERC20, Ownable {
    constructor(address initialAddress, string memory tokenName, string memory symbol)
        ERC20(tokenName, symbol)
        Ownable(initialAddress)
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}