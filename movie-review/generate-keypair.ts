import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
console.log(`The public key is`, keypair.publicKey.toBase58());
console.log(`The secret key is`, keypair.secretKey);
console.log(`The keypair is`, keypair);
console.log(`✅ Finished!`);

// 3BwqcHSXwCfbkDLcq9iULwFvywtJAPp87UYK5qtBAh4Q
// CtpMb6ovpGx5Lcvv4bm8pYPqZtpbQ1ASUREDgYt5D133

// import "dotenv/config";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = getKeypairFromEnvironment("SECRET_KEY");

// console.log(
//     `✅ Finished, We've loaded our secret key securely, using an env file!`, keypair.publicKey.toBase58()
// )
// console.log(
//     `The keypair is:`, keypair
// )