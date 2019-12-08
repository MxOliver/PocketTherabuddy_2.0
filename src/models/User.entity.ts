import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from "typeorm";
import { Mood } from "./Mood.entity";
import { Habit } from "./Habit.entity";
import { Skill } from "./Skill.entity";

@Entity({ name: "users" })
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@OneToMany(
		type => Mood,
		mood => mood.user
	)
	moods: [Mood];

	@OneToMany(
		type => Habit,
		habit => habit.user
	)
	habits: [Habit];

	@OneToMany(
		type => Skill,
		skill => skill.user
	)
	skills: [Skill];

	@Column({ name: "created_at_utc", type: "timestamp" })
	createdDate: string;

	@Column({ name: "updated_at_utc", type: "timestamp" })
	updatedDate: string;
}
