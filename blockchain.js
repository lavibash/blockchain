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

let catcoin = new Block();
console.log('Mining block 1...');
console.log(new Block(1, "03/16/22", { amount: 4 }, this.hash, 0));

console.log('Mining block 2...');
console.log(new Block(2, "03/16/22", { amount: 8 }, this.hash, 1));
