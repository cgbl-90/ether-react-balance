import { useState } from "react";
const { ethers } = require("ethers");
const INFURA_ID = "5b37779062e04102a6e9efda4c5f5cb9";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

export default function GetBalanceData() {
  let [address, setAddress] = useState(" ");
  let [balance, setBalance] = useState(0);

  async function requestBalance(event) {
    event.preventDefault();
    let reply = await provider.getBalance(address);
    setBalance(reply._hex);
  }

  function defineAddress(event) {
    setAddress(event.target.value);
    if (address === "") setBalance(0);
  }

  return (
    <main>
      <span>
        <h1>ETH Wallet Balance</h1>
        <form>
          <input type="text" onChange={defineAddress} />
          <button onClick={requestBalance}>SEARCH</button>
        </form>
        <br />
        <h3>The balance is ${ethers.utils.formatEther(balance)} ETH</h3>
      </span>
    </main>
  );
}

// 0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5
// 0xc9ec550BEA1C64D779124b23A26292cc223327b6
