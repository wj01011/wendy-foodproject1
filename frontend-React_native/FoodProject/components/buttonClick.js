import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const buttonTemplate = (props) => {
    const [outputText, setOutputText] = useState('click Sign in')
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button title="Sign In" onPress = {()=>setOutputText('You have sign in!')}/>
        </View>
    );
}
export default buttonTemplate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});