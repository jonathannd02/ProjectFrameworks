import { OneToMany, JoinColumn, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

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



}
