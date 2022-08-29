import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  "0xc5349525A9F3A9F192c341EaAFF236a758DddA0C"
);

const token = sdk.getToken("0x057AecdF74d00f38A282d9f94401eBf0936D2071");

(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!"
      );
      process.exit(0);
    }

    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
  } catch (error) {
    console.error("Failed to airdrop tokens", error);
  }
})();
