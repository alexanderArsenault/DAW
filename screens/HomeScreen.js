import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";

import Button from "../components/Button";
import Variables from "../constants/Variables";

import ScrollHeader from "../components/ScrollList/ScrollHeader";
import CardHeader from "../components/ScrollList/CardHeader";
import JobCard from "../components/ScrollList/JobCard";

import { SafeAreaView } from "react-navigation";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "HOME"
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.headerExtension}>
					<Button
						backgroundColor={Variables.brand02}
						onPress={() =>
							this.props.navigation.navigate("PostJob")
						}
					>
						Post Jobs{" "}
					</Button>
					<View style={styles.buttonspacer} />
					<Button
						backgroundColor={Variables.brand02}
						onPress={() =>
							this.props.navigation.navigate("Greeting")
						}
					>
						Find Staff{" "}
					</Button>
				</View>

				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.scrollList}
				>
					<ScrollHeader>Current Jobs</ScrollHeader>
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
					<JobCard />
				</ScrollView>
			</SafeAreaView>
		);
	}

	// _handleLearnMorePress = () => {
	//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
	// };
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	headerExtension: {
		backgroundColor: Variables.brand01,
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "center"
	},
	buttonspacer: {
		padding: 10,
		backgroundColor: Variables.brand01
	},
	scrollList: {
		paddingVertical: 20
	},
	cardImage: {
		width: 129,
		height: 83
	},
	photoCardContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	},
	photoCardText: {
		paddingLeft: 10,
		paddingBottom: 2,
		fontSize: 15,
		color: Variables.brand01
	}
});
