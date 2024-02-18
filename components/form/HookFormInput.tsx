import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

export interface HookFormInputProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  rules?: Object;
  handleBlur?: () => void;
  handleChangeText?: (text: string) => void;
}

export const HookFormInput: FC<HookFormInputProps> = ({
  control,
  name,
  rules,
  handleBlur,
  handleChangeText,
  ...inputProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          value={value}
          onBlur={() => {
            handleBlur && handleBlur();
            onBlur();
          }}
          onChangeText={text => {
            handleChangeText && handleChangeText(text);
            onChange(text);
          }}
          {...inputProps}
        />
      )}
    />
  );
};
