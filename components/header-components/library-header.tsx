/*
library-header.tsx
Desc: Handles Library Header Component Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { Image, StyleSheet, Text, View } from 'react-native';

// Library Header Render Logic
function LibraryHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/profile.png')}
        style={styles.profilePic}
      />
      <Text style={styles.title}>Your Library</Text>
      <Image
        source={require('../../assets/images/search-icon.png')}
        style={styles.icon}
      />
      <Image
        source={require('../../assets/images/plus-icon.png')}
        style={styles.icon}
      />
    </View>
  );
}

// Library Header Styling
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 12,
  }
});