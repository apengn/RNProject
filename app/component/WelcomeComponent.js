/**
 * Created by Administrator on 2016/12/13 0013.
 */
"use strict"
import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet,

}from 'react-native'
//欢迎页
import AboutScreen from './data/AboutScreen'
import GuideComponent from './GuideComponent'
import  LoginComponent from './LoginComponent'
import  {AsyncStorageUtils} from './data/AsyncStorageUtils'

var timer;
class WelcomeComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    componentDidMount() {
        const {navigator}=this.props;
        timer = setTimeout(()=> {
            if (navigator) {
                AsyncStorageUtils.get("isFirst", (values)=> {
                    if (values) {
                        navigator.resetTo({
                            component: LoginComponent,
                            name: 'LoginComponent',
                            params: {
                                id: 'LoginComponent',
                            }
                        });
                    } else {
                        AsyncStorageUtils.save("isFirst", "isFirst");
                        navigator.resetTo({
                            component: GuideComponent,
                            name: 'GuideComponent',
                            params: {
                                id: 'GuideComponent',
                            }
                        });
                    }

                })
              
            }
        }, 4000);
    }

    componentDidUnMount() {
        if (timer) {
            clearTimeout(timer)
        }
    }

    render() {
        return (<View style={{flex:1}}>
            <Image source={require('../img/icon_welcome.jpg')}
                   style={styles.img}
                   resizeMode={'stretch'}
            />
        </View>);
    }
}
const styles = StyleSheet.create({
    img: {
        width: AboutScreen.screen.width,
        height: AboutScreen.screen.height
    },
});
export  default WelcomeComponent;