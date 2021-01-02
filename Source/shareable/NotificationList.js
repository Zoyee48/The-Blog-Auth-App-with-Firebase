import React , { useState, useEffect }  from 'react'
import {View,Button,Flatlist,Text,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NotificationCard} from '../shareable/customCard'
import { FontAwesome } from '@expo/vector-icons';



const NotificationList=(props)=>{
    const notification=props.notificatiions
    const nav=props.nav
    const [iconName,setIconName]=useState("heart")
    const [statement ,setStatement]=useState("liked your post")

    const checkNotificationStatus=()=>{

        if(notification.data.body[0]==="c" || notification.data.body[0]==="r" ){
        setIconName("comments")
        setStatement("commented on your post")
        }
        
    }
    
    
    useEffect(()=>{
        checkNotificationStatus()
    },[])
    return(
        <View>  
            <NotificationCard>
            <Text style={{width:60}}>  </Text>
            <FontAwesome name={iconName} size={20} color="black"  />
                <Text style={styles.commenter}>{notification.data.name} </Text>
                <Text></Text>
                <Text style = {styles.stateMentStyle}>{notification.data.body} </Text>
            </NotificationCard>
        </View>
       
    )
}
const styles= StyleSheet.create({

    stateMentStyle:{
        fontSize:15,
        marginTop:20,
        left:150,
        fontFamily:'serif',
        color:"black",
        position:"absolute"
    },
    iconStyle:{
        
        width:30,
        position:"absolute",
        
    },
    commenter:{
        fontSize:18,
        marginTop:16,
        left:27,
        fontFamily:'serif',
        color:"black" ,
        position:"absolute",
        fontWeight: 'bold'
    }

})
export default NotificationList