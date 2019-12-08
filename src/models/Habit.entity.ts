import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn
} from "typeorm";
import { User } from "./User.entity";

@Entity({ name: "habits" })
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
	@JoinColumn({ name: "user_id" })
	user: User;

	@CreateDateColumn({ name: "created_at_utc" })
	createdDate: Date;

	@UpdateDateColumn({ name: "updated_at_utc" })
	updatedDate: Date;
}
