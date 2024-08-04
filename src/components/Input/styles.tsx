import {StyleSheet, Dimensions, TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '@themes';
const {width} = Dimensions.get('window');

export default StyleSheet.create<any>({
  container: {
    marginTop: width * 0.04,
  },
  label: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(11),
    color: Colors.SECONDARY,
    marginBottom: width * 0.015,
  },
  inputSection: (isEditable: boolean): ViewStyle => ({
    height: width * 0.11,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: width * 0.015,
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isEditable ? Colors.WHITE : Colors.LIGHT_GRAY,
  }),
  input: (isEditable: boolean): TextStyle => ({
    flex: 1,
    fontFamily: Fonts.poppins[300],
    color: isEditable ? Colors.SECONDARY : Colors.DARK_GRAY,
    fontSize: RFValue(12),
  }),
  required: {
    fontFamily: Fonts.poppins[300],
    fontSize: RFValue(12),
    color: Colors.DANGER,
  },
});
