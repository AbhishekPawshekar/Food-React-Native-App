import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

export default function Categorys_panel({data,navigation}) {
  return (
    <View style={style.category_panel_style}>
          <Text style={style.heading}>Eat what makes you happy</Text>
          <ScrollView horizontal={true} style={style.scroll_style}>
                    {data.map((x)=>{
                              return(
                                        <Pressable key={x.idCategory} style={{marginLeft:20}}  onPress={()=>{navigation.navigate('Food_item_by_category', {x:x})}}>
                                                  <Image source={{uri:`${x.strCategoryThumb}`}} style={style.image_rounded}></Image>
                                                  <Text style={style.category_title}>{x.strCategory}</Text>
                                        </Pressable>
                              )
                    })}
          </ScrollView>
    </View>
  )
}
const style=StyleSheet.create({
          category_panel_style:{width:'100%',height:150},
          heading:{fontSize:20,textShadowColor:'black',textShadowOffset:{width:0,height:1},textShadowRadius:1,padding:10},
          scroll_style:{width:'100%',height:'100%',marginTop:10,display:'flex'},
          image_rounded:{width:80,height:80,borderRadius:40},
          category_title:{textAlign:'center'}
});