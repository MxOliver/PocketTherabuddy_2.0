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
export class Skill {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@ManyToOne(
		type => User,
		user => user.skills
	)
	user: User;

	@CreateDateColumn()
	createdDate: Date;

	@UpdateDateColumn()
	updatedDate: Date;
}
