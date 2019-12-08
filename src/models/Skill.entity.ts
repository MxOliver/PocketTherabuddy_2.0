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

@Entity({ name: "skills" })
export class Skill {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@ManyToOne(
		type => User,
		user => user.skills
	)
	@JoinColumn({ name: "user_id" })
	user: User;

	@Column({ name: "created_at_utc", type: "timestamp" })
	createdDate: string;

	@Column({ name: "updated_at_utc", type: "timestamp" })
	updatedDate: string;
}
