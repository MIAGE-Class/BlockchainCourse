require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths:{
    artifacts:'./front-end/src/artifacts'
  },
  networks: {
    hardhatNetwork: {
      url: "http:/s/127.0.0.1:8545",
      chainId: 31337,
    },
  }
};

//BankModule#DefiBank - 0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5FbDB2315678afecb367f032d93F642f64180aa3