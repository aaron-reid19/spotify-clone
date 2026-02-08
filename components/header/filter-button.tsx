/*
filter-button.tsx
Desc: Handles Filter Button Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { Pressable, StyleSheet, Text } from 'react-native';

// FilterButton component
interface FilterButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

// FilterButton changes color on press
function FilterButton({ title, isActive, onPress }: FilterButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={[isActive ? styles.active : styles.inactive, styles.text]}>
        {title}
      </Text>
    </Pressable>
  );
}

// FilterButton Styling
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
    backgroundColor: '#121212',
    borderRadius: 20,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 14,
    fontWeight: '600',
  }
});

export default FilterButton;