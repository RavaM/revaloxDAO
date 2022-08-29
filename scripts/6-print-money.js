import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x057AecdF74d00f38A282d9f94401eBf0936D2071");

(async () => {
  try {
    const amount = 1_000_000;

    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$RVLX in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
