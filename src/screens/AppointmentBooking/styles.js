import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white
  },
  tabContainer: {
    margin: 1 * vh,
    // marginLeft: 4 * vh,
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    bottom: 1 * vh
  },
  box: {
    paddingVertical: 2 * vh,
    borderBottomColor: 'transparent',
    borderWidth: 0.1 * vh,
    width: 12 * vh,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent'
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 3 * vh
  },
  separatorTime: {
    width: '33%',
    backgroundColor: colors.red,
    height: 0.1 * vh
  },
  separatorDetails: {
    width: '33%',
    backgroundColor: colors.darkBackground,
    height: 0.1 * vh
  },
  separatorFinish: {
    width: '33%',
    backgroundColor: colors.darkBackground,
    height: 0.1 * vh
  },
  datePickerContainer: {
    width: 20 * vh,
    paddingVertical: 1.5 * vh,
    backgroundColor: colors.red,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 1 * vh
  },
  text: {
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    // color: colors.white
  },
  datePicker: {
    // alignItems: 'center',
    alignSelf: 'center'
  },
  headingTime: {
    fontSize: 2 * vh,
    marginLeft: 2 * vh,
    marginTop: 2 * vh
  },
  timeContainer: {
    marginLeft: 2 * vh
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // padding: 2 * vh
    // marginVertical: 2 
    // marginTop: 2 * vh,
    // paddingHorizontal: 1 * vh
  },
  timeBox: {
    paddingVertical: 1.5 * vh,
    borderRadius: 1.5 * vh,
    backgroundColor: colors.grayText5,
    width: 20 * vh,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 1 * vh
    // marginHorizontal: 1 * vh
  },
  timeBoxSelected: {
    paddingVertical: 1.5 * vh,
    borderRadius: 1.5 * vh,
    backgroundColor: colors.red,
    width: 20 * vh,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 1 * vh
    // marginHorizontal: 1 * vh
  },
  timeText: {
    color: colors.black,
    fontFamily: fonts.CenturyGothic.CenturyGothic
  },
  btn: {
    backgroundColor: colors.red,
    marginTop: 4 * vh,
    width: '90%',
  },
  container: {
    elevation: 2 * vh,
    height: 20 * vh,
    // height: 10 * vh,
    borderRadius: 2 * vh,
    // backgroundColor: 'red',  
    backgroundColor: colors.white,
    marginTop: 2 * vh,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    marginHorizontal: 1.5 * vh,
    paddingHorizontal: 1.3 * vh,

  },
  doctorIcon: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vh,
    alignSelf: 'center',
    // bottom: 3 * vh
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  doctorNametext: {
    marginTop: 1 * vh,
    // color: colors.lightGray,
    fontFamily: fonts.CenturyGothic.CenturyGothicBold
  },
  text: {
    color: colors.lightGray,
    fontFamily: fonts.CenturyGothic.CenturyGothic
  },
  charges: {
    color: colors.red,
    // left: 2 * vh,
    // bottom: 4 * vh,
    fontSize: 3 * vh
    // fontFamily: fonts.CenturyGothic.CenturyGothic
  },
  doctorName: {
    alignSelf: "center",
    color: colors.red,
    // left: 2 * vh,
    // bottom: 4 * vh,
    // fontSize: 1.4 * vh
  },
  chargesContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    marginTop: 8 * vh
    // position: 'relative',
    // bottom: 0
  },
  lineBreak: {
    width: '90%',
    height: 1 * vh,
    // backgroundColor: colors.darkBackground,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  paymentContainer: {
    margin: 1 * vh,

  },
  paymentBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2 * vh
  },
  btnProfile: {
    width: 15 * vh,
    paddingVertical: 1 * vh,
    // bottom: 1 * vh,
    backgroundColor: colors.white,
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    right: 0.5 * vh
    // marginHorizontal: 0.2 * vh
    // marginBottom: -2 * vh
    // color: colors.red
    // fontSize: 1 * vh
  },
  btnPAYNOW: {
    width: 15 * vh,
    paddingVertical: 1 * vh,
    // bottom: 1 * vh,
    backgroundColor: colors.grayBackground,
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    right: 0.5 * vh,
    // color: colors.white
    // marginHorizontal: 0.2 * vh
    // marginBottom: -2 * vh
    // color: colors.red
    // fontSize: 1 * vh
  },
  btnConsult: {
    width: 15 * vh,
    paddingVertical: 1 * vh,
    // bottom: 1 * vh,
    // marginBottom: -2 * vh,
    backgroundColor: colors.white,
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    left: 0.5 * vh
    // color: colors.red
    // fontSize: 1 * vh
  },
  btnONARRIVAL: {
    width: 15 * vh,
    paddingVertical: 1 * vh,
    // bottom: 1 * vh,
    // marginBottom: -2 * vh,
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    left: 0.5 * vh
    // color: colors.red
    // fontSize: 1 * vh
  }
});

export default styles;
