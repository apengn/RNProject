/**
 * Created by Administrator on 2016/12/15 0015.
 */
"use strict"
import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    DrawerLayoutAndroid,
    Text,
}from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import  HomeComponent from '../fragment/HomeComponent'
import  TeamComponent from '../fragment/TeamComponent'
import  MsgComponent from '../fragment/MsgComponent'
import AboutScreen from './data/AboutScreen'
import MenuComponent from './menu/MenuComponent'
const listDate = [{
    img: require('../img/protec_sub_account_lock.png'),
    title: '了解会员特权'
}, {
    img: require('../img/protec_sub_game_lock.png'),
    title: 'QQ钱包'
}, {
    img: require('../img/protec_sub_game_protec.png'),
    title: '个性装扮'
}, {
    img: require('../img/protec_sub_mail.png'),
    title: '我的收藏'
}, {
    img: require('../img/protec_sub_qb.png'),
    title: '我的相册'
}, {
    img: require('../img/protec_sub_qq.png'),
    title: '我的文件'
}];
class MainComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        let navigationView = (<MenuComponent menu_head={require('../img/menu_head.jpg')}
                                             name={'张三'}
                                             info_head={require('../img/face_icon.png')}
                                             erweima={require('../img/ic_erweima.png')}
                                             listDate={listDate}
                                             img_set={require('../img/flipper_more.png')}
                                             img_yejian={require('../img/forever.png')}
        />);
        return (
            <DrawerLayoutAndroid
                drawerWidth={AboutScreen.screen.width*0.75}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=>navigationView}
            >
                <TabNavigator>
                    <TabNavigator.Item
                        title="主页"
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={require("../img/tab_home_normal.png")} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require("../img/tab_home_press.png")} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <HomeComponent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的团"
                        selected={this.state.selectedTab === 'team'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={require("../img/tab_icon_more_normal.png")} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require("../img/tab_icon_more_pressed.png")} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'team' })}>

                        <TeamComponent/>
                    </TabNavigator.Item>


                    <TabNavigator.Item
                        title="消息"
                        selected={this.state.selectedTab === 'my'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={require("../img/tab_my_normal.png")} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require("../img/tab_my_press.png")} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'my' })}>
                        <MsgComponent />
                    </TabNavigator.Item>
                </TabNavigator>
            </DrawerLayoutAndroid>);
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    }

});
export default MainComponent;