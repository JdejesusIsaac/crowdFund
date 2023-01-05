# crowdFund
crowdfunding Smartcontract:  A creator can launch a new campaign by specifying a goal amount in token.s. 


# Features

Launch a new campaign by specifying a goal amount in tokens. Uniswap/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984

Pledge amounts of the specified token to a campaign.

If the goal is reached, the creator can claim the raised funds.

Contributors can request a refund of their pledges if the goal is not reached.

Cancel a campaign.

Unpledge some or all of a previously pledged amount.

# Requirements

Node.js

Hardhat

Ganache or another Ethereum client


# Installation

1. Clone the repository: git clone https://github.com/YOUR_USERNAME/CrowdFund01.git

2. Install the dependencies:  run:  npm install


# Deployment

1. In the root directory of the project, the following command to compile. run:   yarn hardhat compile

2. Deploy contract to goerli. run: yarn hardhat deploy --network goerli 


3. to launch a new campaign with a goal of 0.1 Uniswap tokens:      npx hardhat run --network goerli  scripts/launch.js 

4. to pledge token amount to a new campaign with 0.1 Uni Tokens:    npx hardhat run --network goerli  scripts/pledge.js


# Verified Contract 

https://goerli.etherscan.io/address/0xbba96da3000ece87c141f955d1d09a7a3f528dd6#code


