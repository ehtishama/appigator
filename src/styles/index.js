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
  border_bottom: {
    borderBottomColor: colors.LOGO_COLOR,
    borderBottomWidth: 4,
  },
  subTitle: {
    fontSize: 20,
    color: colors.BLACK,
  },
  centerXY: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    padding: 8,
  },
});

export {default as formStyles} from './formStyles';
