import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "mood_enum" })
export class MoodEnum {
	@Column()
	type: string;

	@PrimaryColumn()
	id: number;
}
