import {RegisterOptions} from 'react-hook-form';

import {FormValues} from './types';

type Rules = Omit<
  RegisterOptions<any, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

export const rules: Record<keyof FormValues, Rules> = {
  firstName: {
    required: 'First name field is required',
    validate: (value: string) => {
      if (!value.trim()) {
        return 'First name field should not be empty';
      } else if (value.length < 2) {
        return 'First name should be at least 2 characters long';
      }
    },
  },
  lastName: {
    required: 'Last name field is required',
    validate: (value: string) => {
      if (!value.trim()) {
        return 'Last name field should not be empty';
      } else if (value.length < 2) {
        return 'Last name should be at least 2 characters long';
      }
    },
  },
  email: {
    required: 'Email field is required',
    validate: (value: string) => {
      if (!value.trim()) {
        return 'Email field should not be empty';
      }
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email address',
    },
  },
  password: {
    required: 'Password field is required',
    validate: {
      trim: (value: string) => value.trim() !== '' || 'Password field should not be empty',
      noSpaces: (value: string) =>
        !/(?<=\S) +(?=\S)/.test(value) || 'Password should not contain spaces',
      minLength: (value: string) =>
        value.length >= 6 || 'Password should be at least 6 characters long',
      maxLength: (value: string) =>
        value.length <= 36 || 'Password should be at most 36 characters long',
      number: (value: string) => /\d/.test(value) || 'Password must contain at least one number',
      lowercase: (value: string) =>
        /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
      uppercase: (value: string) =>
        /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
      special: (value: string) =>
        /[^\w\s]/.test(value) || 'Password must contain at least one special character',
    },
  },
  confirmPassword: {
    required: 'Confirm password field is required',
    validate: (value: string, {password}: Record<string, string>) => {
      if (!value.trim()) {
        return 'Confirm password field should not be empty';
      } else if (value !== password) {
        return 'Passwords do not match';
      }
    },
  },
  bio: {
    validate: (value: string) => {
      if (value.length > 0 && value.length < 10) {
        return 'Bio should be at least 10 characters long';
      }
      if (value.length > 500) {
        return 'Bio should be at most 200 characters long';
      }
    },
  },
};
