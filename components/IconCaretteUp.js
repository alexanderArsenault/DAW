import React from "react";
import { Platform } from "react-native";
import { Icon } from "expo";
import { withNavigation } from "react-navigation";

import Colors from "../constants/Variables";

class NavigationIcon extends React.Component {
	render() {
		return (
			<Icon.Ionicons
				name={Platform.OS === "ios" ? `ios-arrow-up` : "md-arrow-up"}
				onPress={() => {
					this.props.navigation.closeDrawer();
				}}
				size={22}
				style={{ paddingTop: 2 }}
				color={Colors.tabIconDefault}
			/>
		);
	}
}

export default withNavigation(NavigationIcon);
