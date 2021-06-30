// importing express module
const exp=require('express')

let mc=require("mongodb").MongoClient;


// assiging express module to app
const app=exp();

app.use(exp.json())

const path=require("path")

app.use(exp.static(path.join(__dirname,'./dist/PROJECT/')))

// to secure sensitive data
require("dotenv").config()

const databaseUrl=process.env.DATABASE_URL

// connecting to databse
mc.connect(databaseUrl,{ useNewUrlParser:true, useUnifiedTopology: true },(err,client)=>
{
    if(err)
    {
        console.log("Error in connecting database is", err)
    }
    else
    {
        let databaseObj=client.db("GamesCollection")

        let userCollectionObj=databaseObj.collection("userCollection")
        app.set("userCollectionObj", userCollectionObj)

        let adminApi=databaseObj.collection("adminApi")
        app.set("adminApi", adminApi)

        let gamesCollectionObj=databaseObj.collection("gamesCollection")
        app.set("gamesCollectionObj", gamesCollectionObj)

        console.log("Connected to database...")

    }
})

// importing apis 
const userApi=require("./APIS/user-api")
const adminApi=require("./APIS/admin-api")
const gamesApi=require("./APIS/games-api")


// executing specific api based on path
app.use("/user",userApi)
app.use("/admin", adminApi)
app.use("/game", gamesApi)


userApi.use(exp.json());


// Handling errors when path is not found
app.use((req,res,next) =>
{
    res.send({message:`path ${req.url} is not found...`})
})


// Handling errors
app.use((err,rew,res,next) =>
{
    res.send({message:`${err.message}`})
})




// creating port
const port=process.env.PORT;

app.listen(port, () => console.log(`server listening on port ${port}...` ))

