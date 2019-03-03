import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import Variables from "../constants/Variables";
import { Divider } from "react-native-elements";
import TextField from "../components/InputSmallDivider";

export default class AccountScreen extends React.Component {
	static navigationOptions = {
		title: "MY ACCOUNT"
	};

	state = {
		name: "Matthew Fraser",
		birthday: "06/11/1991",
		email: "mattfrase.x@gmail.com",
		mobileNumber: "+277055351229",
		address: "27 Nevile Park, Mowbray",
		bio:
			"I'm interested in finding work that fits into my schedule. I've got a lot of experience and care about customers. Since 2010, I've been working in management positions, with my most noticible work experience having me overseeing 80 employees"
	};

	render() {
		let { email, mobileNumber, address, bio, name, birthday } = this.state;

		return (
			<SafeAreaView>
				<ScrollView
					contentContainerStyle={styles.accountContainer}
					keyboardDismissMode="on-drag"
				>
					<View style={styles.contentSection}>
						<Image
							source={require("../assets/images/linkedinpic.jpg")}
							style={{
								borderRadius: 145 / 2,
								height: 145,
								width: 145,
								resizeMode: "cover"
							}}
						/>
					</View>
					<View style={styles.contentSection}>
						<Text style={styles.accountHeader}>About Me</Text>
						<Divider
							style={{
								marginTop: 5,
								backgroundColor: Variables.brand01Dark
							}}
						/>
						<TextField
							label="Write something about yourself..."
							value={bio}
							characterRestriction={250}
							hideDivider={true}
							multiline={true}
							onChangeText={bio => this.setState({ bio })}
						/>
					</View>

					<View style={styles.contentSection}>
						<Text style={styles.accountHeader}>
							Personal Information
						</Text>
						<Divider
							style={{
								marginTop: 5,
								backgroundColor: Variables.brand01Dark
							}}
						/>
						<TextField
							label="Name"
							value={name}
							editable={false}
							onChangeText={name => this.setState({ name })}
						/>

						<TextField
							label="Birthday"
							value={birthday}
							editable={false}
							onChangeText={birthday =>
								this.setState({ birthday })
							}
						/>
					</View>

					<View style={styles.contentSection}>
						<Text style={styles.accountHeader}>
							Contact Information
						</Text>
						<Divider
							style={{
								marginTop: 5,
								backgroundColor: Variables.brand01Dark
							}}
						/>
						<TextField
							label="Email"
							value={email}
							editable={false}
							onChangeText={email => this.setState({ email })}
						/>

						<TextField
							label="Mobile Number"
							value={mobileNumber}
							editable={false}
							onChangeText={mobileNumber =>
								this.setState({ mobileNumber })
							}
						/>
						<TextField
							label="Address"
							value={address}
							editable={false}
							onChangeText={address => this.setState({ address })}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	accountContainer: {
		padding: 20,
		alignSelf: "stretch"
	},

	accountHeader: {
		color: Variables.brand02,
		fontSize: 17,
		fontFamily: Variables.fontLight,
		borderBottomColor: "#000000",
		borderBottomWidth: 1
	},
	contentSection: {
		paddingBottom: 20
	}
});
