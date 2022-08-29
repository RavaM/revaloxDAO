import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0xAEe71AE3E5fe06c4a4c1419ad45125df9C13Ea1b");

const token = sdk.getToken("0x057AecdF74d00f38A282d9f94401eBf0936D2071");

(async () => {
  try {
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = (Number(ownedAmount) / 100) * 90;

    await token.transfer(vote.getAddress(), percent90);

    console.log(
      "✅ Successfully transferred " + percent90 + " tokens to vote contract"
    );
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();
