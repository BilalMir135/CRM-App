import {StyleSheet} from 'react-native';

import colors from '../../../theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  label: {
    marginBottom: 5,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
