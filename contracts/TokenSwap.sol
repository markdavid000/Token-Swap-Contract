// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "./IERC20.sol";

error ZERO_ADDRESS_DETECTED();
error CANNOT_SWAP_ZERO_VALUE();

contract TokenSwap {
    address owner;
    IERC20 sendToken;
    IERC20 recieveToken;

    event TokenSwapped(address sender, uint256 amount, bool success);

    constructor(address _sendToken, address _recieveToken) {
        owner = msg.sender;
        sendToken = IERC20(_sendToken);
        recieveToken = IERC20(_recieveToken);
    }

    function swap(uint256 _tokenAmount) external returns (bool) {
        if(msg.sender == address(0)) {
            revert ZERO_ADDRESS_DETECTED();
        }

        if (_tokenAmount < 0) {
            revert CANNOT_SWAP_ZERO_VALUE();
        }

        uint256 ratio = tokenRatio();

        uint256 calculatedRation = _tokenAmount * ratio;

        sendToken.transferFrom(msg.sender, address(this), _tokenAmount);

        bool swapSuccess = recieveToken.transfer(msg.sender, calculatedRation);

        emit TokenSwapped(msg.sender, _tokenAmount, swapSuccess);

        return swapSuccess;
    }

    function tokenRatio() internal view returns (uint256) {
        uint256 totalSendToken = sendToken.totalSupply();
        uint256 totalRecieveToken = recieveToken.totalSupply();

        if(totalSendToken <= 0 || totalRecieveToken <= 0) {
            revert CANNOT_SWAP_ZERO_VALUE();
        }

        uint calculateTokenRatio = (totalRecieveToken * 1e18) / totalSendToken;

        return  calculateTokenRatio;
    }
}