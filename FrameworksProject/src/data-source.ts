import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Profile } from './entity/Profile'
import { Song } from './entity/Song'
import { Playlist } from './entity/Playlist'

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User,Playlist, Profile, Song],
    migrations: [],
    subscribers: [],
})
