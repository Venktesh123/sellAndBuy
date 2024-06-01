require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose')
const app=express();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.listen(process.env.PORT,(err)=>{
    if(err)
        {
            console.log(err);
            return ;
        }
        else{
            console.log(`Server is running on PORT ${process.env.PORT}`);
            return ;
        }
})