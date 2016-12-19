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
import  MyComponent from '../fragment/MyComponent'
import AboutScreen from './data/AboutScreen'
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
        let navigationView = (<View>
            <Text>Menu</Text>
        </View>);
        return (
            <DrawerLayoutAndroid
                drawerWidth={AboutScreen.screen.width*0.35}
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
                        title="我的"
                        selected={this.state.selectedTab === 'my'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={require("../img/tab_my_normal.png")} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require("../img/tab_my_press.png")} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'my' })}>
                        <MyComponent />
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