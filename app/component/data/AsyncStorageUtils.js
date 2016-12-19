/**
 * Created by Administrator on 2016/12/16 0016.
 */
"use strict"
import React, {Component} from 'react'
import {AsyncStorage}from 'react-native'
export const AsyncStorageUtils = {
    //保存数据
    save(key, values){
        AsyncStorage.setItem(key, JSON.stringify(values), ()=> {
        })
    },
    //获取数据
    get(key, callback){
        AsyncStorage.getItem(key, (error, object)=> {
                if (error) {
                    callback();
                } else {
                    callback(object);
                }
            }
        )
    },
    //清空所有数据
    clearAll(){

    }

}


