import React, {FC, PropsWithChildren} from 'react';

import {Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet} from 'react-native';

export const KeyboardAvoidingContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <Pressable
        style={styles.flex}
        onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
