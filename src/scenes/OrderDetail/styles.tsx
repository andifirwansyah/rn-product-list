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
  orderIdLabel: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
    marginTop: width * 0.04,
  },
  orderId: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
    marginTop: width * 0.017,
  },
  detailProductLabel: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(12),
    color: Colors.GRAY_SCALE,
    marginTop: width * 0.06,
  },
  rowSection: {
    marginTop: width * 0.01,
    paddingVertical: width * 0.04,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: width * 0.04,
  },
  rowLabel: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(12),
    color: Colors.DARK_GRAY,
  },
  rowValue: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(12),
    color: Colors.SECONDARY,
  },
  errorText: {
    fontFamily: Fonts.poppins[200],
    fontSize: RFValue(11),
    color: Colors.DANGER,
    textAlign: 'center',
    marginTop: width * 0.04,
  },
  loadingIndicator: {
    marginTop: width * 0.04,
  },
});
