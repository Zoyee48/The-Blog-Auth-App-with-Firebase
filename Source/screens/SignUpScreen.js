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
import "firebase/firestore";


const SignUpScreenActivity = ( props ) => {

    const [Name, setName] = useState( "" );
    const [SID, setSID] = useState( "" );
    const [Email, setEmail] = useState( "" );
    const [Password, setPassword] = useState( "" );
    const [Address, setAddress] = useState( '' );
    const [Work, setWork] = useState( "" );
    const [dob, setdob] = useState( "" );
    return (<View style={
        styles.viewStyle
    }>

        <AuthCard>


            <Text style={
                styles.titleView
            }>Welcome to The Office!</Text>
            <Input leftIcon={
                    <Ionicons
                name="ios-person"size={24}
                color="black"/>
                }
                placeholder="Name"
                onChangeText={
                    function ( currentInput )
                    {

                        setName( currentInput );

                    }
                }/>

            <Input leftIcon={
                    <Ionicons
                name="ios-school"size={24}
                color="black"/>
                }
                placeholder="ID"
                onChangeText={
                    function ( currentInput )
                    {

                        setSID( currentInput );

                    }
                }/>

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
                        <AntDesign
                    name="user"size={24}
                    color='white'/>
                    }
                    title="  Sign Up!"
                    buttonStyle={
                        styles.buttonView
                    }
                    onPress={
                        () => {

                            if ( Name && SID && Email && Password )
                            {

                                firebase.auth().createUserWithEmailAndPassword( Email, Password ).then( ( userCreds ) => {



                                    userCreds.user.updateProfile( { displayName: Name } );
                                    firebase.firestore().collection( 'users' ).doc( userCreds.user.uid ).set( { name: Name, sid: SID, email: Email } ).then( () => {

                                        alert( userCreds.user.uid + "Account created successfully!" )
                                        props.navigation.navigate( "SignIn" )

                                    } ).catch( ( error ) => {

                                        alert( error )

                                    } );

                                } ).catch( ( error ) => {

                                    alert( error )

                                } )



                            }
                            else
                            {

                                alert( 'Files can not be empty' )

                            }

                        }
                    }/>
            </View>
        <Button type="clear"
            icon={
                <Entypo
            name="login"size={24}
            color="white"/>
            }

            title=" Already have an account"
            titleStyle={
                styles.themeColor
            }
            onPress={
                function ()
                {

                    props.navigation.navigate( "SignIn" );

                }
            }/>
    </AuthCard></View>);

};

const styles = StyleSheet.create( {

    viewStyle: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: "#C0C0C0"



    },
    buttonView: {

        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#000066",
        color: "black"

    },
    themeColor: {



        color: "black"

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

export default SignUpScreenActivity;
