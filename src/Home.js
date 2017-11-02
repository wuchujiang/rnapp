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
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{width, alignItems: "center", justifyContent: "center"}}><Image style={{ width: 88, height: 27 }} source={require('../img/logo.png')} /></View>
    ),
    headerStyle: {
      height: 44,
      borderBottomWidth: 1,
      justifyContent:"center",
      borderStyle: "solid",
      borderColor: "#f5f5f5"
    },
    headerTitleStyle: {
      color: "#1E1C4D"
    },
    headerRight: <Text></Text>
    
  });
  goToUserDetail = () => {
    const { navigate } = this.props.navigation;
    navigate('Detail');
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.header}>
          <Image style={{ width: 88, height: 27 }} source={require('../img/logo.png')} />
          <Text>账号</Text>
        </View> */}
        <View style={{height: 110}}>
          <Swiper
            style={styles.wrapper}
            height={120}
            showsButtons={false}
            paginationStyle={{
              bottom: 10, left: null, right: 10
            }}>
            <View style={styles.slide}>
              <Image style={{ height: 110 }} source={require('../img/slide1.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={{ height: 110 }} source={require('../img/slide2.jpg')} />
            </View>
          </Swiper>
        </View>
        <View style={styles.notice}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../img/notice.png')}/>
            <Text style={{paddingLeft: 10}}>产品升级-安心上线PLUS上线公告</Text>
          </View>
          <Text>更多</Text>
        </View>
        <View style={styles.gover}>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('../img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('../img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image  style={styles.goverImage} source={require('../img/gover.png')}/>
				<Text  style={styles.goverText} >银行信用</Text>
			</View>
			<View style={styles.goverView}>
				<Image style={styles.goverImage} source={require('../img/gover.png')}/>
				<Text style={styles.goverText} >银行信用</Text>
			</View>
        </View>
		<View style={list.view}>
          <Product goToUserDetail={this.goToUserDetail}/>
			<Product goToUserDetail={this.goToUserDetail}/>
			<Product goToUserDetail={this.goToUserDetail}/>
        </View>    
      </ScrollView>
    );
  }
}


const Product = (props) => (
  <TouchableHighlight  onPress={() => props.goToUserDetail()}>
  <View style={list.item}>
    <View style={list.header}>
        <Text style={{paddingRight: 10, color: "#1E1C4D"}}>国股票 20171019005</Text>
        <Text style={{fontSize: 11,color: "#A2A9B1",paddingTop: 2, paddingBottom:2, borderWidth: 1, borderColor: "#eee", borderStyle: "solid", borderRadius: 21, paddingLeft: 6, paddingRight: 6}}>到期还本付息</Text>
    </View>
    <View style={list.body}>
        <View>
          <Text style={{height:40, lineHeight:40, color: "#FF801A", fontSize: 28 }}>9.8<Text style={{fontSize: 14}}>%</Text></Text>
        <Text style={list.text}>年化收益率</Text>
      </View>
      <View>
        <View style={{height: 40, paddingTop: 6}}>
          <Text style={{ color: "#3c3c3c", fontSize: 24 }}>60<Text style={{fontSize: 14}}>天</Text></Text>
        </View>
        <Text style={list.text}>固定期限</Text>
      </View>
      <View>
        <View style={{height: 40, paddingTop: 7}}>
          <View style={{justifyContent: "center", height: 28, borderWidth: 1, borderStyle: "solid", borderColor: "#FF801A", borderRadius: 28, width: 64}}>
            <Text style={{ color: "#FF801A", fontSize: 14, textAlign: "center"}}>购买</Text>
          </View>
        </View>
        <Text style={list.text}>1000元起</Text>
      </View>
    </View>
  </View>
  </TouchableHighlight>
)

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

const list = StyleSheet.create({
	view: {
    paddingBottom: 20
	},
	item: {
    paddingLeft: 12,
    backgroundColor: "#fff",
    marginTop: 10,
	},
	header: {
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderStyle: "solid",
    height: 40,
    flexDirection: "row",
    alignItems: "center"
	},
	body:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 12
  },
  text: {
    fontSize: 12,
    color: "#A2A9B1",
    height: 17,
    lineHeight: 17,
    textAlign: "center"
  }
});
	
