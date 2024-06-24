import { Abonnement } from "src/abonnement/entities/abonnement.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    fullname: string;
    @Column({nullable: true})
    favoriteTeam: string;
    @Column()
    age: number;
    @Column()
    password: string;
    @Column()
    city: string;
    @OneToOne(() => Abonnement,{nullable: true})
    role: Abonnement;
    @Column({nullable: true})
    limitWatching: number;
}
