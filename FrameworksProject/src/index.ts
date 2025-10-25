import { AppDataSource } from "./data-source"
import { Profile } from './entity/Profile'
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.birthDate = new Date('2000-05-15');
    const profile = new Profile();
    user.email = "timber.saw@gmail.com";

    profile.age = user.age;
    profile.email = user.email;
    profile.password = "password";
    profile.photo = "./photo.png";
    profile.username = "Timbersss";
     await AppDataSource.manager.save(user);
     await AppDataSource.manager.save(profile); 
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users)

    const profiles  = await AppDataSource.manager.find(Profile);
    console.log("Loaded profiles: ", profiles);

}).catch(error => console.log(error))
