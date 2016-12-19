/**
 * Created by Administrator on 2016/12/13 0013.
 */
"use strict"
import React, {Component}from 'react'
import {
    ViewPagerAndroid,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
  
}from 'react-native'
//引导页
import AboutScreen from './data/AboutScreen'
import LoginComponent from './LoginComponent'
const imgArr = [require('../img/guide1.jpg'), require('../img/guide2.jpg'), require('../img/guide3.jpg')];

class GuideComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
  
    
    render() {
        return (<View style={{flex:1,backgroundColor:'grey'}}>
            <ViewPagerAndroid
                initialPage={0}
                style={{height:AboutScreen.screen.height}}
                keyboardDismissMode={'on-drag'}//在托拽中隐藏软键盘
                ref="viewpager"
            >
                {this.getViewPagerItem(imgArr)}
            </ViewPagerAndroid>
        </View>);
    }

    getViewPagerItem(imgValues) {
        var item = [];
        if (imgValues) {
            let imgLength = imgValues.length;
            for (let i = 0; i < imgLength; i++) {
                let img = imgValues[i];
                if (imgLength - 1 === i) {
                    item.push(<View >
                        <Image source={img} style={[styles.guideImg,{flex:1}]} resizeMode={'stretch'}>
                            <View
                                style={{justifyContent:'flex-end',alignItems:'center',width:AboutScreen.screen.width,height:AboutScreen.screen.height*0.9}}>
                                <TouchableHighlight onPress={this.enterLogin.bind(this)}
                                                    activeOpacity={0.5}//被点击时为不透明
                                                    underlayColor={'#E3E3E3'}
                                                    style={{backgroundColor:'#545657 ',borderColor:'#545657 ',borderWidth:1,borderRadius:5}}
                                >
                                    <Text
                                        style={{fontSize:20,color:'red' ,padding:5,textAlign:'center' ,alignSelf:'center'}}>欢迎进入</Text>
                                </TouchableHighlight>
                            </View>
                        </Image>
                    </View>);
                } else {
                    item.push(<View >
                        <Image source={img} style={styles.guideImg} resizeMode={'stretch'}/>
                    </View>);
                }
            }
        }

        return item;
    }

    //进入登录界面
    enterLogin() {
        const {navigator}=this.props;
        if (navigator) {
            navigator.resetTo({
                component: LoginComponent,
                name: 'LoginComponent',
                param: {
                    id: 'LoginComponent'
                }
            });
        }
    }
}
const styles = StyleSheet.create({
    guideImg: {
        width: AboutScreen.screen.width,
        height: AboutScreen.screen.height,
    }
});

export  default GuideComponent;
