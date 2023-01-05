// imports
const { ethers, getNamedAccounts } = require("hardhat")



// async main
async function main() {
  const { deployer } = await getNamedAccounts()
  const CrowdFundMe =  await ethers.getContract("CrowdFund01", deployer)
  console.log(`Got contract CrowdFundMe at ${CrowdFundMe.address}`)

  const id = "1"
  const _amount = "10000000000000000"
  

  const transActionResponse =  await CrowdFundMe.pledge(id, _amount, { gasLimit: 150000 })
  await transActionResponse.wait()

  console.log("Pledged")

  
  
  
  
  // what happens when we deploy to our hardhat network?""

  

  

  

  

  
    
  


  
  

}







// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })