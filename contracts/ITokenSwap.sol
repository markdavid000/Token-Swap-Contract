// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITokenSwap {
    function swap(uint256 _tokenAmount) external returns (bool);
}