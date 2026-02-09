import {Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const alertButton = () => {
    const handleAlertPress = () => {
        Alert.alert('Alert Button pressed');
    };

    return (
        <TouchableOpacity
            style={styles.alertButton}
            onPress={handleAlertPress}
        >
            <Text style={StyleSheet.alertButtonText}>Alert</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    alertButton: {
        backgroundColor: '#1DB954',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        margin: 20,
    },
    alertButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default alertButton;