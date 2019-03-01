import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Variables from '../../constants/Variables'
import ImageCardContainer from './ImageCardContainer'
import CardHeader from './CardHeader'

export default class JobCard extends React.Component {
    render(){
        return (
            <ImageCardContainer>
                <CardHeader>St. James Coffee</CardHeader>
                <View style={styles.photoCardContainer}>
                    <Image style={styles.cardImage} source={require('../../assets/images/resto.jpeg')}></Image>
                    <View style={styles.photoCardText}>
                        <Text style={styles.photoCardText}>Bartender</Text>
                        <Text style={styles.photoCardText}>450.00 ZAR</Text>
                        <Text style={styles.photoCardText}>07/08/18 | 17.00 - 22.00</Text>
                        <Text style={styles.photoCardTextBottom}>Woodstock</Text>
                    </View>
                </View>
            </ImageCardContainer>
        )
    }
}

const styles = StyleSheet.create({
    scrollList: {
      paddingVertical: 20,
    },
    cardImage: {
      width: 129,
      height: 83,
    },
    photoCardContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    photoCardText: {
      paddingLeft: 10,
      paddingBottom: 2,
      fontSize: 15,
      color: Variables.brand01
    },
    photoCardTextBottom: {
        paddingLeft: 10,
        fontSize: 15,
        color: Variables.brand01
      }
});
  