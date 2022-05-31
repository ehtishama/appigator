import {colors} from '../config/colors';
import {StyleSheet} from 'react-native';

export const defaultStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  textLight: {
    color: colors.WHITE,
  },
  mx_sm: {
    marginHorizontal: 8,
  },
  my_sm: {
    marginVertical: 8,
  },
  border_bottom: {
    borderBottomColor: colors.LOGO_COLOR,
    borderBottomWidth: 4,
  },
  title: {
    fontSize: 24,
    color: colors.BLACK,
    fontWeight: '700',
    paddingVertical: 5,
  },
  subTitle: {
    fontSize: 20,
    color: colors.BLACK,
  },
  textLink: {
    color: colors.BLACK,
    textDecorationLine: 'underline',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  centerXY: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    padding: 8,
  },
  w_100: {
    width: '100%',
  },
  bg_success: {
    backgroundColor: colors.SUCCESS,
  },
  bg_danger: {
    backgroundColor: colors.DANGER,
  },
  bg_warning: {
    backgroundColor: colors.WARNING,
  },
});

export {default as formStyles} from './formStyles';
