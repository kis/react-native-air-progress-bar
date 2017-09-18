import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import sizes from '../../constants/Sizes';

export default StyleSheet.create({
  bar: {
    marginTop: 20,
    height: 35
  },

  lineActive: {
    position: 'absolute',
    top: 17,
    borderWidth: 1,
    borderColor: '#9ed3c7'
  },

  line: {
    position: 'absolute',
    top: 17,
    borderWidth: 1,
    borderColor: '#eeeeee'
  }
});
