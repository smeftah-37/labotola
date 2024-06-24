import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'abonnement'})
export class Abonnement {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    dataOfExper: Date;
}
