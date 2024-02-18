import React, {FC, useContext, useRef} from 'react';

import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFormContext} from 'react-hook-form';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {withAlphaHex} from 'with-alpha-hex';

import {AppInput, AppPasswordInput, AppTextArea} from './components';
import {FormValues} from './lib';
import {KeyboardAvoidingContainer} from './components/KeyboardAvoidingContainer';
import {rules} from './lib';
import {TextInputsScreenContext} from './_context';
import {useStatusBarStyle} from '@hooks_global';
import {ArrowLeft} from 'lucide-react-native';

const TextInputsScreenLayout: FC = () => {
  const {handleArrowLeftPress, handleSubmitPress} = useContext(TextInputsScreenContext);

  const {
    control,
    formState: {errors, dirtyFields},
  } = useFormContext<FormValues>();

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollYRef = useRef(0);

  useStatusBarStyle('light');

  const insets = useSafeAreaInsets();

  const appNames: (keyof FormValues)[] = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
    'bio',
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <KeyboardAvoidingContainer>
        <View style={styles.formContainer}>
          <ScrollView
            ref={scrollViewRef}
            scrollEventThrottle={100}
            onScroll={e => {
              scrollYRef.current = e.nativeEvent.contentOffset.y;
            }}
            contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.contentContainer}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleArrowLeftPress}>
                  <ArrowLeft
                    size={20}
                    color={withAlphaHex('#fff', 0.6)}
                  />
                </TouchableOpacity>
                <Text style={styles.submitText}>Enter the details below</Text>
              </View>
              <AppInput
                control={control}
                name={appNames[0]}
                rules={rules.firstName}
                label="First Name"
                valid={dirtyFields.firstName && !errors.firstName}
                error={errors.firstName?.message}
                theme="dark"
              />
              <AppInput
                control={control}
                name={appNames[1]}
                rules={rules.lastName}
                label="Last Name"
                valid={dirtyFields.lastName && !errors.lastName}
                error={errors.lastName?.message}
                theme="dark"
              />
              <AppInput
                control={control}
                name={appNames[2]}
                rules={rules.email}
                label="Email"
                valid={dirtyFields.email && !errors.email}
                error={errors.email?.message}
                theme="dark"
                autoCapitalize="none"
                inputMode="email"
              />
              <AppPasswordInput
                control={control}
                name={appNames[3]}
                rules={rules.password}
                label="Password"
                valid={dirtyFields.password && !errors.password}
                error={errors.password?.message}
                autoCapitalize="none"
                theme="dark"
                handleFocus={() => {
                  setTimeout(() => {
                    scrollViewRef.current?.scrollTo({
                      y: scrollYRef.current + 50,
                      animated: true,
                    });
                  }, 50);
                }}
              />
              <AppPasswordInput
                control={control}
                name={appNames[4]}
                rules={rules.confirmPassword}
                label="Confirm Password"
                valid={dirtyFields.confirmPassword && !errors.confirmPassword}
                error={errors.confirmPassword?.message}
                autoCapitalize="none"
                theme="dark"
                handleFocus={() => {
                  setTimeout(() => {
                    scrollViewRef.current?.scrollTo({
                      y: scrollYRef.current + 50,
                      animated: true,
                    });
                  }, 50);
                }}
              />
              <AppTextArea
                control={control}
                name={appNames[5]}
                rules={rules.bio}
                label="Short bio"
                valid={dirtyFields.bio && !errors.bio}
                error={errors.bio?.message}
                theme="dark"
                handleFocus={() => {
                  setTimeout(() => {
                    scrollViewRef.current?.scrollToEnd();
                  }, 100);
                }}
              />
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitPress}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#191919',
  },
  contentContainer: {
    margin: 20,
    gap: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginHorizontal: -20,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  formContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    marginBottom: 10,
  },
  contentContainerStyle: {
    gap: 20,
    paddingBottom: 20,
  },
  submitButton: {
    paddingVertical: 20,
    backgroundColor: withAlphaHex('#333', 0.5),
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 20,
    color: withAlphaHex('#fff', 0.6),
  },
});

export default TextInputsScreenLayout;
