//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract OwnerOperator2 is OwnableUpgradeable {
    mapping(address => bool) public operators;
    uint256 public num;
    function initialize() public initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        num = 0;
    }

    modifier operatorOrOwner() {
        require(
            operators[msg.sender] || owner() == msg.sender,
            "OwnerOperator: !operator, !owner"
        );
        _;
    }

    modifier onlyOperator() {
        require(operators[msg.sender], "OwnerOperator: !operator");
        _;
    }

    function addOperator(address operator) external virtual onlyOwner {
        require(
            operator != address(0),
            "OwnerOperator: operator is the zero address"
        );
        operators[operator] = true;
    }

    function removeOperator(address operator) external virtual onlyOwner {
        require(
            operator != address(0),
            "OwnerOperator: operator is the zero address"
        );
        operators[operator] = false;
    }

    function testcase1() operatorOrOwner public view returns(uint256){
        return 3;
    }

    function testcase2() onlyOperator public view returns(uint256){
        return 4;
    }

    function numadjust() public returns(uint256){
        num = num - 1;
        return num;
    }
}
