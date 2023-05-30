import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const PackageCard = props => {
  const {data} = props;

  const renderFeatureItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.featureItemContainer,
          index == data.features.length - 1 && {borderBottomWidth: 0},
        ]}>
        <Image
          source={item.isExist ? icons.tick : icons.cross}
          style={styles.featureItemIcon}
        />
        <EurostileBold style={styles.featureItemName}>
          {item.name}
        </EurostileBold>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.packageImage} />
      <EurostileBold style={styles.packageName}>{data.name}</EurostileBold>
      <EurostileBold style={styles.featuresText}>Features</EurostileBold>
      <View>
        {data?.features?.map((item, index) => {
          return renderFeatureItem({item, index});
        })}
      </View>
    </View>
  );
};

export default PackageCard;
