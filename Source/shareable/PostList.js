import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { PostCard } from '../shareable/customCard'
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase'
import "firebase/firestore";

const PostList = (props) => {

    const posts = props.posts
    const nav = props.nav
    const currUser = props.currentUser



    const [iconName, setIconName] = useState("like1")
    const [likeCount, setLikeCount] = useState(posts.data.likes)
    const [] = useState([]);


    let dateObj = new Date(posts.data.created_at.seconds * 1000)

    dateObj = "" + dateObj.toUTCString()
    let postDate = dateObj.substr(0, dateObj.length - 13)
    return (


        <PostCard>
            <Text style={styles.authorNameStyle}>{posts.data.author}</Text>
            <Text style={styles.dateStyle}>{postDate}</Text>
            <Text style={styles.postBodyStyle}>{posts.data.body}</Text>
            <FontAwesome name="comment-o" size={27} color="black" style={styles.commentStyle}
                onPress={function () {
                    nav.navigation.navigate("IndivialPost", { posts, currUser, postDate });
                }} />

            <AntDesign name={iconName} size={24} color="black" style={styles.likeStyle}
                onPress={function () {
                    setIconName("heart")

                    firebase.firestore().collection("posts").doc(posts.id).collection("likers").doc(currUser.uid).set({
                        liker: currUser.displayName
                    })
                    firebase.firestore().collection("posts").doc(posts.id).update({
                        likes: likeCount + 1
                    })
                    firebase.firestore().collection("notifications").doc(posts.data.userId).collection("notification_details").add({
                        post: posts,
                        name: currUser.displayName,
                        body: "liked your post"
                    })
                    let a = likeCount + 1

                    setLikeCount(a)




                }} />

            <Text style={styles.likeTextStyle} >{likeCount} Likes</Text>
            <Text style={styles.commentTextStyle}>{posts.data.comments} Comments</Text>




        </PostCard>



    );


}
const styles = StyleSheet.create({
    iconStyle: {

        position: 'absolute',
        right: 10,
        top: 10,
    },
    commentStyle: {
        position: 'absolute',
        bottom: 1,
        right: 10,
        marginBottom: 0,

    },
    authorNameStyle: {
        fontFamily: 'serif',
        fontSize: 18,
        color: "black",
        marginBottom: 5,
    },
    dateStyle: {

        marginBottom: 5,
        color: "black",
        fontSize: 10,
        fontStyle: "italic"
    },
    postBodyStyle: {
        fontFamily: 'serif',
        marginBottom: 10,
        color: "white",
        fontSize: 15,

    },
    likeStyle: {
        marginBottom: 3,
        bottom: 0,
        width: 36,
        left: 0
    },

    likeTextStyle: {
        marginBottom: 3,
        fontSize: 14,
        fontFamily: 'serif',
        color: "black",

        width: 60,
        left: 30,
        position: "absolute",
        bottom: 0
    },
    commentTextStyle: {
        marginBottom: 3,
        fontSize: 14,
        fontFamily: 'serif',
        color: "black",

        width: 90,
        right: 36,
        position: "absolute",
        bottom: 0
    },


}
);

export default PostList