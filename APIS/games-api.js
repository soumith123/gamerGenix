// importing express module
const exp=require("express")

// importing router from express module
const gameApi=exp.Router();

// middle wear -- useful for post product
gameApi.use(exp.json());

// to handle asynchronous error
const errorHandler=require("express-async-handler");

// importing cloudinary modules
const multerObj=require("./middlewares/multerCloudinary")

const checkToken=require("./middlewares/verifyToken")

//const multerObj=process.env.CLOUDINARY;


// GET games
gameApi.get("/getgames", errorHandler(async (req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find().sort({gameName:1}).toArray()
    
    if(gamesList === null)
    {
        res.send({message:"games list is empty"})
    }
    else
    {
        res.send({message:gamesList})
    }
    
}))


// GET game by gameName
gameApi.get("/getgame/:gamename", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    let gameObj= await gamesCollectionObj.findOne({gameName : game})

    if (gameObj == null)
    {
        res.send({message:"game is not exist"})
    }
    else
    {
        res.send({message:gameObj})
    }
}))


// get game by genre shooting
gameApi.get("/getshootinggames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Shooter'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get shooting game details
gameApi.get("/getshootinggame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre MMORPG
gameApi.get("/getMMORPGgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'MMORPG'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get MMORPG game details
gameApi.get("/getMMORPGgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre MMO
gameApi.get("/getMMOgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'MMO'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get MMO game details
gameApi.get("/getMMOgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Social
gameApi.get("/getsocialgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Social'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// details of social games
gameApi.get("/getsocialgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Card Game
gameApi.get("/getcardgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Card Game'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get card game details
gameApi.get("/getcardgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Strategy
gameApi.get("/getstrategygames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Strategy'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get strategy game details
gameApi.get("/getstrategygame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))

// get game by genre Fantasy
gameApi.get("/getfantasygames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Fantasy'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get fantasy game details
gameApi.get("/getfantasygame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Fighting
gameApi.get("/getfightinggames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Fighting'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// details of fighting games
gameApi.get("/getfightinggame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Racing
gameApi.get("/getRacinggames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Racing'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get racing game details
gameApi.get("/getracinggame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Sports
gameApi.get("/getSportsgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Sports'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get sports game details
gameApi.get("/getsportsgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))



// get game by genre MOBA
gameApi.get("/getMOBAgames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'MOBA'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get MOBA game details
gameApi.get("/getMOBAgame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// get game by genre Action
gameApi.get("/getActiongames", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let gamesList= await gamesCollectionObj.find({genre:'Action'}).sort({gameName:1}).toArray()

    if(gamesList == null)
    {
        res.send({message:"Games are not exist for this genre"})
    }
    else
    {
        res.send({message:gamesList})
    }
}))


// get action game details
gameApi.get("/getactiongame/:gameName",errorHandler(async(req,res)=>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let game=req.params.gameName;

    console.log(game);

    let gameObj= await gamesCollectionObj.findOne({gameName:game})

    if(gameObj=== null)
    {
        res.send({message:"game not existed"})
    }
    else
    {
        res.send({message:gameObj})
    }

}))


// POST a game
gameApi.post("/creategame",errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let newGame=req.body;

    let game=await gamesCollectionObj.findOne({gameName : newGame.gameName})

    console.log(game);
    
    if(game===null)
    {
        await gamesCollectionObj.insertOne(newGame)
        res.send({message:"New game created"})
    }
    else
    {
        res.send({message:"game already existed"})
    }
}))


// PUT game
gameApi.put("/updategame/:gameName", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let updatedGame=req.body;

    let game=await gamesCollectionObj.findOne({productName:updatedGame.gameName})

    if(game === null)
    {
        res.send({message:"No game to modify"})
    }
    else
    {
        await gamesCollectionObj.updateOne({gameName:updatedGame.gameName},
            {$set:{...updatedGame}})
        res.send({message:"Game updated"})
    }
}))


// DELETE game
gameApi.delete("/deletegame/:gameName", errorHandler(async(req,res) =>
{
    let gamesCollectionObj=req.app.get("gamesCollectionObj")

    let deletedGame=req.params.gameName;

    let game= await gamesCollectionObj.findOne({gameName:deletedGame})

    if (game === null)
    {
        res.send({message:"No game existed to delete"})
    }
    else
    {
        await gamesCollectionObj.deleteOne({gameName:deletedGame})
        res.send({message:"game deleted"})
    }
}))


// exporting gameApi to server.js
module.exports=gameApi;