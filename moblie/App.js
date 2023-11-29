import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react";
import { View,Text, StyleSheet, SafeAreaView, ScrollView, Button, ActionSheetIOS } from "react-native";
import { Dimensions } from "react-native";
import BottomTab from "./src/component/BottomTab";
import CreateFolder from "./src/CreateFolder";
import Create from "./src/Create";
import Home from "./src/Home";
import Search from "./src/Search";
import Example from "./src/ActionSheet";
import DefaultExample from "./src/ActionSheet";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
const App = () =>{
  return(
     <View style = {styles.main}>
      {/* <Home/> */}

      <BottomTab/>
      {/* <CreateFolder/> */}
      {/* <Example/> */}
      {/* <Create/> */}
      {/* <Search/> */}
    </View>

  )
}
const styles = StyleSheet.create({
  main:{
    backgroundColor:"#0A092D",
    with: widthfull,
    height: heightfull,
  },

})


export default App