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
    ListView,
    TouchableOpacity,
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
        return (<View style={{flex:1,width:AboutScreen.screen.width*0.75}}>
            <Image source={this.props.menu_head} style={{height:AboutScreen.screen.width*0.45}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}/>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={this.props.info_head}
                                       style={{height:30,width:30,borderColor:'white',borderWidth:2,borderRadius:20,marginLeft:10}}/>
                                <Text numberOfLines={1}
                                      style={{marginLeft:5,textAlign:'left',color:'white'}}>{this.props.name}</Text>
                            </View>
                            <Text numberOfLines={1}
                                  style={{marginLeft:10,marginTop:10,textAlign:'left',fontSize:10,fontStyle:'italic',color:'white'}}>个性签名</Text>
                        </View>


                    </View>
                    <View style={{flex:1}}>
                        <Image source={this.props.erweima} style={{width:30,height:30,marginTop: 10,marginLeft:40}}/>
                    </View>
                </View>
            </Image>
            {this.getListView(this.props.listDate)}
            <View style={{flexDirection:'row',marginLeft:5,width:AboutScreen.screen.width*0.5,alignItems:'flex-end'}}>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                        <Image source={this.props.img_set} style={{width:20,height:20,}} resizeMode={'contain'}/>
                        <Text style={{marginLeft: 10,color:'black',fontSize:10}}>设置</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                        <Image source={this.props.img_yejian} style={{width:20,height:20,}} resizeMode={'contain'}/>
                        <Text style={{marginLeft: 10,color:'black',fontSize:10}}>夜间</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>);
    }

    getListView(values) {
        let ls = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        return (
            <ListView style={{marginTop:5}} dataSource={ls.cloneWithRows(values)}
                      renderRow={(rowDate)=>this.getItems(rowDate)}></ListView>);
    }

    getItems(rowDate) {
        return (
            <TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                    <Image source={rowDate.img} style={{width:25,height:25,}} resizeMode={'contain'}/>
                    <Text style={{marginLeft: 10,color:'black'}}>{rowDate.title} </Text>
                </View>
            </TouchableOpacity>);
    }
}
export default MenuComponent;