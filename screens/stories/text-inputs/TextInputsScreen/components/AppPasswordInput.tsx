import React, {useState} from 'react';

import {Eye, EyeOff} from 'lucide-react-native';
import {MotiView} from 'moti';
import {Pressable, StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
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

export const AppPasswordInput: React.FC<Props> = ({
  label,
  valid = false,
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
  const [isSecure, setIsSecure] = useState(true);
  const shakeOnError = focused && error;

  const mainColor = theme === 'light' ? lightThemeColor : darkThemeColor;

  return (
    <View>
      {label && <Text style={{color: withAlphaHex(mainColor, 0.6)}}>{label}</Text>}
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
        secureTextEntry={isSecure}
        {...textInputProps}
      />
      <View>
        <View
          style={[
            styles.inputBottomLine,
            {
              backgroundColor: withAlphaHex(mainColor, error ? 0 : focused ? 1 : 0.5),
            },
          ]}
        />
        <MotiView
          from={{width: '0%'}}
          animate={{width: error ? '100%' : '0%'}}
          transition={{type: 'timing'}}
          style={[
            styles.inputBottomLine,
            styles.inputBottomLineOnError,
            {backgroundColor: errorColor},
          ]}
        />
      </View>
      <Pressable
        style={styles.eyeIconContainer}
        onPress={() => setIsSecure(!isSecure)}>
        {isSecure ? (
          <EyeOff
            size={20}
            color={error ? errorColor : withAlphaHex(mainColor, 0.6)}
          />
        ) : (
          <Eye
            size={20}
            color={error ? errorColor : withAlphaHex(mainColor, 0.6)}
          />
        )}
      </Pressable>
      {error && (
        <MotiView
          from={{opacity: 0}}
          animate={{opacity: 1}}>
          <MotiView
            from={{translateX: 0}}
            animate={{
              translateX: shakeOnError ? [2, -2, 1.5, -1.5, 1, -1, 0.5, -0.5, 0] : 0,
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
  input: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingRight: 30,
    fontSize: 18,
    lineHeight: 22.5,
  },
  inputBottomLine: {
    width: '100%',
    height: 1,
  },
  inputBottomLineOnError: {
    position: 'absolute',
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 25,
    right: 0,
  },
  errorText: {
    fontSize: 14,
  },
});
