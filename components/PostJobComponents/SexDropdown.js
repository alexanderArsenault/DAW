import React from "react";
import { StyleSheet, Text } from "react-native";
import Variables from "../../constants/Variables";
import DropdownBodyContainer from "../../components/PostJobComponents/DropdownBodyContainer";

export default class SexBody extends React.Component {
	render() {
		return (
			<DropdownBodyContainer>
				<Text style={styles.accordionBody}>Pick ur gender</Text>
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
