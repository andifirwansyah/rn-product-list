import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '@themes';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? width * 0.26 : width * 0.24,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingTop: Platform.OS === 'ios' ? width * 0.1 : width * 0.07,
  },
  leftSide: {
    flex: 0.5,
  },
  icon: {
    fontSize: RFValue(20),
    color: Colors.PRIMARY,
    marginTop: width * 0.002,
  },
  iconArrow: {
    fontSize: RFValue(18),
    color: Colors.SECONDARY,
    marginTop: width * 0.002,
  },
  centerSide: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.poppins[400],
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  rightSide: {
    flex: 0.5,
  },
});
