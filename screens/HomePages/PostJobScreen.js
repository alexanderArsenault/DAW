import React from "react";
import { TextField } from "react-native-material-textfield";
import {
	Switch,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";

import * as Animatable from "react-native-animatable";
import IconDown from "../../components/IconCaretteDown";
import IconUp from "../../components/IconCaretteUp";
import Variables from "../../constants/Variables";
import Accordion from "react-native-collapsible/Accordion";

import Button from "../../components/Button";

import PositionDropdown from "../../components/PostJobComponents/PositionDropdown";
import DateDropdown from "../../components/PostJobComponents/DateDropdown";
import SexDropdown from "../../components/PostJobComponents/SexDropdown";
import RemunerationDropdown from "../../components/PostJobComponents/RemunerationDropdown";

const CONTENT = [
	{
		title: "Position",
		content: <PositionDropdown />
	},
	{
		title: "Date",
		content: <DateDropdown />
	},
	{
		title: "Sex",
		content: <SexDropdown />
	},
	{
		title: "Remuneration",
		content: <RemunerationDropdown />
	}
];

export default class PostJob extends React.Component {
	static navigationOptions = {
		title: "Post Job"
	};

	state = {
		title: "",
		description: "",
		position: "",
		date: "",
		sex: "",
		remuneration: "",

		activeSections: [],
		// begin collapsed
		collapsed: true,
		// open multiple dropdowns at once
		multipleSelect: true
	};

	// close all accordions
	toggleExpanded = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	// update selections
	setSections = sections => {
		this.setState({
			activeSections: sections.includes(undefined) ? [] : sections
		});
	};

	// render the header of each accordion
	renderHeader = (section, _, isActive) => {
		return (
			<Animatable.View
				duration={400}
				style={styles.accordion}
				transition="backgroundColor"
			>
				<Text style={styles.accordionHeader}>{section.title}</Text>
				{isActive ? <IconUp /> : <IconDown />}
			</Animatable.View>
		);
	};

	// render the content of each accordion
	renderContent(section, _, isActive) {
		return (
			<Animatable.View style={[styles.content]} animation="slideInDown">
				{section.content}
			</Animatable.View>
		);
	}

	render() {
		let {
			multipleSelect,
			activeSections,
			title,
			description,
			position,
			date,
			sex,
			remuneration
		} = this.state;

		return (
			<ScrollView style={styles.formcontainer}>
				<TextField
					style={{ paddingTop: 0 }}
					label="Job title"
					labelTextStyle={{ fontFamily: Variables.fontRegular }}
					tintColor={Variables.brand01Dark}
					containerStyle={{ paddingTop: 0, marginBottom: -15 }}
					value={title}
					activeLineWidth={2}
					lineWidth={0}
					fontSize={23}
					baseColor={Variables.brand01}
					textColor={Variables.brand01}
					onChangeText={title => this.setState({ title })}
				/>

				<TextField
					label="Job Description"
					labelTextStyle={{ fontFamily: Variables.fontRegular }}
					tintColor={Variables.brand01Dark}
					containerStyle={{ padding: 0, paddingBottom: 10 }}
					value={description}
					activeLineWidth={2}
					lineWidth={0}
					fontSize={23}
					baseColor={Variables.brand01}
					textColor={Variables.brand01}
					onChangeText={description => this.setState({ description })}
				/>

				<Accordion
					activeSections={activeSections}
					sections={CONTENT}
					touchableComponent={TouchableOpacity}
					expandMultiple={multipleSelect}
					renderHeader={this.renderHeader}
					renderContent={this.renderContent}
					duration={400}
					onChange={this.setSections}
				/>
				<View style={styles.buttoncontainer}>
					<Button
						backgroundColor={Variables.brand02}
						onPress={() => this.props.navigation.navigate("Home")}
					>
						Post Job{" "}
					</Button>
					<Button
						backgroundColor={Variables.brand02}
						onPress={() => this.props.navigation.navigate("Home")}
					>
						Delete Job{" "}
					</Button>
				</View>
			</ScrollView>
		);
	}

	// _submitJob = () => {

	// }

	// _previewJob = () => {

	// }
}

let styles = StyleSheet.create({
	formcontainer: {
		paddingTop: 5,
		paddingHorizontal: 20,
		paddingBottom: 10
	},
	accordion: {
		backgroundColor: Variables.brand01,
		padding: 20,
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	accordionHeader: {
		fontFamily: Variables.fontRegular,
		fontSize: 22,
		color: Variables.white
	},
	buttoncontainer: {
		paddingVertical: 20,
		flex: 1
	}
});
