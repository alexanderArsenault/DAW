import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Variables from "../../constants/Variables";
import { Divider } from "react-native-elements";

export default class JobCard extends React.Component {
	constructor() {
		super();
		let randomStatus = Math.floor(Math.random() * 3);
		this.state.status = randomStatus;
	}
	state = {
		company: "St James Coffee",
		position: "Bartender",
		dateTime: "07/08/18 | 17.00 - 22.00",
		amount: "R 450.00",
		location: "Woodstock",
		status: 0
		// status can change to an int -  1:approved, 2:completed,:
	};
	render() {
		let {
			company,
			position,
			dateTime,
			amount,
			location,
			status
		} = this.state;
		return (
			<View style={styles.CardContainer}>
				<View style={styles.CardContent}>
					<Text style={styles.CardTextHeader}>{company}</Text>
					<Text style={styles.CardText}>{position}</Text>
					<Text style={styles.CardText}>{amount}</Text>
					<Text style={styles.CardText}>{dateTime}</Text>
					<Text style={styles.CardTextBottom}>
						Status: {this._renderStatus()}
					</Text>
				</View>
				<Divider backgroundColor={Variables.brand01Dark} />
			</View>
		);
	}
	_renderStatus() {
		switch (this.state.status) {
			case 0:
				return "Awaiting Funds";
				break;
			case 1:
				return "Paid";
				break;
			case 2:
				return "Error Processing - please contact";
			default:
				return "";
		}
	}
}

const styles = StyleSheet.create({
	CardContainer: {
		padding: 20,
		paddingHorizontal: 40,
		paddingTop: 0
	},
	CardContent: {
		paddingBottom: 20
	},
	CardTextHeader: {
		paddingHorizontal: 10,
		paddingBottom: 2,
		fontSize: 15,
		color: Variables.brand01,
		fontFamily: Variables.fontSemiBold
	},
	CardText: {
		paddingHorizontal: 10,
		paddingBottom: 2,
		fontSize: 15,
		color: Variables.brand01,
		fontFamily: Variables.fontRegular
	},
	CardTextBottom: {
		paddingHorizontal: 10,
		fontSize: 15,
		color: Variables.brand01
	}
});
