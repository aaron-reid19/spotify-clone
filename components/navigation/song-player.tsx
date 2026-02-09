import { Image, StyleSheet, Text, View } from 'react-native';

const deviceIcon = require('@/assets/images/device-icon.png');
const playIcon = require('@/assets/images/play-icon.png');
const albumCover = require('@/assets/images/back-to-friends-sombr.png');

const SongPlayer = () => {
    return (
        <View style={styles.container}>

            {/*Album Art*/}
            <Image 
                source={albumCover} 
                style={styles.albumArt}
            />
           
            {/*Artist Details*/}
            <View style={styles.songInfo}>
                <Text style={styles.songTitle} numberOfLines={1}>
                    back to friends
                </Text>
                <Text style={styles.artistName} numberOfLines={1}>
                    sombr
                </Text>
            </View>

            {/*Icons*/}
            <View style={styles.controls}>
                <Image source={deviceIcon} style={styles.deviceIcon} />
                <Image source={playIcon} style={styles.playIcon} />
            </View>

        </View>
    );
};

export default SongPlayer;

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        height: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },

    albumArt: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 12,
    },

    songInfo: {
        flex: 1,
        justifyContent: 'center',
    },

    songTitle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },

    artistName: {
        color: '#b3b3b3',
        fontSize: 12,
        marginTop: 2,
    },

    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    deviceIcon: {
        width: 20,
        height: 20,
        tintColor: '#ffffff',
        marginRight: 16,
    },

    playIcon: {
        width: 32,
        height: 32,
        tintColor: '#ffffff',
    },
});
