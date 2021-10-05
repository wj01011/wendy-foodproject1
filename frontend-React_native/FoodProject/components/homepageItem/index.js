import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import styles from './styles';

const HomepageItem = (props) => {
    return (
        <View style={styles.homepageContainer}>
             <View style={styles.headerContainer}>
                <Text style={StyleSheet.headerTitle}>Foodios</Text>
                <Text style={styles.subtitle}>For Foodies That Love Locals</Text>
                <Image
                resizeMode="contain"
                source={require("../../assets/homepage_food.jpg")}
                style={styles.image} 
                />
            </View>
            
             <View style={styles.loginContainer}>
                <Text>Sign up or login to view all \n
                the local restaurants near you </Text>
                <View style={styles.signupbuttonStyle}>
                    <Button>SIGN UP</Button>
                </View>
                <View style={styles.loginbuttonStyle}>
                    <Button>LOGIN</Button>
                </View>
            </View>
        
        </View>
    );
};

export default HomepageItem;