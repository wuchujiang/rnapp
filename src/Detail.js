import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Detail extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "项目详情",
        headerStyle: {
          height: 44,
          borderBottomWidth: 1,
          borderStyle: "solid",
          borderColor: "#f5f5f5"
        },
        headerTitleStyle: {
            alignSelf: 'center',
            color: "#1E1C4D",
            fontSize: 17
        },
        headerRight: <Text></Text>
      });
    render() {
        return (
            <Text>test</Text>
        )
    }
}