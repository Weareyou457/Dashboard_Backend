const express=require("express")
const app =express()
const mongoose=require("mongoose")
const helmet=require("helmet")
const morgan=require("morgan")
const bodyParser = require("body-parser")
const cors = require('cors')
const userRouter = require("./routes/user")
const vendorRouter = require("./routes/vendor")
const techpackRouter = require("./routes/techpack")

mongoose.connect(`mongodb+srv://alfaizmalwa567:5OzsGjYc6MGxtF6d@cluster0.wwnbjdb.mongodb.net/client?retryWrites=true&w=majority`).then(() => {
    console.log("mongodb Database Connect connected")
})

app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());  //for api Express.js, you need to include middleware like body-parser to parse incoming request bodies. 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use("/uploads",express.static("uploads"));  //multer 
//htto://localhost:8080/uploads/1714814845896_certificate (1) (1).pdf
app.use("/Admin/user", userRouter)
app.use("/vendor",vendorRouter )
app.use("/TechPack",techpackRouter )



app.listen(8080,()=>{
    console.log("app is Runnig on Port 8080")
})