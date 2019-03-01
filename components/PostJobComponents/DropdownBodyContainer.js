import React from "react";
import { StyleSheet, View } from "react-native";
import Variables from "../../constants/Variables";

export default class DropdownBodyContainer extends React.Component {
	render() {
		return <View style={styles.accordion}>{this.props.children}</View>;
	}
}

const styles = StyleSheet.create({
	accordion: {
		backgroundColor: Variables.brand01,
		padding: 20,
		paddingTop: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	}
});
