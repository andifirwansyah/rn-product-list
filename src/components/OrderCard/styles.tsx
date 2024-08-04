import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '@themes';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.05,
    marginTop: width * 0.04,
  },
  orderIdLabel: {
    fontFamily: Fonts.poppins[300],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
  },
  orderId: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
    marginTop: width * 0.015,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
    marginVertical: width * 0.05,
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
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: width * 0.02,
  },
  editButton: {
    width: width * 0.34,
    height: width * 0.102,
    backgroundColor: Colors.SECONDARY,
    borderWidth: 1.2,
    borderColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.014,
  },
  editButtonTitle: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.WHITE,
  },
  detailButton: {
    width: width * 0.34,
    height: width * 0.102,
    backgroundColor: Colors.WHITE,
    borderWidth: 1.2,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.014,
  },
  detailButtonTitle: {
    fontFamily: Fonts.poppins[500],
    fontSize: RFValue(13),
    color: Colors.PRIMARY,
  },
  deleteButton: {
    width: width * 0.11,
    height: width * 0.105,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonIcon: {
    fontSize: RFValue(23),
    color: Colors.DANGER,
  },

  modal: {
    margin: 0,
    padding: 0,
  },
  modalSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.06,
  },
  modalBody: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06,
    borderRadius: width * 0.02,
  },
  modalTitle: {
    fontFamily: Fonts.poppins[400],
    fontSize: RFValue(13),
    color: Colors.SECONDARY,
    textAlign: 'center',
  },
  modalDescription: {
    marginVertical: width * 0.04,
    textAlign: 'center',
    lineHeight: width * 0.06,
  },
  modalDeleteButton: {
    height: width * 0.1,
    borderWidth: 1,
    borderColor: Colors.DANGER,
    borderRadius: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDeleteButtonTitle: {
    fontFamily: Fonts.poppins[400],
    fontSize: RFValue(12),
    color: Colors.DANGER,
  },
  modalBackButton: {
    height: width * 0.1,
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    backgroundColor: Colors.SECONDARY,
    borderRadius: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.035,
  },
  modalBackButtonTitle: {
    fontFamily: Fonts.poppins[400],
    fontSize: RFValue(12),
    color: Colors.WHITE,
  },
});
