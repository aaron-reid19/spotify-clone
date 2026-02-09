import { Image, StyleSheet, Text, View } from 'react-native';

// Icons
const homeIcon = require('@/assets/images/home-icon.png');
const searchIcon = require('@/assets/images/search-icon.png');
const yourLibraryIcon = require('@/assets/images/your-library-icon.png');
const createIcon = require('@/assets/images/create-icon.png');

// Component Function 
const NavigationBar = () => {
    return (
        <View style={styles.container}>
            
            {/*Home Icon*/}
            <View style={styles.tab}>
                <Image source={homeIcon} style={styles.iconInactive} />
                <Text style={styles.label}>Home</Text>
            </View>

            {/*Search Icon*/}
            <View style={styles.tab}>
                <Image source={searchIcon} style={styles.iconInactive} />
                <Text style={styles.label}>Search</Text>
            </View>

             {/*Your Library Icon*/}
            <View style={styles.tab}>
                <Image source={yourLibraryIcon} style={styles.iconActive} />
                <Text style={styles.labelActive}>Your Library</Text>
            </View>

             {/*Create Icon*/}
            <View style={styles.tab}>
                <Image source={createIcon} style={styles.iconInactive} />
                <Text style={styles.label}>Create</Text>
            </View>

        </View>
    );
};

export default NavigationBar; 

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#282828',
    },

    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontSize: 10,
        color: '#b3b3b3',
        marginTop: 4,
    },

    labelActive: {
        fontSize: 10,
        color: '#ffffff',
        marginTop: 4,
    },

    iconActive: {
        width: 24,
        height: 24,
        tintColor: '#ffffff',
    },

    iconInactive: {
        width: 24,
        height: 24,
        tintColor: '#b3b3b3',
    }
    
});

