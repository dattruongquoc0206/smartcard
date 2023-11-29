import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Alert } from "react-native/Libraries/Alert/Alert";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height


const Create = () =>{
    const [lessionArray, setLessionArray] = useState({

    })
    const [lessionName, setLessionName] = useState("")
    const [lession, setLession] = useState({
        name:"",
        id:"",
        means:"",
        vocabularies:""
    }
    )
    const [count,setCount] = useState(1)
    const [inputFlield, setInputField] = useState([1])
    const addTextField = () =>{
        setCount((count) => count + 1)
        setInputField([...inputFlield, count + 1])
    }
    const [vocabulary, setVocabulary] = useState("");
    const [vocabularies, setVocabularies] = useState({})
    const [mean, setMean] = useState("");
    const [means, setMeans] = useState({})
    const submit = () =>{
        var a = []
        console.log(a)
        a.push({
            name:lessionName})
         for(let i = 1; i <= inputFlield.length; i++){

            if(lession.vocabularies[i] == undefined && lession.means[i] == undefined){
                a.push({
                    id:i,
                    vocabularies: "",
                    means: ""
                })
            }else if(lession.vocabularies[i] == undefined && lession.means[i] != undefined){
                a.push({
                    id:i,
                    vocabularies: "",
                    means: lession.means[i].mean
                })
            }else if(lession.vocabularies[i] !== undefined && lession.means[i] == undefined){
                a.push({
                    id:i,
                    vocabularies: lession.vocabularies[i].voca,
                    means:""
                })
            }else
            a.push({
                id:i,
                vocabularies: lession.vocabularies[i].voca,
                means: lession.means[i].mean
            })
        }

        setLessionArray(a)
  
    }
    console.log(lessionArray)
    // console.log(lession.vocabularies[1].voca)
    //     console.log(lession.means[1].mean)
    //  console.log(vocabularies);
    //   console.log(means)
    // console.log(inputFlield)
    return(
        <SafeAreaView style = {styles.main} >
            <SafeAreaView style = {styles.lession_text_ctn} >
            <TouchableOpacity onPress={()=>submit()}>
                <Text style = {{ alignSelf:"center" }} >
                    Done
                </Text>
            </TouchableOpacity>
            <SafeAreaView>
            <Text style = {{ fontSize: 24, fontWeight: "bold", top:10}} >Create Lesstion</Text>
            </SafeAreaView>

            <TouchableOpacity onPress={()=>submit()}>
                <Text style = {{ alignSelf:"center" }} >
                    Done
                </Text>
            </TouchableOpacity>
            </SafeAreaView>

            {/* <TextInput
                placeholder="text some thing"
            /> */}
            <SafeAreaView style={{color:"white", top:10}}>
            <TextInput 
                placeholder="Name of lession"
                placeholderTextColor={"white"}
                onChangeText={newtext => setLessionName(newtext)}
                style = {{ color: "green !important", margin:20}} />
            </SafeAreaView>


            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: "flex-end",}} behavior="padding" enabled   keyboardVerticalOffset={100} >
                <ScrollView>
                {inputFlield.map((inputFlield) =>{
                    return(
                        <SafeAreaView style = {styles.text_input_ctn} key = {inputFlield} >
                            {/* {console.log(inputFlield)} */}
                                <TextInput
                                    name = "vocabulary"
                                    autoFocus={true}
                                    onChangeText={e => {
                                        setVocabulary({...vocabulary, voca: e});
                                        vocabularies[inputFlield] = {...vocabulary, voca: e};
                                        setVocabularies(vocabularies)
                                        setLession({...lession,vocabularies})
                                    }}
                                    style = {styles.text_ip_vocabulary}
                                />
                                <Text style = {styles.text_name} >THUAT NGU</Text>
                                <TextInput
                                    name = "mean"
                                    onChangeText={e => {
                                        setMean({...mean, mean: e});
                                        means[inputFlield] = {...mean, mean: e};
                                        setMeans(means)
                                        setLession({...lession,means})
                                    }}
                                    style = {styles.text_ip_vocabulary} />
                                <Text 
                                    style = {styles.text_name}>DINH NGHIA</Text>
                        </SafeAreaView>
                    )
                })}
                </ScrollView>
            <TouchableOpacity onPress={() => addTextField()} >
                <Ionicons
                    name = "md-add-circle-outline"
                    color= "white"
                    size = {50}
                    style = {{ alignSelf:"center"}}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    lession_text_ctn:{
        flexDirection: "row",
        width: widthfull,
        height: 50,
        justifyContent:"space-around",
    },
    main:{
        width: widthfull,
        height:heightfull,
        backgroundColor: "#0A092D"
      },
    text_ip: {
        with: 200,
        height:40,
        backgroundColor:"#2E3856",
        marginTop:20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius:10,
    },
    text_input_ctn: {
        position:"relative",
        width:353,
        height:150,
        alignSelf:"center",
        marginTop:10,
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius:10
    },
    text_ip_vocabulary:{
        height:40,
        backgroundColor:"",
        borderBottomWidth:1,
        borderBottomColor:"white",
        color:"#FFFFFF",
    },
    text_name:{
        color:"#9CBCD5"
    }

})
export default Create