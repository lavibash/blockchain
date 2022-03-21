const SHA256 = require('crypto-js/sha256')
const main = require('crypto')

class Block{
    constructor(timestamp, data, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.hash;
        this.nonce = 0;
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash; //using the method to retrieve the last block so the chain can reference it
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
mineBlock(difficulty) {
     // Keep changing the nonce until the hash of our block starts with enough zero's.
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }
    obtainLatestBlock = () => {
        return this.blockchain[this.blockchain.length - 1]; //needs to reference the preceding block
    }
        computeHash(){
            return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString(); //parameters
        }
blockchain = () => {
        this.chain = [this.creatGenesisBlock()];
        this.difficulty = 3;
}
    addBlock = (newBlock) => {
        newBlock = newBlock.previousHash;
        newBlock= this.obtainLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        return newBlock
    }
}
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
let catcoin = new Block();
catcoin.addNewBlock(new Block(1, "03/15/2022", {sender: "Lavi Avigad", recipient: "Lidor Avigad", quantity: 50}));
catcoin.addNewBlock(new Block(2, "3/15/2022", {sender: "Lavi Avigad", recipient: "Lavi Avigad", quantity: 100}));
console.log(JSON.stringify(catcoin, null, 4));
