/*
filter-bar.tsx
Desc: Handles Filter Bar Component Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FilterButton from './filter-button';
import XButton from './x-button';

// Filter Bar Render Logic
function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('Playlists');

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <XButton onPress={() => console.log('X Button pressed')} />
        <FilterButton
          title="Playlists"
          isActive={activeFilter === "Playlists"}
          onPress={() => setActiveFilter("Playlists")}
        />
        <FilterButton
          title="By you"
          isActive={activeFilter === "By you"}
          onPress={() => setActiveFilter("By you")}
        />
        <FilterButton
          title="By Spotify"
          isActive={activeFilter === "By Spotify"}
          onPress={() => setActiveFilter("By Spotify")}
        />
        <FilterButton
          title="Downloaded"
          isActive={activeFilter === "Downloaded"}
          onPress={() => setActiveFilter("Downloaded")}
        />
      </ScrollView>
    </View>
  );
}

// Filter Bar Component Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  }
});

export default FilterBar;