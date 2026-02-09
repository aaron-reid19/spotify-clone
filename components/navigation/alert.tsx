import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Alert Button 

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

// Styles 
const styles = StyleSheet.create({
    alertButton: {
        backgroundColor: '#1DB954',
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 8,
    },
    alertButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});