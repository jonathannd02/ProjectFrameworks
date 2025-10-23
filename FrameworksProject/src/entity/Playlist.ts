import {   ManyToMany, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm"
import { User } from "./User"
import { Song} from "./Song"
@Entity()
export class Playlist {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    photo: string

    @Column()
    description: string


    @ManyToOne(() => User, (user) => user.playlists)
    user: User

    @ManyToMany(() => Song)
    @JoinTable()
    songs: Song[]


}
