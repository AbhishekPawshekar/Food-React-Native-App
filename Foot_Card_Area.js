import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Foot_Card_Area({area_name,navigation}) {
  const[area,setarea]=useState([]);
  let count=0;
          useEffect(()=>{
                    
                      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area_name}`).then(res=>res.json()).then(d=>setarea(d.meals));
                      area.filter((x)=>{if(count<4){count++;return x;}})
                  },[area])
  return (
    <View style={{height:300}}>
          <View style={style.horizontal_view}>
                    <View>
                    <Text style={style.heading}>{area_name}</Text> 
                    <View style={{width:50,height:4,backgroundColor:'red',borderRadius:50,margin:10,marginTop:-2}}></View>
                    </View>
                    <Text style={{color:'red'}}>see more.</Text>
          </View>
          <View style={style.cart}>
          {area.filter((x)=>{if(count<4){count++;return x;}}).map((x)=>{return(
                              <Pressable key={x.idMeal} style={style.cart_style} onPress={()=>{navigation.navigate('Food_details_panel', {x:x})}}>
                                        <Image source={{uri:`${x.strMealThumb}`}} style={style.image_style_food_cart}></Image>
                                      <View style={style.view_text_holder}>
                                        <Text style={style.category_name}>{x.strMeal}</Text>
                                      </View>
                                        
                              </Pressable>
                    )})}

          </View>

    </View>
  )
}
const style=StyleSheet.create({
          heading:{fontSize:20,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1,padding:10,marginTop:10},
          horizontal_view:{width:'100%',justifyContent:'space-between',flexDirection:'row',marginTop:10},
          cart:{width:'100%',height:'100%',display:'flex',justifyContent:'space-around',alignItems:'flex-start',gap:10,flexDirection:'row',flexWrap:'wrap'},
          cart_style:{width:'45%',height:'35%',position:'relative',borderRadius:20},
          image_style_food_cart:{width:'100%',height:'100%',position:'relative',borderRadius:20},
          view_text_holder:{width:'100%',height:'100%',display:'flex',flexDirection:'row',alignItems:'flex-end',position:'absolute',padding:10},
          category_name:{color:'white',fontSize:18,textShadowColor:'black',textShadowRadius:12,shadowOpacity:0.8,textShadowOffset:{width:0,height:5}},
        
});