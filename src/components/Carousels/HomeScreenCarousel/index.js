import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, {useState} from 'react';
import CarouselItem from './CarouselItem';
import {Pagination} from 'react-native-snap-carousel';

const carouselWidth = Dimensions.get('window').width - 18;
export default function HomeScreenCarousel() {
  const items = [1, 2, 3];
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => <CarouselItem />;

  return (
    <View style={styles.container}>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={carouselWidth}
        itemWidth={carouselWidth}
        layout={'stack'}
        pagingEnabled={true}
        onSnapToItem={setActiveSlide}
      />

      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 18,
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 16,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});
