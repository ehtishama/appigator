import {StyleSheet} from 'react-native';
import {colors} from '../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 16,
    color: colors.DARK_100,
  },
  form: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  field: {
    marginBottom: 10,
    borderColor: colors.LOGO_COLOR,
  },
  bottomText: {
    textAlign: 'center',
    marginVertical: 12,
  },
  link: {
    color: colors.LOGO_COLOR,
    fontWeight: '600',
    fontSize: 16,
  },
});
