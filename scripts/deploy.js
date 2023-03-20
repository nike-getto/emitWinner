const hre = require('hardhat')

async function main() {
	const Contract = await hre.ethers.getContractFactory('Contract')
	const contract = await Contract.deploy()

	await contract.deployed()

	const addr1 = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'

	const result = await contract.sendAttempt(addr1)
	console.log(result)

	console.log(`Deployed contract on ${contract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
