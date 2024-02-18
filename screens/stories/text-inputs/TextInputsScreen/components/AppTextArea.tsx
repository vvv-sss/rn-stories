import React, {useState} from 'react';

import {MotiView} from 'moti';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import {withAlphaHex} from 'with-alpha-hex';

import {HookFormInput, HookFormInputProps} from '@components_global';

interface Props extends HookFormInputProps {
  label?: string;
  valid?: boolean;
  error?: string;
  theme?: 'light' | 'dark';
  lightThemeColor?: string;
  darkThemeColor?: string;
  errorColor?: string;
  inputStyles?: StyleProp<TextStyle>;
  handleFocus?: () => void;
}

export const AppTextArea: React.FC<Props> = ({
  label,
  valid,
  error,
  theme = 'light',
  lightThemeColor = '#000',
  darkThemeColor = '#fff',
  errorColor = '#F87171',
  inputStyles,
  handleFocus,
  handleBlur,
  ...textInputProps
}: Props) => {
  const [focused, setFocused] = useState(false);
  const shakeOnError = focused && error;

  const mainColor = theme === 'light' ? lightThemeColor : darkThemeColor;

  return (
    <View>
      {label && <Text style={{color: withAlphaHex(mainColor, 0.6)}}>{label}</Text>}
      <MotiView
        from={{borderColor: withAlphaHex(mainColor, 0.4)}}
        animate={{
          borderColor: withAlphaHex(mainColor, focused ? 0.8 : 0.4),
        }}
        style={styles.inputContainer}>
        <HookFormInput
          style={[styles.input, {color: mainColor}, inputStyles]}
          selectionColor={withAlphaHex(mainColor, 0.6)}
          onFocus={() => {
            handleFocus && handleFocus();
            setFocused(true);
          }}
          handleBlur={() => {
            handleBlur && handleBlur();
            setFocused(false);
          }}
          textAlignVertical="top"
          multiline
          {...textInputProps}
        />
      </MotiView>
      {error && (
        <MotiView
          from={{opacity: 0}}
          animate={{opacity: 1}}
          style={{marginTop: 6}}>
          <MotiView
            from={{translateX: 0}}
            animate={{
              translateX: focused && shakeOnError ? [2, -2, 1.5, -1.5, 1, -1, 0.5, -0.5, 0] : 0,
            }}
            transition={{duration: 50}}>
            <Text style={[styles.errorText, {color: errorColor}]}>{error}</Text>
          </MotiView>
        </MotiView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    height: 120,
    fontSize: 18,
  },
  errorText: {
    fontSize: 14,
  },
});
