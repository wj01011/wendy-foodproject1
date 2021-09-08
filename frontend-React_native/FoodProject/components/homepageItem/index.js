import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const HomepageItem = (props) => {
    return (
        <View style={styles.homepageContainer}>
            <ImageBackground
                source={require('../../assets/home_image.jpg')}
                style={styles.image} 
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>Find Local Restaurants Near You </Text>
            </View>
        </View>
    );
};

export default HomepageItem;