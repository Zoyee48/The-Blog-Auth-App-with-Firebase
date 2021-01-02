import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import ImagePickerExample from '../shareable/ImageUpload'
import ScreenHeader from '../shareable/ScreenHeader'
import { AuthContext } from '../provider/AuthProvider'
import { PostCard } from '../shareable/customCard'

const ProfileScreenActivity = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={{ flex: 1 }}>
                    <ScreenHeader props={props} ></ScreenHeader>


                    <View style={{ justifyContent: "center", marginHorizontal: 125, marginVertical: 40 }}>
                        <ImagePickerExample props={props} />


                    </View>

                    <Text style={styles.profileInfoStyle} >Name: {auth.CurrentUser.displayName} </Text>

                    <PostCard>
                    <View style={{ backgroundColor: "#ffffff", height: 250, borderColor: "#003", borderWidth: 2 }}>

                            <Text style={styles.nameSyle}>{auth.CurrentUser.name} </Text>
                            <Text style={styles.profileInfoStyle}>ID: 170042048</Text>
                            <Text style={styles.profileInfoStyle}>Date of Birth: 19.10.1998</Text>
                            <Text style={styles.profileInfoStyle}>Works at: IUT</Text>
                            <Text style={styles.profileInfoStyle} >Address: Dhaka</Text>
                        </View>
                    </PostCard>

                    <Button
                        title="Delete Profile"
                        color="#000066"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />



                </View>
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        marginLeft: 30,
        marginRight: 30,
        marginVertical: 15,
    },

    nameStyle: {
        fontFamily: "serif",
        fontSize: 25,
        color: "black",
        marginHorizontal: 60
    },
    profileInfoStyle: {
        fontFamily: "serif",
        fontSize: 20,
        color: "black",
        marginHorizontal: 30,
        marginVertical: 12
    }
}
);

export default ProfileScreenActivity