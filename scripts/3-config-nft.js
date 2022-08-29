import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xc5349525A9F3A9F192c341EaAFF236a758DddA0C"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Revalox pass card",
        description: "This NFT will give you access to RevaloxDAO!",
        image: readFileSync("scripts/assets/revaloxPass.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
