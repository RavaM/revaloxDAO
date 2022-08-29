import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "My crazy DAO",
      voting_token_address: "0x057AecdF74d00f38A282d9f94401eBf0936D2071",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();
