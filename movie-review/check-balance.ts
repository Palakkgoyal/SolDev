import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

function getPublicKey() {
    try {
        return new PublicKey(suppliedPublicKey);
    } catch(err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
}


const connection = new Connection(clusterApiUrl("mainnet-beta"));
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const publicKey = getPublicKey();
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance of account ${publicKey} in lamports is ${balanceInLamports}`);
console.log(`The balance of account ${publicKey} in SOL is ${balanceInSol}`);