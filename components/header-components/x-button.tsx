/*
x-button.tsx
Desc: Handles X Button Component Logic
Author: Joshua Couto
Created: 2026-02-08
*/

import { Pressable, StyleSheet, Text } from 'react-native';

// X Button component
interface XButtonProp {
  onPress: () => void;
}

// X Button Render Logic
function XButton ({ onPress } : XButtonProp) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>x</Text>
    </Pressable>
  );
}

// X Button Styling
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#333333',
    borderRadius: 100,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 16,
    fontWeight: '600',
  }
})

export default XButton;