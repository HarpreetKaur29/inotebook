const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
 const mongoURI = "mongodb+srv://happy:happy@mycluster.l4ndbgg.mongodb.net/inotebook?retryWrites=true&w=majority"

 const connectToMongo =()=>{
    mongoose.connect(mongoURI,{
            useNewUrlParser : true,useUnifiedTopology: true,
    }).then((res)=> console.log('mongo connected'))
 }

 module.exports = connectToMongo;