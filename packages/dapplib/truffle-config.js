require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain collect harvest clog sun shed'; 
let testAccounts = [
"0x986ef2704cf06dd42329e83116fe43fcd25ed17be9d2a967527b3748bb60ed37",
"0xd507c44178c7ef35702912c58e000602f7c371369231fe13b9b419ef32459d94",
"0xd3ed495410bad17d8ddf89dd07af9da46b2d39acbe7b73950635371778e475d0",
"0x32d884d1802db43485521ee41c89995623613a0742ba9fa99a04132740c1a0d1",
"0x2db86040991823199221de7c4fe7a099e002f30a3f207e923eb70e63616b61ff",
"0x776f192627d0dddfdeda83dcafdabe74dfaa3807285ba3bf2826459e503cb7e9",
"0x1cabd8b986387572224ef45d815dbd5a4ef455a96038fc751875a3431040e4c6",
"0x0a747c666c21f66a2ea4590d80a4adb886c65c4e99d8e287aeaf01262ba9b4b3",
"0x063a263fff03b5ec461d0afb54901e5cc4bfe492982541f482013112269c1d4f",
"0x1142a6dd2847c99dc2a2a3ed4d5551eca1cf4bbe8ab326c3468ec811bd682eb9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


