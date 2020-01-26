import React from "react";
import { Plants } from "../Plants";
import Row from "../UIComponents/row";
import { FormInput } from "../UIComponents/form";
import Column from "../UIComponents/column";
import SubmitHandler from "./SignInSubmitHandler";
import Card from "./Card";

const SignInForm = ({ values, handleChange, handleSubmit }) => {
	return (
		<>
			<Row justifyContent="space-evenly" alignItems="center" gapBottom="1em">
				<Column>
					<Row justifyContent="center" alignItems="flex-start">
						<Card>
							<h1>Sign In</h1>
							<FormInput
								handleChange={handleChange}
								name="email"
								label="Email"
								type="email"
								value={values.email}
							/>
							<FormInput
								handleChange={handleChange}
								name="password"
								label="Password"
								type="password"
								value={values.password}
							/>

							<SubmitHandler handleSubmit={handleSubmit} values={values} />
						</Card>
					</Row>
				</Column>

				<Plants />
			</Row>
		</>
	);
};

export default SignInForm;
