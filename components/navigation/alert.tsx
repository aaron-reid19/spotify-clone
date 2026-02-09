import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AlertButton = () => {
    const handleAlertPress = () => {
        Alert.alert('Alert Button pressed');
    };

    return (
        <TouchableOpacity
            style={styles.alertButton}
            onPress={handleAlertPress}
        >
            <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
    );
};

export default AlertButton;

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