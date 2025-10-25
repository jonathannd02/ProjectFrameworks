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
    birthDate: Date

    public get age(): number {

        const today = new Date();
        let age = today.getUTCFullYear() - this.birthDate.getUTCFullYear();
        const m = today.getMonth() - this.birthDate.getUTCMonth();
        if ( m < 0 || (m===0 && today.getUTCDay() < this.birthDate.getUTCDay())){
            age--;
        }
        return age;

    }


    @Column()
    email: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(()=>Playlist , (playlist)=>playlist.user)
    playlists:Playlist[]


}
