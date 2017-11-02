/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={{ width: 88, height: 27 }} source={require('./img/logo.png')} />
          <Text>账号</Text>
        </View>
        <View style={{height: 110}}>
          <Swiper
            style={styles.wrapper}
            height={120}
            showsButtons={false}
            paginationStyle={{
              bottom: 10, left: null, right: 10
            }}>
            <View style={styles.slide}>
              <Image style={{ height: 110 }} source={require('./img/slide1.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={{ height: 110 }} source={require('./img/slide2.jpg')} />
            </View>
          </Swiper>
        </View>
        <View style={styles.notice}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('./img/notice.png')}/>
            <Text style={{paddingLeft: 10}}>产品升级-安心上线PLUS上线公告</Text>
          </View>
          <Text>更多</Text>
        </View>
        <View style={styles.gover}>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('./img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('./img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image  style={styles.goverImage} source={require('./img/gover.png')}/>
				<Text  style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('./img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
        </View>
		<View style={{list.view}}>
			<View style={list.item}>
				<View style={list.header}>
					<Text>国股票 20171019005</Text>
					<Text>到期还本付息</Text>
				</View>
				<View style={list.body}>
					<View>
						<Text>9.8<Text>%</Text></Text>
						<Text>年化收益率</Text>
					</View>
					<View>
						<Text>60<Text>天</Text></Text>
						<Text>到期还本付息</Text>
					</View>
					<View>
						<Text>购买</Text>
						<Text>1000元起</Text>
					</View>
				</View>
			</View>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1
  },
  slide:{
    height: 110,
    backgroundColor: "blue"
  },
  
  header: {
    flexDirection: "row",
    height: 44,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  notice:{
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    borderStyle: "solid",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
	backgroundColor: "#fff",
  },
  gover: {
	  height: 70,
	  flexDirection: "row",
	  alignItems: "center",
	  justifyContent: "space-between",
	  paddingLeft: 20,
	  paddingRight: 20,
	  backgroundColor: "#fff"
  },
  goverView: {
	alignItems: "center"
  },
  goverImage: {
	  width: 30,
	  height: 30,
  },
  goverText: {
	  lineHeight: 17,
	  height: 17,
	  textAlign: "center",
	  marginTop: 6,
	  fontSize: 12,
  }
});

const styles = StyleSheet.create({
	
});
	
