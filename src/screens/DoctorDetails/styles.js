import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    elevation: 2 * vh,
    height: 24 * vh,
    // height: 10 * vh,
    borderRadius: 2 * vh,
    // backgroundColor: 'red',  
    backgroundColor: colors.white,
    marginTop: 4 * vh,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    marginHorizontal: 1.5 * vh,
    paddingHorizontal: 1.3 * vh,
    // margin: 2 * vh
    // marginVertical: 2 * vh
    // paddingBottom: 10 * vh
    // marginTop: 2 * vh
  },
  doctorIcon: {
    resizeMode: 'contain',
    height: 10 * vh,
    width: 10 * vh,
    alignSelf: 'center',
    bottom: 4.5 * vh
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    bottom: 3 * vh,
    marginBottom: 1 * vh
  },
  text: {
    color: colors.lightGray,
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    fontSize: 1.8 * vh
  },
  charges: {
    color: colors.red,
    // left: 2 * vh,
    // bottom: 4 * vh,
    fontSize: 1.4 * vh
    // fontFamily: fonts.CenturyGothic.CenturyGothic
  },
  doctorName: {
    alignSelf: "center",
    // left: 2 * vh,
    // bottom: 4 * vh,
    fontSize: 1.8 * vh
  },
  qualification: {
    alignSelf: 'center',
    color: colors.grayText1,
    bottom: 3 * vh,
    fontSize: 1.3 * vh
  },
  speciality: {
    alignSelf: 'center',
    bottom: 3 * vh,
    fontSize: 1.3 * vh
  },
  btnContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end'
    // flexDirection: 'row',

    // alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: 1 * vh
    // margin: 1 * vh
    // backgroundColor: 'gray',
    // width: '80%'
    // width: '40%'
    // marginHorizontal: 0.5 * vh
  },
  btnProfile: {
    width: 20 * vw,
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
  btnConsult: {
    // width: 20 * vw,
    paddingVertical: 0.8 * vh,
    // fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    bottom: 5 * vh,
    // marginBottom: -2 * vh,
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    // fontFamily: fonts.CenturyGothic.CenturyGothicBold
    // left: 0.5 * vh
    // color: colors.red
    // fontSize: 1 * vh
  },
  aboutContainer: {
    margin: 2 * vh
  },
  aboutHeading: {
    fontSize: 2 * vh
  },
  aboutText: {
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    marginTop: 1 * vh
  },
  separator: {
    height: 0.1 * vh,
    backgroundColor: colors.darkBackground,
    width: '90%',
    alignSelf: 'center'
  },
  locationTextTopBorder: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  topBorder: {
    height: 0.1 * vh,
    width: '57%',
    backgroundColor: colors.darkBackground,
    left: 1 * vh,
    marginTop: 1.5 * vh,
    // borderRadius: 2 * vh
  },
  locationText: {
    marginTop: 1 * vh
  },
  iconDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 1 * vh
  },
  calendar: {
    height: 3 * vh,
    width: 3 * vh,
    resizeMode: 'contain',
    // backgroundColor: 'red'
  },
  dateText: {
    color: colors.lightGray,
    marginLeft: 2 * vh
  },
  locationContainerBorder: {
    borderWidth: 0.08 * vh,
    borderColor: colors.darkBackground,
    paddingVertical: 4 * vh,
    borderTopColor: 'transparent',
    borderRadius: 1 * vh,
    bottom: 4 * vh,
    borderTopRightRadius: 1 * vh,
    borderTopLeftRadius: 0
    // borderTopEndRadius: 2 * vh,
    // borderBottomEndRadius: 2 * vh,
    // borderTopRightRadius: 2 * vh
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginLeft: 1 * vh,

    marginTop: 2 * vh
  },
  timeBox: {
    paddingVertical: 1.5 * vh,
    borderRadius: 1.5 * vh,
    backgroundColor: colors.grayText5,
    width: 12 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: "flex-start",
    marginHorizontal: 1 * vh,
    // right: 1 * vh
  },
  timeText: {
    color: colors.black,
    fontFamily: fonts.CenturyGothic.CenturyGothic
  },
  seeAllContainer: {
    marginLeft: 2 * vh,
    bottom: 4 * vh
  },
  seeAllText: {
    color: colors.red,
    fontSize: 2 * vh
  }
});

export default styles;
