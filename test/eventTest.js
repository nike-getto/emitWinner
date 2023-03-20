const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers')
const { expect } = require('chai')

describe('Contract', function () {
	async function deployContractAndSetVariables() {
		const Contract = await ethers.getContractFactory('Contract')
		const contract = await Contract.deploy()

		await contract.deployed()

		const [owner, addr1] = await ethers.getSigners()

		console.log(
			`Owner address: ${owner.address}, Address 1: ${addr1.address}`
		)
		return { contract, owner, addr1 }
	}

	it('should emit event Winner', async function () {
		const { contract, owner, addr1 } = await loadFixture(
			deployContractAndSetVariables
		)

		await expect(contract.connect(addr1).attempt()).to.emit(
			contract,
			'Winner'
		)
	})
})
