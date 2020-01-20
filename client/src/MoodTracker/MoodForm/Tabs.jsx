import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import IntensitySelector from "./IntensitySelector";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const FormTabs = ({ data, formBag }) => {
	return (
		<Tabs>
			<TabList>
				<Tab>Select Mood</Tab>
				<Tab>Rate Intensity</Tab>
			</TabList>

			<TabPanel>
				<MoodSelector data={data} formBag={formBag} />
			</TabPanel>
			<TabPanel>
				<IntensitySelector data={data} formBag={formBag} />
			</TabPanel>
		</Tabs>
	);
};

export default FormTabs;
