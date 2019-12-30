import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "habit_enum" })
export class HabitEnum {
	@Column()
	type: string;

	@PrimaryColumn()
	id: number;
}
