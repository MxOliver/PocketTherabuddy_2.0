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
import { MoodEnum } from "./MoodEnum.entity";

export enum MoodType {
	AFRAID = 1,
	AGGRAVATED = 2,
	ANGRY = 3,
	ANXIOUS = 4,
	ASHAMED = 5,
	ASSERTIVE = 6,
	BRAVE = 7,
	CALM = 8,
	CAUTIOUS = 9,
	CHEERFUL = 10,
	COMFORTED = 11,
	CONTENTED = 12,
	CURIOUS = 13,
	DEPRESSED = 14,
	EMBARRASSED = 15,
	ENERGIZED = 16,
	ENVIOUS = 17,
	EXCITED = 18,
	FURIOUS = 19,
	GUILTY = 20,
	GRUMPY = 21,
	HAPPY = 22,
	HOPEFUL = 23,
	HUMILIATED = 24,
	HURT = 25,
	INDIFFERENT = 26,
	INSECURE = 27,
	IRRITATED = 28,
	LONELY = 29,
	LOVED = 30,
	MAD = 31,
	OPTIMISTIC = 32,
	OVERWHELMED = 33,
	PANICKED = 34,
	PEACEFUL = 35,
	POSITIVE = 36,
	PROUD = 37,
	RESTLESS = 38,
	REGRETFUL = 39,
	RELIEVED = 40,
	SAD = 41,
	SELFCONFIDENT = 42,
	SHAMEFUL = 43,
	SKEPTICAL = 44,
	WORRIED = 45
}

@Entity({ name: "moods" })
export class Mood {
	@PrimaryGeneratedColumn()
	id: string;

	@Column({ type: "enum", name: "name" })
	type: MoodType;

	@ManyToMany(type => MoodEnum)
	@JoinColumn({ name: "mood_enum_id" })
	moodTypes: MoodEnum;

	@Column()
	intensity: number;

	@ManyToOne(
		type => User,
		user => user.moods
	)
	@JoinColumn({ name: "user_id" })
	user: User;

	@CreateDateColumn({ name: "created_at_utc" })
	createdDate: Date;

	@UpdateDateColumn({ name: "updated_at_utc" })
	updatedDate: Date;
}
