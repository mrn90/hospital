import { StyleSheet } from 'react-native';
import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // width: 100 * vw,
    // backgroundColor: 'red',
    overflow: 'scroll',
    // paddingBottom: 30 * vh,
  },
  scrollViewContentContainer: {
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%'
  },
  mainView: {
    flex: 1,
    width: '100%',
    // backgroundColor: colors.white
  },
  scrollContainer: {
    // width: 100 * vw,
    marginBottom: 10 * vh
  },
  swiper: {
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center'
    // backgroundColor: 'red',
    // elevation: 2 * vh,
    // position: 'relative',
    // zIndex: 5 * vh,
    // marginBottom: 4 * vh
    // top: -50
    // padding: 10 * vh
  },
  dot: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    borderRadius: 2 * vh,
    // position: 'relative',
    // backgroundColor: 'red',
    top: 1.5 * vh,
    // bottom: -2 * vh

  },
  activeDot: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    borderRadius: 2 * vh,
    top: 1.5 * vh,
    // position: 'relative'
  },
  bannerContainer: {
    height: 26 * vh,
    width: '100%',
    shadowOpacity: 0.5 * vh,
    // borderRadius: 2 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowOffset: { width: 1, height: 1 },
    // marginBottom: 4 * vh
  },
  // banner: {
  //   // height: 25 * vh,
  //   // width: '100%',
  //   // backgroundColor: 'red'
  // },
  background: {
    alignSelf: 'center',
    backgroundColor: colors.darkBackground,
    width: '100%',
    paddingVertical: 7 * vh,
    borderRadius: 3 * vh,
    marginTop: 5 * vh
  },
  hexagon: {
    marginTop: -2 * vh,
    height: 20 * vh,
    width: 20 * vh,
    alignSelf: 'center',

  },
  text1: {
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    marginLeft: 3 * vh,
    fontSize: 2.5 * vh,
    color: colors.grayText6
  },
  text2: {
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    marginLeft: 3 * vh,
    fontSize: 3 * vh,
    color: colors.grayText6
  },
  contentContainer: {
    // flex: 0.5,
    width: '100%',
    // display: 'flex'
    // marginBottom: 10 * vh
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3 * vh,
    // backgroundColor: 'red',
    // marginTop: 2 * vh,
    // marginBottom: 2 * vh
  },
  search: {
    alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: '#EAECF0',
    borderColor: colors.lightGray,
    borderRadius: 1 * vh,
    paddingVertical: 1.2 * vh,
    width: '90%',
    paddingLeft: 2 * vh,
    // marginTop: 2 * vh,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    color: colors.black
  },
  iconContainer: {
    // height: 4 * vh,
    width: 5 * vh,
    paddingVertical: 1.1 * vh,
    backgroundColor: colors.darkBackground,
    // right: 4 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.9 * vh,
    position: 'relative',
    // marginTop: 2 * vh,
    right: 5.1 * vh
  },
  searchIcon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    // position: 'absolute',
    // marginTop: 2 * vh,
    // backgroundColor: 'red',
    // alignSelf: 'flex-end',
  },
  servicesHeading: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 1 * vh
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    right: 2 * vh
  },
  text3: {
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    marginLeft: 3 * vh,
    fontSize: 2.2 * vh,
    color: colors.black,
    // marginTop: 2 * vh
    // marginTop: 2 * vh
  },
  text4: {
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    // marginLeft: 3 * vh,
    fontSize: 2.2 * vh,
    color: colors.red,
  },
  rightArrow: {
    height: 2 * vh,
    width: 2 * vh,
    resizeMode: 'contain'
  },
  bestProductListContentContainer: {
    // alignContent: 'center'
  },
  services: {
    // marginLeft: 2 * vh,
    paddingBottom: 3 * vh,
    alignSelf: 'center'
    // backgroundColor: 'red',
    // alignItems: 'center'
    // padding: 2 * vh
    // margin: 2 * vh
  },
  doctorCard: {
    // height: 18 * vh,
    paddingVertical: 2 * vh,
    width: 22 * vh,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    marginLeft: 3 * vh,
    backgroundColor: colors.white,
    borderRadius: 2 * vh
    // backgroundColor: colors.white

  },
  doctorIcon: {
    height: 6 * vh,
    width: 6 * vh,
    resizeMode: 'center',
    alignSelf: 'center',
    top: -2.5 * vh
    // zIndex: 2 * vh,
    // position: 'absolute',
    // top: 2 * vh
  },
  onlineFavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 5.5 * vh,
    margin: 1 * vh
  },
  online: {
    backgroundColor: colors.green,
    height: 1.5 * vh,
    width: 1.5 * vh,
    borderRadius: 2 * vh
  },
  heart: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    resizeMode: 'contain'
  },
  doctorName: {
    alignSelf: "center",
    marginBottom: 2 * vh
  },
  qualification: {
    alignSelf: 'center',
    color: colors.grayText1,
  },
  speciality: {
    alignSelf: 'center'
  },
  orderBackground: {
    paddingVertical: 2.8 * vh,
    width: '90%',
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    alignSelf: "center",
    borderRadius: 2 * vh
  },
  dashedContainer: {
    paddingVertical: 2.5 * vh,
    width: '95%',
    borderColor: colors.red,
    borderRadius: 2 * vh,
    borderStyle: 'dashed',
    borderWidth: 0.3 * vh,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  quickOrder: {
    // marginLeft: 2 * vh,
    // color: colors.grayText
  },
  uploadPrescription: {
    // marginLeft: 2 * vh,
    color: colors.grayText1
  },
  orderBtn: {
    borderColor: colors.red,
    borderWidth: 0.2 * vh,
    borderRadius: 3 * vh,
    width: 15 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0.6 * vh,
    backgroundColor: colors.white,
    marginTop: 4 * vh,
    // marginLeft: 2 * vh
  },
  orderNow: {
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    fontSize: 1.5 * vh,
    color: colors.red
  },
  prescription: {
    height: 12.5 * vh,
    width: 12.5 * vh,
    resizeMode: 'contain'
  },
});

export default styles;
