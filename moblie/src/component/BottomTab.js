
import React from 'react';
import Home from '../Home';
import Search from '../Search';
import { NavigationContainer } from '@react-navigation/native';
import Create from '../Create';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Persional from '../Persional';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()


const TopTabs = () =>{
    return(
        <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle: styles.tabBarStyle} } >
            <Tab.Screen name = "Home" component={Home} options={{
                tabBarLabel:"",
                tabBarIcon: () =>{
                    return(
                    <FontAwesome
                    name = "home"
                    size = {24}
                    color = {"#2E3856"}
                    />
                    )
                }
                
            }} />
            <Tab.Screen name = "Search" component={Search} options ={{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <FontAwesome
                        name = "search"
                        size = {24}
                        color = "#2E3856"
                        />
                    )
                }
            }} />
            <Tab.Screen name = "Create" component={Create} options = {{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <MaterialCommunityIcons
                        name = "plus-circle-outline"
                        size = {24}
                        color = {"#2E3856"}
                        />
                    )
                },
            }} />
            <Tab.Screen name = "Persion" component={Persional} options = {{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <Ionicons
                        name = "person"
                        size = {24}
                        color = "#2E3856"
                        />
                    )
                }
            }} />
        </Tab.Navigator>
        </NavigationContainer>

    )
}
const styles = StyleSheet.create({
    tabBarStyle:{
        backgroundColor: "#0A092D"
    }
})
export default TopTabs