import web3, { Connection } from "@solana/web3.js";
import dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config();


async function pingProgram(connection: web3.Connection, payer: web3.Keypair) {
    const transaction = new web3.Transaction();
    const programId = new web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
    const programDataId = new web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

    const instruction = new web3.TransactionInstruction({
        keys: [
            {
                pubkey: programDataId,
                isSigner: false,
                isWritable: true
            },
        ],
        programId
    })

    transaction.add(instruction);

    const signature = await web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [payer]
    );

    console.log(signature);
}


try {
    const payer = getKeypairFromEnvironment("SECRET_KEY");
    console.log(` ✅ Loaded payer keypair ${payer.publicKey.toBase58()}`);
    const connection = new Connection(web3.clusterApiUrl("devnet"));
    await pingProgram(connection, payer)
} catch(err) {
    console.log(err);
}