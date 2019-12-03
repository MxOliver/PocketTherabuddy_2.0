import { Injectable } from "@graphql-modules/di";

// import { getConnection } from "typeorm";
// import { Investment } from "../models/Investment.entity.solutions";

// @Injectable()
// export class InvestmentProvider {
// 	investment: Investment;

// 	async getInvestments() {
// 		return await getConnection("Diligence")
// 			.getRepository(Investment)
// 			.find({ take: 50 });
// 	}

// 	async getInvestmentById(id) {
// 		return await getConnection("Diligence")
// 			.getRepository(Investment)
// 			.findOne(id);
// 	}

// 	async addInvestment(input) {
// 		const repository = await getConnection("Diligence").getRepository(
// 			Investment
// 		);
// 		const investment = repository.create({ ...input });
// 		return repository.save(investment);
// 	}

// 	async updateInvestment(id, input) {
// 		const repository = await getConnection("Diligence").getRepository(
// 			Investment
// 		);
// 		return repository.update(id, { ...input });
// 	}
// }
