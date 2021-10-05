import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HomepageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
        
    },
    headerContainer: {
        position: "absolute",
        alignItems: "center",
    },
    headerTitle: {
        width: "100%",
        height: 70,
    },
    subtitle: {
        fontSize: 20,
        color: '#5c5e62',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    loginContainer: {
        width: 100,
        height: 100,
        justifyContent: 'flex-end',
        marginBottom: 30,
        paddingTop: 30,
    },
   
    signupbuttonStyle: {
       // width: "100%",
      //  height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#fc5c65",
    },
    loginbuttonStyle: {
       // width: "100%",
       // height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#fc5c65",
    },
});

export default styles;