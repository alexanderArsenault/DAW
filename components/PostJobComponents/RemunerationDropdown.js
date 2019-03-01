import React from "react";
import { StyleSheet, Text } from "react-native";
import Variables from "../../constants/Variables";
import DropdownBodyContainer from "./DropdownBodyContainer";

export default class RemunerationBody extends React.Component {
	render() {
		return (
			<DropdownBodyContainer>
				<Text style={styles.accordionBody}>Money time</Text>
			</DropdownBodyContainer>
		);
	}
}

const styles = StyleSheet.create({
	accordionBody: {
		fontFamily: Variables.fontRegular,
		fontSize: 15,
		color: Variables.white
	}
});
