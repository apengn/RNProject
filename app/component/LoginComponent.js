/**
 * Created by Administrator on 2016/12/13 0013.
 */
"use strict"
import React, {Component}from'react'
import {
    View,
    Text,
    BackAndroid,
    StyleSheet,
    TextInput,
    Image,
    ToastAndroid,
    TouchableOpacity
}from'react-native'
import {NavigatorBack} from './NavigatorBackAndroid'
import AboutScreen from './data/AboutScreen'
import  Button from './Button'
import MainComponent from './MainComponent'
var inputNumber;//帐号
var inputPassword;//密码

//登录界面
class LoginComponent extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.gotoBack = this.gotoBack.bind(this);
    }

    gotoBack() {
        const {navigator} = this.props;
        return NavigatorBack(navigator);
    }

    componentDidMount() {
        BackAndroid.addEventListener("hardwareBackPress", this.gotoBack);
    }

    // <Image source={require('../img/icon_login.jpg')} style={styles.img}></Image>
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#66C6B8'}}>
                <Text style={{fontSize:50,color:'white',textAlign:"center",marginTop:AboutScreen.screen.height*0.25}}>Welcome</Text>
                <View
                    style={{marginTop:50,height:45,paddingRight:25,paddingLeft:20,alignItems:"center",flexDirection:"row" ,borderColor:'white',borderWidth:1,borderRadius:30,marginLeft:40,marginRight:40}}>
                    <Text style={{color:'white'}}>帐号:</Text>
                    <TextInput style={{backgroundColor:'#66C6B8',flex:1,color:'black'}}
                               underlineColorAndroid={'#66C6B8'}
                        // placeholder={'请输入帐号'}
                        // placeholderTextColor={'grey'}
                               maxLength={11}
                               keyboardType={'numeric'}
                               onChangeText={(number)=>{
                                 inputNumber=number;
                               }}
                    />
                </View>
                <View
                    style={{height:45,marginTop:10,paddingRight:25,paddingLeft:20,alignItems:"center",flexDirection:"row" ,borderColor:'white',borderWidth:1,borderRadius:30,marginLeft:40,marginRight:40}}>
                    <Text style={{color:'white'}}>密码:</Text>
                    <TextInput style={{backgroundColor:'#66C6B8',flex:1,}}
                               underlineColorAndroid={'#66C6B8'}
                               secureTextEntry={true}
                               maxLength={11}
                               onChangeText={(values)=>{
                                inputPassword=values;
                               }}
                    />
                </View>
                <Button
                    onPress={this.Login.bind(this)}
                    viewStyle={{justifyContent:'center',height:45,marginTop:50,marginLeft:100,marginRight:100,borderWidth:1,borderColor:'#51B2F9',backgroundColor:'#51B2F9',borderRadius:30,}}
                    textStyles={{fontSize:20,color:'white'}}
                    text={'立即登录'}/>

                <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',width:AboutScreen.screen.width}}>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>忘记密码?</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'white',width:1,marginLeft:5,marginRight:5}}/>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>立即注册</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image style={{width:40,height:40,margin:5}} resizeMode={'stretch'}
                               source={require('../img/ssdk_oks_classic_qq.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width:40,height:40,margin:5}} resizeMode={'stretch'}
                               source={require('../img/ssdk_oks_classic_sinaweibo.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width:40,height:40,margin:5}} resizeMode={'stretch'}
                               source={require('../img/ssdk_oks_classic_wechat.png')}/>
                    </TouchableOpacity>

                </View>
            </View>);
    }

    Login() {
        console.log("xxxx");
        console.log(inputPassword);
        console.log(inputNumber);
        ToastAndroid.show(inputPassword, 1);
        const {navigator}=this.props;
        if (navigator) {
            navigator.resetTo({
                component: MainComponent,
                name: 'MainComponent',
                params: {
                    id: 'MainComponent'
                }
            });
        }

    }
}

const styles = StyleSheet.create({
    img: {
        width: AboutScreen.screen.width,
        height: AboutScreen.screen.height
    },
});
export  default LoginComponent;