const mongoose = require('mongoose');

main().catch(err => console.log(err));





async function main() {
    try {
        const password = encodeURIComponent("KIGXnGew94aRPC7c");
        let uri = `mongodb+srv://marifatalhanif:${password}@cluster0.ea1ugnd.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(uri);
        console.log('Successful Connection Established!: ', mongoose.connection.readyState);
    } catch (error) {
        console.log('Connection Failed!: ', mongoose.connection.readyState);
        console.error('Error connecting to MongoDB: ', error);
    }
}

export function mongooseInstance() {
    return mongoose;
}