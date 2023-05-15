//SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract numeric1 is Initializable{
    mapping(address => bool) public operators;
    uint256 public num;
    function initialize() public initializer {
        num = 0;
    }

    function numadjust() public returns(uint256){
        num = num - 1;
        return num;
    }
}
