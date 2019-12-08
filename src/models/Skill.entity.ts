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
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@ManyToOne(
		type => User,
		user => user.skills
	)
	@JoinColumn({ name: "user_id" })
	user: User;

	@CreateDateColumn({ name: "created_at_utc" })
	createdDate: Date;

	@UpdateDateColumn({ name: "updated_at_utc" })
	updatedDate: Date;
}
