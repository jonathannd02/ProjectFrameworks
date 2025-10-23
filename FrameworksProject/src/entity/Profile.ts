import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    photo: string

    @Column()
    email: string

}
