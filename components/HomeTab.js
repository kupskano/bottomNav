import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';


const Tab = createBottomTabNavigator();
const HomeTab = ({navigation}) => {
    return (
            <Tab.Navigator tabBarOptions={{
                showLabel: true,
                style: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow
                }
            }}>
           <>
           <Tab.Screen name="Login" component={LoginScreen} options={{
              tabBarIcon:({tintColor})=>(  
                    <Icon name="home"  color={tintColor} size={30}/>  
            )
            }} />
           </>
            <Tab.Screen name="Register" component={RegisterScreen} options={{

              tabBarIcon:({tintColor})=>(  
                    <Icon name="home" color={tintColor} size={30}/>  
            )  
            }}/>

             <Tab.Screen name="Setting" component={SettingScreen} options={{
              tabBarIcon:({tintColor})=>(  
                    <Icon name="cog" type="font-awesome" color={tintColor} size={30}/>  
            )  
            }}/>
            </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({
   shadow: {
       shadowColor: "#7F5DF0",
       shadowOffset: {
           width: 0,
           height: 10
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.5,
       elevation: 5
   }
})
