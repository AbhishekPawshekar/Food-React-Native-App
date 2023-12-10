import { View, Text,StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
export default function Food_Details_panel({navigation,route}) {

const [mealdata,setmealdata]=useState([]);
useEffect(()=>{
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.x.idMeal}`).then(res=>res.json()).then(d=>setmealdata(d.meals))
},[mealdata]);
  return (
    <ScrollView style={{backgroundColor:'white'}}>
          <Image source={{uri:route.params.x.strMealThumb}} style={style.background_image_} />
          
          {mealdata.map((x)=>{
                    return(
                              <View key={x.idMeal}  style={style.container_design}>
                                        <Text style={style.category_name}>{route.params.x.strMeal}</Text>
                                        <View style={{display:'flex',width:'100%',justifyContent:'flex-end',height:'auto',flexDirection:'row',padding:10}}>
                                        <View style={style.horizontal_flex}>
                                                            <Text style={{marginTop:5,fontSize:15}}>Category</Text><Text style={style.category_type_style}>{x.strCategory}</Text>
                                                  </View> 

                                        </View>
                                        <Text style={style.instruction}>Instructions</Text>
                                        <Text style={style.instruction_details}>{x.strInstructions}</Text>
                                        <YoutubePlayer
                                        height={250}
                                        width={'100%'}
                                        play={true}
                                        videoId={x.strYoutube.substr(x.strYoutube.indexOf("?")+3)}
                                      
                                       
                                        />

                              </View>
                    )
          })}
</ScrollView>

  )
}
const style=StyleSheet.create({
          background_image_:{width:'100%',height:Dimensions.get('screen').height/3,zIndex:-1,position:'relative'},
          food_description:{width:'100%',height:'auto'},
          category_name:{color:'black',fontSize:60,padding:10,textShadowColor:'grey',textShadowRadius:12,shadowOpacity:0.8,textShadowOffset:{width:0,height:1}},
          category_description:{fontSize:12},
          container_design:{top:-Dimensions.get('screen').height/25,zIndex:1,borderRadius:50,borderWidth:2,borderColor:'white',backgroundColor:'white',padding:10},
          instruction:{fontSize:22},
          instruction_details:{fontSize:15,color:'grey'},
          horizontal_flex:{width:'auto',display:'flex',flexDirection:'row'},
       category_type_style:{backgroundColor:'green',color:'white',fontSize:20,borderRadius:10,padding:5},
});