import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

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
    state = {
        index: 0,
        routes: [
          { key: '1', title: 'First' },
          { key: '2', title: 'Second' },
        ],
    };
    
    _handleIndexChange = index => this.setState({ index });
    
    _renderHeader = props => <TabBar {...props} />;
    
    FirstRoute = () => (
        <View style={{flex: 1}}></View>
    );
    
    SecondRoute = () => (
        <View style={{ flex: 1 }}></View>
    );
    _renderScene = SceneMap({
    '1': this.FirstRoute,
    '2': this.SecondRoute,
    });
    
    render() {
        return (
            <ScrollView>
                <View style={{paddingTop: 10, backgroundColor: "#fff", paddingLeft: 12}}>
                    <Text style={{fontSize: 15, color: "#3c3c3c", lineHeight: 21}}>爱定期 II</Text>
                    <View style={styles.headerRate}>
                        <View>
                            <Text style={{ fontSize: 31, color: "#FF801A" }}>9.8<Text style={{fontSize: 14}}>%</Text></Text>
                            <Text style={styles.text}>年化收益率</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 31, color: "#1E1C4D" }}>56<Text style={{fontSize: 14}}>天</Text></Text>
                            <Text style={styles.text}>固定期限</Text>
                        </View>
                    </View>
                    <View style={{paddingTop: 10, paddingBottom: 8}}>
                        <View style={styles.money}>
                            <Text style={{lineHeight: 18, fontSize: 13, color: "#666"}}>起投金额 100元</Text>
                            <Text style={{lineHeight: 18, fontSize: 13, color: "#666"}}>限购人数 200人</Text>
                        </View>
                        <View style={styles.money}>
                            <Text style={{lineHeight: 18, fontSize: 13, color: "#666"}}>单人限投 100万</Text>
                            <Text style={{lineHeight: 18, fontSize: 13, color: "#666"}}>剩余 300,000.00元</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.banner}>
                    <Image style={{ width: 20, height: 20 }} source={require('../img/rate.png')} />
                    <Text style={{lineHeight: 18, fontSize: 13, color: "#666", paddingLeft: 10}}>投资满1万元可获10元现金红包</Text>
                </View>
                <View style={{backgroundColor: "#fff", marginBottom: 10}}>
                    <View style={styles.progress}>
                        <View style={styles.ptext}>
                            <Text style={styles.smText}>投即生息</Text>
                            <Text style={styles.smText}>到期还本付息</Text>
                        </View>
                        <View style={styles.bar}>
                            <View style={styles.circle}></View>
                            <View style={styles.line}></View>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={styles.ptext}>
                            <Text style={[styles.smText, {paddingRight: 10}]}>2017-08-01</Text>
                            <Text style={[styles.smText, {paddingRight: 10}]}>2017-08-01</Text>
                        </View>
                    </View>
                    <View style={styles.ads}>
                        <Text style={{ fontSize: 13, color: "#666" }}>投资10万元，56天可赚取收益 <Text style={{color: "#FF801A", fontSize: 17}}>5079.45</Text>元</Text>
                    </View>
                </View>
                <TabViewAnimated
                    style={{flex: 1}}    
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        
    },
    headerRate: {
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: "#f5f5f5",
        borderStyle: "solid",
        paddingRight: 12
    },
    text: {
        fontSize: 13,
        color: "#A2A9B1",
        lineHeight: 18,
        textAlign: "center"
    },
    money: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 7,
        paddingRight: 12
    },
    banner: {
        height: 34,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    progress: {
        paddingTop: 19,
        paddingBottom: 15,
        paddingLeft: 12,
        paddingRight: 12
    },
    ptext: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bar: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: 6,
        paddingBottom: 6
    },
    circle: {
        width: 13,
        height: 13,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#FF801A",
        borderRadius: 13,
    },
    line: {
        height: 2,
        backgroundColor: "#FF801A",
        marginLeft: 5,
        flex: 1,
        marginRight: 5
    },
    smText: {
        fontSize: 11,
        color: "#666",
        lineHeight: 16,
        paddingLeft: 10
    },
    ads: {
        flexDirection: "row",
        alignItems: "center",
        height: 44,
        borderStyle: "solid",
        borderColor: "#f5f5f5",
        borderTopWidth: 1,
        marginLeft: 12
    }
})