import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  logoImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
  },
  form: {
    paddingTop: 20,
  },
  registerSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkBtn: {
    marginLeft: 10,
    color: colors.primary,
    fontSize: 16,
  },
  info: {
    fontSize: 17,
  },
});
