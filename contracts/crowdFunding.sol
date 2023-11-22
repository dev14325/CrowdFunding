// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 < 0.9.0;

contract demo {
    struct Memo {
        string name;
        string message;
        address from;
        uint timestamp;
        uint amount;
    }
   
   Memo[] memos;

   address payable owner;
    uint public totalDonation;
   constructor(){
       owner = payable(msg.sender);
   }

   function buyCofee(string memory name, string memory message) public payable {
       require(msg.value > 0, "Please send more than 0 Eth");
       owner.transfer(msg.value);

       // Include the amount in the new memo
       memos.push(Memo(name, message, msg.sender, block.timestamp, msg.value));
   }

   function getMemos() public view returns (Memo[] memory) {
       return memos;
   }

   function getTotalDonation() public view returns (uint) {
        uint total = 0;
    for (uint i = 0; i < memos.length; i++) {
        total += memos[i].amount;
    }
    return total;
    }
}
