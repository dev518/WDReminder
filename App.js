import React from 'react';
import { Button, Image, View, Text,StyleSheet,ScrollView,FlatList,TouchableHighlight,Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import ReminderCard from './view/ReminderCard';

class LogoTitle extends React.Component {
  render() {
    return (
        <Text style={{fontSize:18, color:'#000'}}>时间卡</Text>
    );
  }
}

class SettingTitle extends React.Component {
  render() {
    return (
      <Text>设置</Text>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('addBtnClicked')}
          title="添加"
          color="#000"
          style={{font:8,color:'#ff0000'}}
        />),
      headerStyle:{backgroundColor:'#fff'}
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ addBtnClicked: this._addBtnClicked });
  }
  _addBtnClicked = () => {
    this.props.navigation.navigate('Add', {
      itemId: 87,
      otherParam: 'add sth',
    });
  };
  _onPress = (item) =>{
    this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
        data={[{ title: 'Title Text', key: 'item1' }]}
        renderItem={({ item, separators }) => (
          <ReminderCard item={item} separators={separators} onPress={this._onPress}/>
        )}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class AddReminderScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <SettingTitle/>,
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
          <Text>Settings!</Text>
          <Button
            title="Go to SettingDetails"
            onPress={() => this.props.navigation.navigate('SettingDetails')}
          />
        </ScrollView>
      </View>
    );
  }
}

class SettingDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Add: AddReminderScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const SettingsRootStack = createStackNavigator(
  {
    Setting: SettingsScreen,
    SettingDetails: SettingDetailsScreen,
  },
  {
    initialRouteName: 'Setting',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

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

export default createBottomTabNavigator({
  Home: RootStack,
  Settings: SettingsRootStack,
});


