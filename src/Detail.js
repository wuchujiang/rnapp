import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
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
            <ScrollView>
                <View>
                    <Text>爱定期 II</Text>
                    <View>
                        <View>
                            <Text>9.8<Text>%</Text></Text>
                            <Text>年化收益率</Text>
                        </View>
                        <View>
                            <Text>56<Text>%</Text>天</Text>
                            <Text>固定期限</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>起投金额 100元</Text>
                            <Text>起投金额 100元</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}