import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, {useState} from 'react';
import CarouselItem from './CarouselItem';
import {Pagination} from 'react-native-snap-carousel';
import {dummyData} from '../../../api/dummyData';

const carouselWidth = Dimensions.get('window').width - 18;
export default function HomeScreenCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => <CarouselItem image={item.image} />;

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoplay
        data={dummyData.carouselItems}
        lockScrollWhileSnapping={true}
        renderItem={renderItem}
        sliderWidth={carouselWidth}
        itemWidth={carouselWidth}
        layout={'stack'}
        pagingEnabled={true}
        onSnapToItem={setActiveSlide}
      />

      <Pagination
        dotsLength={dummyData.carouselItems.length}
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
    paddingVertical: 12,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: '#F2726B',
  },
});
