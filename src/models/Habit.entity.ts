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
	@PrimaryGeneratedColumn("uuid")
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

	@Column({ name: "created_at_utc", type: "timestamp" })
	createdDate: string;

	@Column({ name: "updated_at_utc", type: "timestamp" })
	updatedDate: string;
}
