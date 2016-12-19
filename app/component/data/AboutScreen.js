/**
 * Created by Administrator on 2016/12/13 0013.
 */
"use strict"
import React, {Component}from 'react'
import {
    Dimensions,
    PixelRatio
}from 'react-native'
export default {
    screen:{
        width:Dimensions.get('window').width,//屏幕的宽
        height:Dimensions.get('window').height,//屏幕的高
    },
    pixelRatio:PixelRatio.get(),//像素密度
    minPixelRatio:1/PixelRatio.get(),//最小宽度
}
