import { View, Text, Image, StyleSheet, ScrollView,Dimensions, Pressable } from 'react-native'
import React from 'react'

export default function Carosal_panel({data,navigation}) {
  return (
          
    <View style={styles.carosal_panel_style}>
       <ScrollView style={styles.scroll_panel} horizontal={true}>
          {data.map((x)=>{
                    return(
                              <Pressable key={x.idCategory} style={styles.card} onPress={()=>{navigation.navigate('Food_item_by_category', {x:x})}}>
                                        <View style={{position:'relative'}}>
                                                  <Image source={{uri:`${x.strCategoryThumb}`}} style={styles.card_image}></Image>
                                        </View>
                                        <View style={styles.text_overlay}>
                                        <Text style={styles.category_name} >{x.strCategory}</Text>
                                        <Text style={styles.category_description} numberOfLines={2}>{x.strCategoryDescription}</Text>
                                        </View>
                              </Pressable>
                    )
          })}
          </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
          card:{width:Dimensions.get('window').width,height:'100%',padding:10},
          text_overlay:{position:'absolute',top:0,width:'90%',height:'90%',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'flex-start',gap:20,padding:10},
          card_image:{width:'100%',height:'100%',borderRadius:50,shadowColor:'grey',shadowRadius:2,shadowOpacity:0.8,shadowOffset:{width:0,height:2}},
          carosal_panel_style:{width:'100%',height:300},
          scroll_panel:{width:'100%',height:'100%',display:'flex',flexDirection:'row'},
          category_name:{color:'white',fontSize:60,textShadowColor:'black',textShadowRadius:12,shadowOpacity:0.8,textShadowOffset:{width:0,height:5}},
          category_description:{color:'white',fontSize:12,textShadowColor:'black',textShadowRadius:12,shadowOpacity:0.8,textShadowOffset:{width:0,height:5},paddingLeft:20},
});