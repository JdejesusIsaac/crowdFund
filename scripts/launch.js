// imports
const { ethers, getNamedAccounts } = require("hardhat")



// async main
async function main() {
  const { deployer } = await getNamedAccounts()
  const CrowdFundMe =  await ethers.getContract("CrowdFund01", deployer)
  console.log(`Got contract CrowdFundMe at ${CrowdFundMe.address}`)

  const goal = "10000000000000000"

  const startAt = 1672854413

  const endAt = 1672854513
  

  const transActionResponse =  await CrowdFundMe.launch(goal,  { gasLimit: 150000 })
  await transActionResponse.wait()

  console.log("Launched")

  
  
  
  
  // what happens when we deploy to our hardhat network?""

  

  

  

  

  
    
  


  
  

}







// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })