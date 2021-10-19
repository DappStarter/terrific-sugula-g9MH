require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind huge guess problem blue gesture'; 
let testAccounts = [
"0xc81fa488751d924563b8fdf56f86c7cfb52e5884634e1ea22a7b85cfa9c78f61",
"0x3a8d17b87efbd0dea4d6d935f2e0a0418aa9c799ec00fb651970c77a0653b887",
"0x4bee2774d663a03c60c4fcd6cfaac4d1914b9a56dd28f09024f82cac658fc48e",
"0xca90cf9b2f379998f0205a18552703549f56f9e3d7f520b16d47b36977c30c8f",
"0x9292ef19e7b97b885e33e1c040e469b4a44f012688c010d7869e05c8bc3e221b",
"0x44c2df24cf90e5584a0b6497090f3d4352d05b71cf8f4ec8de07303fac383262",
"0xe420253193b086723eb3e006b3658365dd3d16e8eab98e6bbc947b4aeec068d6",
"0xbe93a462f170abe1217257971ad3af234ae8750924ddba565d904cff36409401",
"0x8b5b959498c52d604153866e1815e54a0ac29e179abc9745f9d9f5a3987228ca",
"0x5521205c4e4112357cafbb2e1ff2c2954845c7078b820ac9fb2d9a75cdea1326"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

