import React from "react";
import Variables from "../constants/Variables";
import { View } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Divider } from "react-native-elements";

export default class InputSmallDivider extends React.Component {
	render() {
		let {
			children,
			value,
			label,
			onChangeText,
			keyboardType,
			multiline,
			editable,
			characterRestriction,
			hideDivider,
			...props
		} = this.props;

		return (
			<View>
				<TextField
					label={label}
					labelTextStyle={{
						fontFamily: Variables.fontRegular
					}}
					tintColor={Variables.brand01Dark}
					containerStyle={{ marginBottom: -5 }}
					value={value}
					activeLineWidth={0}
					lineWidth={0}
					fontSize={16}
					characterRestriction={characterRestriction}
					baseColor={Variables.brand01}
					textColor={Variables.brand01}
					onChangeText={onChangeText}
					multiline={multiline}
					editable={editable}
				/>

				{this._renderDivider(hideDivider)}
			</View>
		);
	}

	_renderDivider = bool => {
		if (bool) {
			return;
		} else {
			return <Divider backgroundColor={"#d3d3d3"} />;
		}
	};
}
