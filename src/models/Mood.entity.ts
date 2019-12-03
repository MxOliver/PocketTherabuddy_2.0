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
export class Mood {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	intensity: number;

	@ManyToOne(
		type => User,
		user => user.moods
	)
	user: User;

	@CreateDateColumn()
	createdDate: Date;

	@UpdateDateColumn()
	updatedDate: Date;
}
