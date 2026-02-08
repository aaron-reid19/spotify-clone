/*
filter-bar.tsx
Desc: Handles Filter Bar Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { useState } from 'react';
import { ScrollView } from 'react-native';
import FilterButton from './filter-button';



function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('Playlists');

  return (
    <ScrollView horizontal>
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
  );
}

export default FilterBar;