import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express = require('express');


const PORT = 3000;

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(express.json());
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.birthDate = "1999-01-01";
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")


    app.get("/" , (_req ,res) =>{
        res.send("Hello from root");
    });

    app.listen(PORT, () => console.log(`server started at ${PORT}`));






}).catch(error => console.log(error))
