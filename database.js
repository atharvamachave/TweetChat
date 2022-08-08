const mongoose = require("mongoose");

class Database{

    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://admin:admin@twitterclonecluster.gb3bw.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database Connected Successfully...");
        })
        .catch((err) => {
            console.log("Database Connection Error..."+err);
        })
    }
}

module.exports = new Database();