import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Carosal_panel from './Carosal_panel'
import Categorys_panel from './Categorys_panel';
import Popular_food from './Popular_food';
import Foot_Card_Area from './Foot_Card_Area';

export default function Main_Page({navigation}) {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res=>res.json()).then(d=>setData(d.categories));

  },[data]);

  const [random,setrandom]=useState([]);
useEffect(()=>{
  if(random.length<1){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res=>res.json()).then(d=>setrandom(d.meals));}
},[random])

  

 

  return (
    <ScrollView>
      <StatusBar backgroundColor={'red'}/>
      <Text></Text>
      <Header/>
      <Carosal_panel data={data}  navigation={navigation}/>
      <Categorys_panel data={data} navigation={navigation}/>
      <Popular_food random_data={random} setrandom={setrandom}  navigation={navigation}/>
      <Foot_Card_Area  area_name={"Chinese"}  navigation={navigation}/>
      <Foot_Card_Area  area_name={"Indian"}  navigation={navigation}/>
      <Foot_Card_Area  area_name={"Italian"}  navigation={navigation}/>
      
      
    </ScrollView>
  )
}