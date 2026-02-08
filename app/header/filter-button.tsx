/*
filter-button.tsx
Desc: Handles Filter Button Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import {Pressable, Text, StyleSheet} from 'react-native';

interface FilterButton {
  title: string;
  isActive: boolean;
  onPress = () => void;
}

function FilterButton({ title, isActive, onPress }) {
  return (
    <Pressable onPress={onPress}> {
      <Text style={isActive ? StyleSheet.active : StyleSheet.inactive}>
        {title}
      </Text>
    </Pressable>
  );
}