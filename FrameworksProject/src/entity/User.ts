import {OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Playlist } from './Playlist'
import { Profile } from "./Profile"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    birthDate: string


    @Column()
    email: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(()=>Playlist , (playlist)=>playlist.user)
    playlists:Playlist[]


}
