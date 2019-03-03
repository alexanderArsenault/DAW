import React from "react";
import { StyleSheet, Text } from "react-native";
import Variables from "../../constants/Variables";
import ScrollPicker from "react-native-wheel-scroll-picker";
import DropdownBodyContainer from "./DropdownBodyContainer";

export default class RemunerationBody extends React.Component {
	state = {
		selectedPay: null,
		payAmounts: []
	};

	render() {
		return (
			<DropdownBodyContainer>
				<ScrollPicker
					key={this.state.paykey}
					dataSource={this.PayArray}
					selectedIndex={20}
					renderItem={(data, index, isSelected) => {
						//
					}}
					onValueChange={(data, selectedIndex) => {
						this.setState({
							selectedPay: data
						});
					}}
					wrapperHeight={120}
					wrapperWidth={150}
					wrapperBackground={Variables.brand01}
					itemHeight={40}
					highlightColor={Variables.white}
					highlightBorderWidth={0}
					activeItemTextStyle={{
						color: Variables.white,
						fontFamily: Variables.fontRegular,
						fontSize: 17,
						textTransform: "uppercase"
					}}
					itemTextStyle={{
						color: Variables.white,
						fontFamily: Variables.fontRegular,
						fontSize: 17,
						opacity: 0.65,
						textTransform: "uppercase"
					}}
					itemColor={"#B4B4B4"}
				/>
			</DropdownBodyContainer>
		);
	}

	PayArray = [
		"0 ZAR",
		"20 ZAR",
		"40 ZAR",
		"60 ZAR",
		"80 ZAR",
		"100 ZAR",
		"120 ZAR",
		"140 ZAR",
		"160 ZAR",
		"180 ZAR",
		"200 ZAR",
		"220 ZAR",
		"240 ZAR",
		"260 ZAR",
		"280 ZAR",
		"300 ZAR",
		"320 ZAR",
		"340 ZAR",
		"360 ZAR",
		"380 ZAR",
		"400 ZAR",
		"420 ZAR",
		"440 ZAR",
		"460 ZAR",
		"480 ZAR",
		"500 ZAR",
		"520 ZAR",
		"540 ZAR",
		"560 ZAR",
		"580 ZAR",
		"600 ZAR",
		"620 ZAR",
		"640 ZAR",
		"660 ZAR",
		"680 ZAR",
		"700 ZAR",
		"720 ZAR",
		"740 ZAR",
		"760 ZAR",
		"780 ZAR",
		"800 ZAR",
		"820 ZAR",
		"840 ZAR",
		"860 ZAR",
		"880 ZAR",
		"900 ZAR",
		"920 ZAR",
		"940 ZAR",
		"960 ZAR",
		"980 ZAR",
		"1000 ZAR",
		"1020 ZAR",
		"1040 ZAR",
		"1060 ZAR",
		"1080 ZAR",
		"1100 ZAR",
		"1120 ZAR",
		"1140 ZAR",
		"1160 ZAR",
		"1180 ZAR",
		"1200 ZAR",
		"1220 ZAR",
		"1240 ZAR",
		"1260 ZAR",
		"1280 ZAR",
		"1300 ZAR",
		"1320 ZAR",
		"1340 ZAR",
		"1360 ZAR",
		"1380 ZAR",
		"1400 ZAR",
		"1420 ZAR",
		"1440 ZAR",
		"1460 ZAR",
		"1480 ZAR",
		"1500 ZAR",
		"1520 ZAR",
		"1540 ZAR",
		"1560 ZAR",
		"1580 ZAR",
		"1600 ZAR",
		"1620 ZAR",
		"1640 ZAR",
		"1660 ZAR",
		"1680 ZAR",
		"1700 ZAR",
		"1720 ZAR",
		"1740 ZAR",
		"1760 ZAR",
		"1780 ZAR",
		"1800 ZAR",
		"1820 ZAR",
		"1840 ZAR",
		"1860 ZAR",
		"1880 ZAR",
		"1900 ZAR",
		"1920 ZAR",
		"1940 ZAR",
		"1960 ZAR",
		"1980 ZAR",
		"2000 ZAR"
	];
}

const styles = StyleSheet.create({
	accordionBody: {
		fontFamily: Variables.fontRegular,
		fontSize: 15,
		color: Variables.white
	}
});
