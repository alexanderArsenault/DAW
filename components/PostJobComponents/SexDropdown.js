import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import Variables from "../../constants/Variables";
import DropdownBodyContainer from "./DropdownBodyContainer";
import { CheckBox } from "react-native-elements";

export default class PositionBody extends React.Component {
	POSITIONS = [
		{
			title: "Male",
			value: false
		},
		{
			title: "Female",
			value: false
		}
	];

	render() {
		return (
			<DropdownBodyContainer>
				<View style={styles.checkboxContainer}>
					{this.POSITIONS.map((position, index) => {
						return (
							<CheckBox
								onPress={() => {
									position.value = !position.value;
									this.forceUpdate();
								}}
								containerStyle={{
									backgroundColor: Variables.brand01,
									borderWidth: 0,
									padding: 0,
									paddingVertical: 5
								}}
								textStyle={{
									color: Variables.white,
									flex: 1,
									padding: 0,
									fontFamily: Variables.fontLight,
									fontSize: 17
								}}
								size={24}
								iconRight={true}
								iconType="material"
								checkedIcon="check-box"
								checkedColor={Variables.white}
								uncheckedIcon="check-box-outline-blank"
								uncheckedColor={Variables.white}
								title={position.title}
								checked={position.value}
								key={index}
							/>
						);
					})}
				</View>
			</DropdownBodyContainer>
		);
	}
}

const styles = StyleSheet.create({
	accordionBody: {
		fontFamily: Variables.fontRegular,
		fontSize: 15,
		color: Variables.white
	},
	checkboxContainer: {
		flex: 1,
		padding: 0
	}
});
