// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 < 0.9.0;

contract demo {
    struct Memo {
        string name;
        string message;
        address from;
        uint timestamp;
    }
   
   Memo[] memos;

   address payable owner;

   constructor(){
       owner = payable(msg.sender);

   }

   function buyCofee(string memory name , string  memory message) public payable{
       require(msg.value>0,"please send more than 0 Eth");
       owner.transfer(msg.value);
       memos.push(Memo(name,message,msg.sender,block.timestamp));

   }

   function getMemos() public view returns(Memo[] memory){
       return memos;
   }

}