const Router = artifacts.require('PancakeRouter01.sol');

module.exports = async function (deployer, _network, addresses) {
    const WBNB = '';
    const FACTORY_ADDRESS = '';
    await deployer.deploy(Router, FACTORY_ADDRESS, WBNB);
};