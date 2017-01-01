/**
 * Created by Administrator on 2016/12/15 0015.
 */
"use strict"
//主页
import React, {Component} from 'react'
import {View, Text}from 'react-native'
import ViewPager from 'rn-viewpager'
import AboutScreen from '../component/data/AboutScreen'
const  imgs=['https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
            'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
            'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
            'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
            'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
            ];
class HomeComponent extends Component {
    constructor(props){
          super(props);
     this.state={
         dateSources:imgs,
     };

    }
    render() {
        let date=new ViewPager.DataSource({pageHasChanged:(p1,p2)=>p1!==p2});

        return (<View style={{backgroundColor:'grey',flex:1}}>
            <ViewPager
                dataSource={date.cloneWithPages(this.state.viewpagerDate)}
                renderPage={this.renderPager()}
                isLoop={true}
                autoPlay={true}
            />
        </View>);
    }


    renderPager(img) {
    return <Image style={{width:AboutScreen.width,height:AboutScreen.screen.width*0.33}}
                  source={{uri:img}}
    />
    }

}
export  default HomeComponent;