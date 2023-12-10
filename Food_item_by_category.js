import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Food_item_by_category({navigation,route}) {
          const[data,setdata]=useState([]);
          useEffect(()=>{
                    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.x.strCategory}`)
                    .then(res=>res.json()).then(d=>setdata(d.meals))
          },[data]);
  return (
    <View style={style.category_panel_style}>
          <Text style={style.heading}>{route.params.x.strCategory}</Text>
          <ScrollView>
          <View style={style.scroll_style} >
          {data.map((x)=>{
                              return(
                                        <Pressable key={x.idMeal} style={{marginLeft:20}} onPress={()=>{navigation.navigate('Food_details_panel', {x:x})}}>
                                                  <Image source={{uri:`${x.strMealThumb}`}} style={style.image_rounded}></Image>
                                                  <Text style={style.category_title}  >{x.strMeal}</Text>
                                        </Pressable>
                              )
                    })}
                  
          </View>
          </ScrollView>
    </View>
  )
}
const style=StyleSheet.create({
          category_panel_style:{width:'100%'},
          heading:{fontSize:20,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1,padding:10},
          scroll_style:{width:'100%',marginTop:10,display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'},
          image_rounded:{width:80,height:80,borderRadius:40},
          category_title:{textAlign:'center',width:100}
});