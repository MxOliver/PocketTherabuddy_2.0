import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { MoodEnum } from "../models/MoodEnum.entity";

@Injectable()
export class MoodEnumProvider {
	moodEnum: MoodEnum;

	async getMoodEnums() {
		return await getConnection("pocketTherabuddy")
			.getRepository(MoodEnum)
			.createQueryBuilder()
			.getMany();
	}

	async getMoodEnum(type) {
		return await getConnection("pocketTherabuddy")
			.getRepository(MoodEnum)
			.findOne({ where: { type: type } });
	}
}
