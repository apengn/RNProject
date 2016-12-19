/**
 * Created by Administrator on 2016/12/14 0014.
 */
"use strict"
import React, {Component} from 'react'
import {
    TouchableOpacity,
    Text,
    View,

}from'react-native'
class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (<View style={this.props.viewStyle}>
            <TouchableOpacity onPress={this.props.onPress}>
                <Text
                    style={[{fontSize:20,color:'black',textAlign:'center'},this.props.textStyles]}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>);
    }
}
export default Button;