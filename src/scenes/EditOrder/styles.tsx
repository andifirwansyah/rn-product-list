import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '@themes';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
    marginVertical: width * 0.05,
  },
  detailProductLabel: {
    fontFamily: Fonts.poppins[300],
    fontSize: RFValue(12),
    color: Colors.GRAY_SCALE,
  },
  button: {
    width: width * 0.5,
    height: width * 0.105,
    backgroundColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.014,
    marginTop: width * 0.06,
    marginBottom: width * 0.02,
  },
  buttonTitle: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.WHITE,
  },
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: width * 0.1,
    marginBottom: width * 0.1,
  },
  backButton: {
    flex: 0.49,
    height: width * 0.12,
    backgroundColor: Colors.WHITE,
    borderWidth: 1.2,
    borderColor: Colors.BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.014,
  },
  backButtonTitle: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
  },
  saveButton: {
    flex: 0.49,
    height: width * 0.12,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1.2,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.014,
  },
  saveButtonTitle: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.WHITE,
  },
});
