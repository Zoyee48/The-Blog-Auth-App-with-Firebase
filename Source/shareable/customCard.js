import React from 'react'
import
{ StyleSheet, View } from 'react-native';

const AuthCard = ( props ) => {

    return (<View style={
        styles.authCardStyle
    }> {
        props.children
    } </View>)

}
const PostCard = ( props ) => {

    return (<View style={
        styles.postCardStyle
    }> {
        props.children
    } </View>)

}

const CommentCard = ( props ) => {

    return (<View style={
        styles.commentCardStyle
    }> {
        props.children
    } </View>)

}
const NotificationCard = ( props ) => {

    return (<View style={
        styles.notificationCardStyle
    }> {
        props.children
    } </View>)

}

const styles = StyleSheet.create( {

    authCardStyle: {

        marginLeft: 20,
        marginRight: 20,
        borderWidth: 5,
        borderColor: "black"

    },
    postCardStyle: {

        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        backgroundColor: "#5377a0",
        marginBottom: 20



    },
    commentCardStyle: {

        borderBottomColor: "black",
        borderWidth: 1,
        left: 40,
        width: 400

    },
    notificationCardStyle: {

        borderBottomColor: "#445588",
        borderWidth: 1,
        width: 360,
        marginHorizontal: 30



    }
} )

export
{

    AuthCard,
    PostCard,
    CommentCard,
    NotificationCard

}
