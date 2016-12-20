/**
 * Created by Administrator on 2016/12/15 0015.
 */
"use strict"
//主页
import React, {Component} from 'react'
import {View, Text}from 'react-native'
import ViewPager from 'rn-viewpager'
class HomeComponent extends Component {
    render() {
        return (<View style={{backgroundColor:'grey',flex:1}}>
            <ViewPager
                dataSource={this.dateSources()}
                renderPage={this.renderPager()}
                isLoop={true}
                autoPlay={true}
            />
        </View>);
    }

    dateSources() {

    }

    renderPager() {

    }
}
export  default HomeComponent;