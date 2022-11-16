import { ToastAndroid } from 'react-native';

export const Toast = ({title}) => {
  ToastAndroid.show(
    title,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM
  );
  return null;
};
