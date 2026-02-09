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
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    alertButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});