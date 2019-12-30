import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { HabitEnum } from "../models/HabitEnum.entity";

@Injectable()
export class HabitEnumProvider {
	habitEnum: HabitEnum;

	async getHabitEnums() {
		return await getConnection("pocketTherabuddy")
			.getRepository(HabitEnum)
			.createQueryBuilder()
			.getMany();
	}

	async getHabitEnum(type) {
		return await getConnection("pocketTherabuddy")
			.getRepository(HabitEnum)
			.findOne({ where: { type: type } });
	}
}
