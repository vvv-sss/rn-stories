import React, {createContext, FC, PropsWithChildren} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {FormValues} from './lib';
import {Alert} from 'react-native';
import {useRouter} from 'expo-router';

interface TextInputsScreenContextValue {
  handleArrowLeftPress: () => void;
  handleSubmitPress: () => void;
}

export const TextInputsScreenContext = createContext<TextInputsScreenContextValue>(
  {} as TextInputsScreenContextValue,
);

const TextInputsScreenProvider: FC<PropsWithChildren> = ({children}) => {
  /*---------------------------------------------*
   * ⚛️ State, data, refs, variables, hooks etc.
   *---------------------------------------------*/
  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      bio: '',
    },
    mode: 'onChange',
  });

  const router = useRouter();

  /*---------------------------------------------*
   * ⚡️ Effects
   *---------------------------------------------*/

  /*---------------------------------------------*
   * 🔄 Callbacks
   *---------------------------------------------*/
  const handleArrowLeftPress = () => router.back();

  const submitCallback: SubmitHandler<FormValues> = data => {
    const {firstName, lastName, email, password, confirmPassword} = data;

    Alert.alert(
      'Form data submitted! 🚀',
      `
      First name: ${firstName}
      Last name: ${lastName}
      Email: ${email}
      Password: ${password}
      Confirm password: ${confirmPassword}
      Bio: ${data.bio}`,
      undefined,
      {
        userInterfaceStyle: 'dark',
      },
    );
  };

  const handleSubmitPress = methods.handleSubmit(submitCallback);

  /*---------------------------------------------*
   * 🌐 Context data
   *---------------------------------------------*/
  const value: TextInputsScreenContextValue = {
    handleArrowLeftPress,
    handleSubmitPress,
  };

  /*---------------------------------------------*
   * 🖼️ Render
   *---------------------------------------------*/
  return (
    <TextInputsScreenContext.Provider value={value}>
      <FormProvider {...methods}>{children}</FormProvider>
    </TextInputsScreenContext.Provider>
  );
};

export default TextInputsScreenProvider;
