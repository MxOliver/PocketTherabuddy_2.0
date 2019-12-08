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
	AFRAID = "afraid",
	AGGRAVATED = "aggravated",
	ANGRY = "angry",
	ANXIOUS = "anxious",
	ASHAMED = "ashamed",
	ASSERTIVE = "assertive",
	BRAVE = "brave",
	CALM = "calm",
	CAUTIOUS = "cautious",
	CHEERFUL = "cheerful",
	COMFORTED = "comforted",
	CONTENTED = "contented",
	CURIOUS = "curious",
	DEPRESSED = "depressed",
	EMBARRASSED = "embarrassed",
	ENERGIZED = "energized",
	ENVIOUS = "envious",
	EXCITED = "excited",
	FURIOUS = "furious",
	GUILTY = "guilty",
	GRUMPY = "grumpy",
	HAPPY = "happy",
	HOPEFUL = "hopeful",
	HUMILIATED = "humiliated",
	HURT = "hurt",
	INDIFFERENT = "indifferent",
	INSECURE = "insecure",
	IRRITATED = "irritated",
	LONELY = "lonely",
	LOVED = "loved",
	MAD = "mad",
	OPTIMISTIC = "optimistic",
	OVERWHELMED = "overwhelmed",
	PANICKED = "panicked",
	PEACEFUL = "peaceful",
	POSITIVE = "positive",
	PROUD = "proud",
	RESTLESS = "restless",
	REGRETFUL = "regretful",
	RELIEVED = "relieved",
	SAD = "sad",
	SELFCONFIDENT = "selfconfident",
	SHAMEFUL = "shameful",
	SKEPTICAL = "skeptical",
	WORRIED = "worried"
}

@Entity({ name: "moods" })
export class Mood {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "enum" })
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

	@Column({ name: "created_at_utc", type: "timestamp" })
	createdDate: string;

	@Column({ name: "updated_at_utc", type: "timestamp" })
	updatedDate: string;
}
