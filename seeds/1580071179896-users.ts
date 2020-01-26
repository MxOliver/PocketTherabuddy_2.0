import { MigrationInterface, QueryRunner, getConnection } from "typeorm";
import { User } from "../src/models/User.entity";
import { UserSeed } from "./userSeed";

export class users1580071179896 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const userRepo = await getConnection("pocketTherabuddy").getRepository(
			User
		);

		const userSeed: any = UserSeed;
		await userRepo.create(userSeed);
		await userRepo.save(userSeed);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {}
}
