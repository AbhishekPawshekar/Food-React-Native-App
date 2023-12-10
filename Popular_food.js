import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, {useState } from 'react'
const leftarrow=require('./Images/left_arrow.png');

export default function Popular_food({random_data,setrandom,navigation}) {   
          

  return (
    <View style={style.Popular_food_style}>
      <Text style={style.heading}>Popular food</Text>
      <View style={style.image_holder}>
          {random_data.map((x)=>{return(
                              <Pressable key={x.idMeal} onPress={()=>{navigation.navigate('Food_details_panel', {x:x})}}>
                                        <Image style={style.image_style} source={{uri:`${x.strMealThumb}`}} />
                              </Pressable>
                    )})}
      </View>
      <View style={style.buttons}>
          <Pressable onPress={()=>setrandom([])}>
                    <Image source={leftarrow} style={style.leftarrow_style}></Image>
          </Pressable>
      </View>
    
      {random_data.map((x)=>{return(
                              <View key={x.idMeal} style={{paddingLeft:10,paddingRight:10,paddingTop:5}}>
                                        <View style={style.displayname_and_category}>
                                                  <Text style={style.food_name}>{x.strMeal}</Text>
                                                  <View style={style.horizontal_flex}>
                                                            <Text style={{marginTop:5}}>Category</Text><Text style={style.category_type_style}>{x.strCategory}</Text>
                                                  </View> 
                                        </View>
                                        <View style={style.horizontal_flex}>
                                                            <Text style={{marginTop:5}}>Area </Text><Text style={style.Area_type_style}>{x.strArea}</Text>
                                                  </View>
                                        
                              </View>
                    )})}
          
      
    </View>
  )
}

const style=StyleSheet.create({
          heading:{fontSize:20,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1,padding:10,marginTop:10},
          food_name:{fontSize:18,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1},
       image_style:{width:'95%',height:'100%',borderTopLeftRadius:30,borderTopRightRadius:30,marginLeft:10},
       image_holder:{position:'relative',width:'100%',height:'60%'},
       buttons:{position:'absolute',right:0,display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:50,height:'100%',shadowColor:'purple',shadowOffset:{width:0,height:10},shadowRadius:20,shadowOpacity:0.8},
       leftarrow_style:{width:50,height:50},
       Popular_food_style:{width:'100%',height:300},
       displayname_and_category:{ width:'100%',height:'auto',justifyContent:'space-between',alignItems:'center',flexDirection:'row'},
       horizontal_flex:{width:'auto',display:'flex',flexDirection:'row'},
       category_type_style:{backgroundColor:'green',color:'white',fontSize:20,borderRadius:10,padding:5},
       Area_type_style:{backgroundColor:'red',color:'white',fontSize:14,borderRadius:30,padding:5},
});