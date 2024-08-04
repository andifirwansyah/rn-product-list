import {StyleSheet, Dimensions, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '@themes';
const {width, height} = Dimensions.get('window');

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
  inputSection: {
    height: width * 0.11,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: width * 0.015,
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  placeholder: (isSelected: boolean): TextStyle => ({
    fontFamily: Fonts.poppins[300],
    color: isSelected ? Colors.SECONDARY : Colors.GRAY_SCALE,
    fontSize: RFValue(12),
  }),
  inputIcon: {
    color: Colors.GRAY_SCALE,
    fontSize: RFValue(16),
  },
  input: {
    flex: 1,
    fontFamily: Fonts.poppins[300],
    color: Colors.SECONDARY,
    fontSize: RFValue(12),
  },
  required: {
    fontFamily: Fonts.poppins[300],
    fontSize: RFValue(12),
    color: Colors.DANGER,
  },
  modal: {
    margin: 0,
    padding: 0,
  },
  modalSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalBody: {
    width: '100%',
    height: height / 1.5,
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.02,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
    marginBottom: width * 0.02,
  },
  modalList: {
    paddingHorizontal: width * 0.06,
  },
  modalTitle: {
    fontFamily: Fonts.poppins[400],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
    textAlign: 'center',
  },
  modalCloseIcon: {
    fontSize: RFValue(18),
    color: Colors.SECONDARY,
  },
  product: {
    marginVertical: width * 0.03,
  },
  productName: {
    fontFamily: Fonts.poppins[300],
    fontSize: RFValue(12),
    color: Colors.SECONDARY,
  },
});
