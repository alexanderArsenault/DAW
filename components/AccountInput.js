import React from "react";
import Variables from "../constants/Variables";
import { TextField } from "react-native-material-textfield";

export default class TextInputDAW extends React.Component {
	render() {
		let {
			children,
			value,
			label,
			onChangeText,
			keyboardType,
			...props
		} = this.props;

		return (
			<TextField
				label={label}
				labelTextStyle={{ fontFamily: Variables.fontRegular }}
				tintColor={Variables.white}
				value={value}
				activeLineWidth={2}
				lineWidth={0}
				fontSize={18}
				keyboardType={keyboardType}
				baseColor={Variables.offwhite}
				textColor={Variables.white}
				onChangeText={onChangeText}
			/>
		);
	}
}
