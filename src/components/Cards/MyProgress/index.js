import React from 'react';
import {View} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';
import {colors} from '../../../utils/theme';
import {vw} from '../../../utils/units';

const MyProgress = ({item}) => {
  return (
    <View style={styles.container}>
      <EurostileBold style={styles.titleText}>{item?.title}</EurostileBold>
      <EurostileBold style={styles.dateText}>{item?.date}</EurostileBold>
      <View style={styles.progressContainer}>
        <ProgressCircle
          percent={75}
          radius={vw * 19}
          borderWidth={vw * 1.5}
          color={colors.progressBackground}
          shadowColor={colors.grayBackgroundColor2}
          bgColor={colors.grayBackgroundColor2}>
          <View style={styles.progressContent}>
            <EurostileBold style={styles.targetValue}>
              {item?.target?.value}
            </EurostileBold>
            <EurostileBold style={styles.targetName}>
              {item?.target?.name}
            </EurostileBold>
          </View>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default MyProgress;
