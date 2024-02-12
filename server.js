const http = require('http');

const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://khurshidbekEthan:i6cjroHcOC0utCtj@khurshidbek.59ral41.mongodb.net/Reja";

mongodb.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,client)=>{
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succed");
        // console.log(client);
        module.exports = client;


        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT,function (){
            console.log(`The server is running succefully on port:${PORT}`
            );
        });
    }
});

