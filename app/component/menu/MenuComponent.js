/**
 * Created by Administrator on 2016/12/19 0019.
 */
"use strict"
//菜单
import React, {Component}from 'react'
import {
    View,
    Image,
    Text,
}from'react-native'
import AboutScreen from '../data/AboutScreen'
class MenuComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (<View >
            <Image source={this.props.menu_head} style={{height:AboutScreen.screen.width*0.45}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}/>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={this.props.info_head}
                                       style={{height:40,width:40,borderColor:'white',borderWidth:2,borderRadius:20,marginLeft:10}}/>
                                <Text numberOfLines={1} style={{textAlign:'left'}}>{this.props.name}</Text>
                            </View>
                            <Text numberOfLines={1} style={{textAlign:'left'}}>个性签名</Text>
                        </View>


                    </View>
                    <View style={{flex:1}}></View>
                </View>
            </Image>
        </View>);
    }
}
export default MenuComponent;