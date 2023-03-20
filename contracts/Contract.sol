// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface WinnerContract {
    function attempt() external;
}

contract Contract {
    function sendAttempt(address _contract) public {
        return WinnerContract(_contract).attempt();
    }
}
