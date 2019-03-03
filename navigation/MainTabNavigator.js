import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";

import React from "react";
import { Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import PostJobScreen from "../screens/HomePages/PostJobScreen";

import EarningsScreen from "../screens/EarningsScreen";
import AccountScreen from "../screens/AccountScreen";
import TabBarIcon from "../components/IconTabBar";

import NavigationIcon from "../components/IconMenu";

import Variables from "../constants/Variables";

// Default Nav Settings
const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Variables.brand01,
		borderBottomWidth: 0,
		textAlign: "center"
	},
	headerTintColor: Variables.white,
	headerTitleStyle: {
		fontSize: 25,
		fontFamily: Variables.fontLight,
		textTransform: "uppercase",
		fontWeight: "300"
	},
	headerRight: <NavigationIcon />
};

// Home Stack
const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
		PostJob: PostJobScreen
	},
	{
		defaultNavigationOptions
	}
);

HomeStack.navigationOptions = {
	tabBarLabel: "Home",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? `ios-home` : "md-home"}
		/>
	)
};

// Earnings Stack
const EarningsStack = createStackNavigator(
	{
		Earnings: EarningsScreen
	},
	{
		defaultNavigationOptions
	}
);

EarningsStack.navigationOptions = {
	tabBarLabel: "Earnings",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? `ios-card` : "md-card"}
		/>
	)
};

// Account Stack
const AccountStack = createStackNavigator(
	{
		Account: AccountScreen
	},
	{
		defaultNavigationOptions
	}
);

AccountStack.navigationOptions = {
	tabBarLabel: "Account",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? `ios-contact` : "md-contact"}
		/>
	)
};

export default createBottomTabNavigator(
	{
		Home: HomeStack,
		Earnings: EarningsStack,
		Account: AccountStack
	},
	{
		initialRouteName: "Home",

		tabBarOptions: {
			labelStyle: {
				color: Variables.white,
				textTransform: "uppercase",
				fontSize: 13
			},
			tabStyle: {
				paddingTop: 1,
				paddingBottom: 8
			},
			style: {
				backgroundColor: Variables.brand01,
				height: 60
			},
			activeBackgroundColor: Variables.brand01Dark,
			inactiveBackgroundColor: Variables.brand01
		}
	}
);
