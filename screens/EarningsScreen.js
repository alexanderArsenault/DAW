import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ScrollHeader from "../components/ScrollList/ScrollHeader";
import NoImageCard from "../components/ScrollList/NoImageCard";

import { SafeAreaView } from "react-navigation";
export default class EarningsScreen extends React.Component {
	static navigationOptions = {
		title: "EARNINGS"
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.scrollList}
				>
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
					<NoImageCard />
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: "#fff"
	}
});
