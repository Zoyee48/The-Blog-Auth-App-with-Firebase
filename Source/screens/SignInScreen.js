import React,
{ useState } from "react";
import
{

    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import
{ Input, Button } from "react-native-elements";
import
{

    FontAwesome,
    Feather,
    AntDesign,
    Ionicons,
    Fontisto,
    Entypo

} from "@expo/vector-icons";
import
{ AuthContext } from "../provider/AuthProvider"
import
{ AuthCard } from '../shareable/customCard'

import * as firebase from 'firebase'
import
{ useScreens } from "react-native-screens";


const SignInScreenActivity = ( props ) => {

    const [Email, setEmail] = useState( "" );
    const [Password, setPassword] = useState( "" );
    return (<AuthContext.Consumer> {
        ( auth ) => (<View style={
            styles.viewStyle
        }>

            <AuthCard>


                <Text style={
                    styles.titleView
                }>Welcome to The Office!</Text>


                <Input leftIcon={
                        <Fontisto
                    name="email"size={24}
                    color="black"/>
                    }
                    placeholder="E-mail Address"
                    onChangeText={
                        function ( currentInput )
                        {

                            setEmail( currentInput );

                        }
                    }/>

                <Input placeholder="Password"
                    leftIcon={
                        <Feather
                    name="key"size={24}
                    color="black"/>
                    }
                    secureTextEntry={true}
                    onChangeText={
                        function ( currentInput )
                        {

                            setPassword( currentInput );

                        }
                    }/>

                <View style={
                    styles.buttonView
                }>
                    <Button color="#fc6a03"
                        icon={
                            <Entypo
                        name="login"size={24}
                        color='white'/>
                        }
                        title="  Sign In!"
                        buttonStyle={
                            styles.buttonView
                        }
                        onPress={
                            () => {

                                firebase.auth().signInWithEmailAndPassword( Email, Password ).then( ( usersCreds ) => {

                                    auth.setIsLoggedIn( true );
                                    auth.setCurrentUser( usersCreds.user )

                                } ).catch( ( error ) => {

                                    alert( error )

                                } )

                            }
                        }/>
                </View>
            <Button type="clear"
                icon={
                    <AntDesign
                name="user"size={24}
                color="black"/>
                }
                title="Don't Have An Account?"
                titleStyle={styles}
                onPress={
                    function ()
                    {

                        props.navigation.navigate( "SignUp" );

                    }
                }/>


        </AuthCard>


</View>)
    } </AuthContext.Consumer>);

};

const styles = StyleSheet.create( {

    viewStyle: {

        flex: 1,
        backgroundColor: "#C0C0C0",
        justifyContent: "center",
        borderWidth: 1

    },
    buttonView: {

        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#000066"

    },
    titleView: {



        color: "black",
        fontSize: 23,
        marginLeft: 60,
        marginVertical: 15,
        justifyContent: "center",
        fontFamily: 'sans-serif-medium'

    }





} );

export default SignInScreenActivity;
