import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Variables from "../../constants/Variables";
import DropdownBodyContainer from "../../components/PostJobComponents/DropdownBodyContainer";
import ScrollPicker from "react-native-wheel-scroll-picker";

// TODO - CHECK THIS PULL REQUEST TO SEE IF IT WENT LIVE AND UPDATE LIB
// https://github.com/yasemincidem/react-native-picker-scrollview/pull/1/files

const monthsInYear = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export default class DateBody extends React.Component {
	constructor(props) {
		super(props);
		let date = new Date();

		let d = date.getDate();
		let m = date.getMonth();
		let y = date.getFullYear();

		this.state = {
			currentDate: d,
			currentMonth: m,
			currentYear: y,

			selectedDateIndex: d - 1,
			selectedDate: d,
			selectedMonth: m,
			selectedYear: y
		};

		daysInCurrentMonth = new Date(y, m + 1, 0).getDate();

		let daysArray = [];
		for (x = 0; x !== daysInCurrentMonth + 1; x++) {
			daysArray.push(x.toString());
		}
		daysArray.shift();

		this.state.daysInSelectedMonth = daysArray;

		this.state.datekey = Math.random();
		// end of year settings
		let yearArray = [y];
		if (this.state.currentMonth > 10) {
			yearArray.push(y + 1);
		}
		this.state.selectableYearsArray = yearArray;
	}

	state = {
		selectedMonth: null,
		selectedDate: null,
		selectedYear: null,
		selectableYearsArray: []
	};

	render() {
		return (
			<DropdownBodyContainer>
				<ScrollPicker
					key={this.state.datekey}
					dataSource={this.state.daysInSelectedMonth}
					selectedIndex={this.state.selectedDateIndex}
					renderItem={(data, index, isSelected) => {
						//
					}}
					onValueChange={(data, selectedIndex) => {
						this.setState({
							selectedDate: data,
							selectedDateIndex: selectedIndex
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
				{/* Month */}
				<ScrollPicker
					dataSource={monthsInYear}
					selectedIndex={this.state.selectedMonth}
					renderItem={(data, index, isSelected) => {
						//
					}}
					onValueChange={(data, selectedIndex) => {
						// find out how many days are in the newly selected month
						let newMonthDays = new Date(
							this.state.selectedYear,
							selectedIndex + 1,
							0
						).getDate();

						// turn the length of that month into an array of dates
						let newMonthArray = [];
						for (x = 1; x < newMonthDays + 1; x++) {
							newMonthArray.push(x);
						}

						// state.daysInSelectedMonth hasn't been updated yet with new value. we assign it to oldmonth length
						// let oldMonthLength = this.state.daysInSelectedMonth
						// 	.length;

						// if the newly selected month has less days than the old month,
						if (newMonthDays < this.state.selectedDate) {
							this.setState({
								// update the currently selected date to be last in array
								selectedDateIndex: newMonthDays - 1,
								// refresh the datepicker component
								datekey: Math.random()
							});
						}

						this.setState({
							selectedMonth: selectedIndex,
							daysInSelectedMonth: newMonthArray
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
				<ScrollPicker
					dataSource={this.state.selectableYearsArray}
					selectedIndex={0}
					renderItem={(data, index, isSelected) => {
						//
					}}
					onValueChange={(data, selectedIndex) => {
						this.setState({
							selectedYear: data
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
}

const styles = StyleSheet.create({
	accordionBody: {
		fontFamily: Variables.fontRegular,
		fontSize: 15,
		color: Variables.white
	}
});
