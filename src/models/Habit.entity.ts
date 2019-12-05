import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne
} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Habit {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	duration: number;

	@ManyToOne(
		type => User,
		user => user.habits
	)
	user: User;

	@CreateDateColumn()
	createdDate: Date;

	@UpdateDateColumn()
	updatedDate: Date;
}
