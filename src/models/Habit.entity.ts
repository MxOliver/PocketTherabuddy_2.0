import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
	ManyToMany
} from "typeorm";
import { User } from "./User.entity";
import { HabitEnum } from "./HabitEnum.entity";

export enum HabitType {
	EXERCISE = "exercise",
	SLEEP = "sleep",
	SOCIAL_INTERACTION = "social_interaction",
	ALONE_TIME = "alone_time",
	TIME_OUTSIDE = "time_outside",
	HYDRATION = "hydration",
	LEISURE_ACTIVITIES = "leisure_activities"
}

@Entity({ name: "habits" })
export class Habit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "enum" })
	type: HabitType;

	@ManyToMany(type => HabitEnum)
	@JoinColumn({ name: "habit_enum_id" })
	habitTypes: HabitEnum;

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
