import React, {Component} from 'react';
import {Image, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {vw} from '../../utils/units';
import styles from './styles';

export class ProdcutCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  _renderItem({item, index}) {
    console.log('item', item);
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.productImage} />
      </View>
    );
  }

  renderDots = activeIndex => {
    return this.props.images.map((item, index) => {
      return (
        <Image
          key={`dots-${index}`}
          source={item}
          style={[styles.dotImage, activeIndex !== index && {opacity: 0.4}]}
        />
      );
    });
  };

  pagination = () => {
    const {activeSlide} = this.state;

    return (
      <Pagination
        renderDots={this.renderDots}
        dotsLength={this.props.images?.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'transparent'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'black',
        }}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  render() {
    const {images} = this.props;

    console.log('images', images);

    return (
      <View style={styles.container}>
        <Carousel
          nestedScrollEnabled={true}
          data={images}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeSlide: index})}
          sliderWidth={vw * 100}
          itemWidth={vw * 100}
        />
        <View style={styles.paginationContainer}>{this.pagination()}</View>
      </View>
    );
  }
}

export default ProdcutCarousel;
