import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "mood_enum" })
export class MoodEnum {
	@PrimaryColumn({ name: "name" })
	type: string;

	@Column()
	id: number;
}
