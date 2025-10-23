import { ManyToMany,  Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Song {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    artist: string

    @Column()
    album: string

    @Column()
    duration: number

    @Column()
    genre: string

}
