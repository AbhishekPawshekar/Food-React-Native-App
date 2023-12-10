import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
const location_image=require('./Images/location_image.png');
const search_icon=require('./Images/search_icon.png');
const person_vector=require('./Images/person_vector.png');
export default function Header() {
  return (
    <View style={styles.header_style}>
          <View style={styles.row_flex}>
     <View style={styles.circle_view}><Image style={styles.circle_image_inside_view} source={location_image}></Image></View>
     <View><Text>Home</Text><Text>Hadapsar, Maharashtra</Text></View>
      </View>
      <View style={styles.row_flex}>
      <Image style={styles.search_image} source={search_icon}></Image>
     <Image style={styles.person_image} source={person_vector}></Image>
    </View></View>
  )
}
const styles=StyleSheet.create({
          circle_view:{width:40,height:40,backgroundColor:'red',borderRadius:50,display:'flex',justifyContent:'center',alignItems:'center'},
          circle_image_inside_view:{width:'80%',height:'80%'},
          search_image:{width:30,height:30,},
          person_image:{width:40,height:40,borderRadius:50,backgroundColor:'red'},
          header_style:{width:'100%',height:50,display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'space-between', paddingLeft:10,paddingRight:10},
          row_flex:{display:'flex',flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}

});