import React from "react";
import { Dimensions } from "react-native";
import { View,Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height

const Achivement = () =>{
    const exam = [
        {
          id: "1",
          name:"lession 1",
          count: 32,
          user_name: "son"
        },
        {
          id: "2",
          name:"lession 2",
          count: 32,
          user_name: "son"
        },
        {
          id: "3",
          name:"lession 3",
          count: 32,
          user_name: "son"
        },
      ]
    return(
        <SafeAreaView style = {styles.scroll_ctn}>
        <ScrollView horizontal={true} style = {styles.scroll}>
          {exam.map((exam,index) => {
            return(
              <SafeAreaView style = {styles.lession} key={exam.id}>
                <SafeAreaView style = {styles.acm_name_text}>
                  <Text style={{fontSize:20, fontWeight:"bold", marginBottom: 3, color: "white",marginBottom:15}} >{exam.name}</Text>
                  <Text style={{width:60, borderRadius: 10, padding:3, backgroundColor:"white", fontSize:10,paddingLeft:5,color:"red"}}>{exam.count + " tems"}</Text>
                </SafeAreaView>
  
                <Text style = {{top: 55, left:10, fontSize: 15}} >{exam.user_name}</Text>
              </SafeAreaView>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    scroll_ctn:{
      height:150,
      width: widthfull,
      positions: "relative",
      flexDirection: "row",
      justifyContent:"space-around",
      left:10,
    },
    lession:{
      height: 133,
      width: 258,
      backgroundColor: "#2E3856",
      borderRadius: 10,
      marginLeft:10,
      marginRight:10,
    },
    acm_name_text:{
      left:10,
      width: 240,
      height:50,
      //backgroundColor:"red",
      flexDirection:"column",
      justifyContent:"space-between",
    }
  })

export default Achivement