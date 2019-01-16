var api = 'http://pool.llama.horse:42068';
var donationAddress = "dg4eeo2WGdFGsU3B5vmM3B83MjAMaaea9BpTwQ8ZpufKJNseQKtxTZgNK6owU5rF6vdDjWjn19BUq18NAxpDbfMZ2ffkfxrg8";
var blockTargetInterval = 10; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000000;// enter the total supply in atomic units
var symbol = 'dego'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "dego": [
	["dego.llama.horse", "http://pool.llama.horse:42066"],
	["'dyngepeng.zapto.org:85/DEGO/'", "http://dyngepeng.zapto.org:8118"],
	["'dyngepeng.zapto.org:85/DEROGOLD/'", "http://dyngepeng.zapto.org:8117"],
	["dego.c3pool.com","https://dego.c3pool.com/api/"]
 ]
};

var networkStat2 = {
    "dego": [
	[""]
 ]
};
