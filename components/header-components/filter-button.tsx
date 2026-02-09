/*
filter-button.tsx
Desc: Handles Filter Button Component Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { Pressable, StyleSheet, Text } from 'react-native';

// Defining Filter Button Props
interface FilterButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

// Filter Button Render Logic | Style Change State onPress
function FilterButton({ title, isActive, onPress }: FilterButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={[isActive ? styles.active : styles.inactive, styles.text]}>
        {title}
      </Text>
    </Pressable>
  );
}

// Filter Button Styling
const styles = StyleSheet.create({
  active: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#1ED760',
    borderRadius: 20,
  },
  inactive: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#333333',
    borderRadius: 20,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 14,
    fontWeight: '600',
  }
});

export default FilterButton;