// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITokenSwap {
    function swap(uint256 amount1, uint256 amount2) external;
}