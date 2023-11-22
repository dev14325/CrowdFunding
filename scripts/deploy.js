const hre = require("hardhat");


async function getBalances(address){
  const temp = await hre.ethers.provider.getBalance(address);
  const bal = hre.ethers.utils.formatEther(temp);
  return bal;
}

async function consoleBalance(addresses){
  let count = 0;
  for(const address of addresses){
    console.log(`Address ${count} balance :`,await getBalances(address));
    count++;
  }
}

async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(`At ${timestamp},name ${name} , address ${from}, message ${message}`);
  }
}



async function main() {
  const [owner, from1 ,from2 ,from3] = await hre.ethers.getSigners();
  const ins = await hre.ethers.getContractFactory("demo");
  const contract = await ins.deploy();
  await contract.deployed();

  console.log("Contract adress is : ",contract.address);

  const addresses = [owner.address,from1.address,from2.address,from3.address];

  console.log("Balances before buying cofee");

  await consoleBalance(addresses);

  const amount = {value : hre.ethers.utils.parseEther("1")};
  await contract.connect(from1).buyCofee("from 1","nice job",amount);
  await contract.connect(from2).buyCofee("from 2","good intiative",amount);
  await contract.connect(from3).buyCofee("from 3","hello folk",amount);

  console.log("Balances after buying cofee");

  await consoleBalance(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
  

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
