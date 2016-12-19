/**
 * Created by Administrator on 2016/12/13 0013.
 */
"use strict"
import React, {Component} from 'react'
import {
    Navigator,
    View,
}from 'react-native'
import WelcomeComponent from './WelcomeComponent'
class NavigatorComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
    render() {
        return (<View style={{flex:1}}>
            <Navigator
                ref='navigator'
                //初始化路由
                initialRoute={{
                component:WelcomeComponent,
                name:'WelcomeComponent',
                params:{
                    id:"123",
                }
            }}
                //配置场景
                configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight;}}
                //把组件渲染到场景
                renderScene={(route,navigator)=>{
                let Component=route.component;
                return (<Component  navigator={navigator} {...route}/>);
                }
            }
            />
        </View>);
    }
}
export  default NavigatorComponent;
