const mong = require('mongoose');

const connectdb=async()=>{
    try{
        mong.set('strictQuery', false)
        await mong.connect('mongodb+srv://root:root@cluster0.xyqucy8.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser : true
        },()=>{
            console.log("Database connected");
        })
    }catch(err){
        console.log(err);
    }
}
connectdb();
module.exports = connectdb;
