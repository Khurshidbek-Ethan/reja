const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = 
"mongodb+srv://ethan1:ethan123@cluster1.gzkhxe3.mongodb.net/Reja_MIT";

mongodb.connect(
    connectionString,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    },
    (err,client)=>{
    if(err) console.log("ERROR on connection MongoDB",err);
    else{
        console.log("MongoDB connection succed");
        // console.log(client);
        module.exports = client;
        const app = require("./app");



        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT,function () {
            console.log(
                `The server is running succefully on port:${PORT},http://localhost:${PORT}`
            );
        });
    }
});

