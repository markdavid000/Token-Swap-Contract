// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    function totalSupply() external view returns(uint256);

    function balanceOf(address _account) external view returns(uint256);

    function transfer(address _recipient, uint256 _amount) external returns(bool);

    function allowance(address _owner, address _spender) external view returns(uint256);

    function approve(address _spender, uint256 _amount) external returns(bool);

    function transferFrom(address _sender, address _recipient, uint256 _amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 _amount, uint256 _fee);
    event Approval(address indexed owner, address indexed spender, uint256 _amount);
}