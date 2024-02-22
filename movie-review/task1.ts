import web3, { SystemProgram } from "@solana/web3.js";
import dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config();

const payer = getKeypairFromEnvironment("SECRET_KEY");
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

function getPublicKey() {
    try {
        return new web3.PublicKey(suppliedPublicKey);
    } catch(err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
}

const toPubkey = getPublicKey();

const transaction = new web3.Transaction();
const instruction = SystemProgram.transfer({
    fromPubkey: payer.publicKey,
    toPubkey,
    lamports: 5000
})

transaction.add(instruction);

const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
);

console.log(signature, "signature");