import React from 'react'
import { Header } from "react-native-elements";
import { AuthContext } from '../provider/AuthProvider';
import * as  firebase from 'firebase';


const ScreenHeader = ({ props }) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Header
          backgroundColor="#064994"

          leftComponent={{
            icon: "menu",
            color: "white",
            onPress: function () {
              props.navigation.toggleDrawer();
              console.log(props)
              console.log("okay")
            },
          }}

          centerComponent={{ text: "The Office", style: { color: "white" } }}

          rightComponent={{
            icon: "lock-outline",
            color: "white",
            onPress: function () {
              firebase.auth().signOut()
                .then(() => {
                  auth.setIsLoggedIn(false);
                  auth.setCurrentUser({});
                })
                .catch((error) => {
                  alert(error)
                })
            },
          }}
        />
      )}
    </AuthContext.Consumer>

  )
}


export default ScreenHeader;