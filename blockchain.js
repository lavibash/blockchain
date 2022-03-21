const SHA256 = require('crypto-js/sha256');
//the cryptoblock of the chain
class Block{
    constructor(index, timestamp, data, precedingHash=" ") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.nonce = 0;
        this.hash = this.computeHash();
    }
    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString(); //parameters
    }
}
class Blockchain{
    constructor() {
        this.blockchain = [this.startGenesisBlock()]; //the array of blocks
    }
    startGenesisBlock(){ //cearting the block using .startGenesisBlock() method
        return new Block(0, '03/15/2022', "Intial Block in the Chain", "0"); //blocks are created with genesis which start with an index of 0
    }
    obtainLatestBlock = () => {
        return this.blockchain[this.blockchain.length - 1]; //needs to reference the preceding block
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash; //using the method to retrieve the last block so the chain can reference it
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
}
//testing the blockchain
let catcoin = new Blockchain();
catcoin.addNewBlock(new Block(1, "03/15/2022", {sender: "Lavi Avigad", recipient: "Lidor Avigad", quantity: 50}));
catcoin.addNewBlock(new Block(2, "3/15/2022", {sender: "Lavi Avigad", recipient: "Lavi Avigad", quantity: 100}));
console.log(JSON.stringify(catcoin, null, 4));


checkChainValidity = () => {
    for(let i = 1; i < this.blockchain.length; i++){
        const currentBlock = this.blockchain[i];
        const precedingBlock= this.blockchain[i-1];

        if(currentBlock.hash !== currentBlock.computeHash()){
            return false;
        }
        if(currentBlock.precedingHash !== precedingBlock.hash)
            return false;
    }
    return true;
}
