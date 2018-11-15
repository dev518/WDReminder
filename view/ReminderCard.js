import React from 'react';
import { Button, Image, View, Text,StyleSheet,ScrollView,FlatList,TouchableHighlight,Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class ReminderCard extends React.Component {

    _onPress = (item) =>{
        this.props.onPress(item)
    }
  render() {
      const {item,separators} = this.props;
    return (
        <View style={{backgroundColor:'#fff',height:100,width:Dimensions.get('window').width,alignItems: 'center',justifyContent: 'center'}}>
          <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            underlayColor='#ff0000'
            style={styles.cardView}>
            <View style={{ backgroundColor: 'fff' }}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
          </View>
    );
  }
}


const styles = StyleSheet.create({
    cardView:{
      borderRadius:5,
      width:Dimensions.get('window').width - 20,
      height:90,
      backgroundColor:'#f00000',
      alignItems:'center',
      justifyContent:'center'
    }
  });