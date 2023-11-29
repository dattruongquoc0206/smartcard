import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, TextInput, StyleSheet, View, FlatList, Text } from "react-native";
import { color } from "react-native-reanimated";
import BottomTab from "./component/BottomTab";

var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height

// const Item = ({title}) =>{
//     return(
//       <View style = {styles.name_ctn} >
//         <Text style = {styles.name_text}>{title}</Text>
//       </View>
//     )
// }
// const renderItem = ({item}) =>{
//   return(
//   <View>
//     <Text>{item.name}</Text>
//   </View>
//   )
// }

const Search = () =>{

console.log(search)
const [exam, setExam] = useState([
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
              user_name: "linh"
            },
            {
              id: "4",
              name:"lession 3",
              count: 32,
              user_name: "son"
            },
            {
              id: "5",
              name:"lession 3",
              count: 32,
              user_name: "son"
            },
            {
              id: "6",
              name:"lession 3",
              count: 32,
              user_name: "son"
            },
            {
              id: "7",
              name:"lessionnn",
              count: 32,
              user_name: "son"
            },
          ])
const [search, setSearch] = useState([...exam])
    return(
    <SafeAreaView style = {styles.main} >


    <SafeAreaView>
            <View style = {styles.text_ip}>
            <TextInput placeholder="Search" placeholderTextColor={'white'} style = {{color: 'white'} }
            onChangeText = {(search_string) =>{
              var temp = [...exam]
              setSearch(temp)
              setSearch(exam.filter((exam) =>{
                return exam.name.toString().includes(search_string.toLocaleLowerCase()) ||
                exam.user_name.toString().includes(search_string.toLocaleLowerCase())
              }))
            }}
            
            /> 
            </View>
    </SafeAreaView>
    <View>
      {/* <Text>hoc phan</Text>
      <TouchableOpacity >
        <Text>see all</Text>
      </TouchableOpacity> */}
    
    </View>
    <SafeAreaView style = {styles.search_ctn}>
    <ScrollView>
    {search.map((search,index) => {
            return(
              <SafeAreaView style = {styles.lession} key={search.id}>
                <SafeAreaView style = {styles.acm_name_text}>
                  <View style = {styles.name_ctn}>
                  <Text style={{fontSize:20, fontWeight:"bold", marginBottom: 3, color:"#FFFFFF"}} >{search.name}</Text>
                  </View>
                  <View style = {styles.term_ctn}>
                  <Text style={{color:"#2E3856", fontSize:10, alignSelf:"center"}}>{search.count + " thuat ngu"}</Text>
                  </View>
                </SafeAreaView>
                <Text style = {{top: 55, left:10, fontSize: 15 ,color: "#6384B0"}} >{search.user_name}</Text>
              </SafeAreaView>
            )
          })}
    </ScrollView>

    </SafeAreaView>

      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  main:{
    width: widthfull,
    height:heightfull,
    backgroundColor: "#0A092D"
  },
    text_ip: {
        borderColor: "#FFFFFF",
        border: 3,
        with: 200,
        height:40,
        backgroundColor:"#2E3856",
        marginTop:20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius:10,
    },
    name_ctn:{
      width: 150,
      height:30,
      marginTop:20,
      marginBottom:20
    },
    term_ctn:{
      width:80,
      height:18,
      backgroundColor:"white",
      borderRadius:20,
    },
    name_text:{
      color: 'white'
    },
    acm_name_text:{
      left:10,
      width: 240,
      height:50,
      backgroundColor:"",
      flexDirection:"column",
      justifyContent:"space-between"
    },   
    lession:{
      height: 160,
      width: 360,
      backgroundColor: "#2E3856",
      borderRadius: 10,
      marginTop:10,
      marginBottom:10
    },
    search_ctn:{
      width: widthfull,
      height:heightfull,
      flexDirection:"column",
      alignItems:"center"
    }
})
export default Search