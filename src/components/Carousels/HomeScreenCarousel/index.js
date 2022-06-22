import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, {useState} from 'react';
import CarouselItem from './CarouselItem';
import {Pagination} from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';

const carouselWidth = Dimensions.get('window').width - 18;
export default function HomeScreenCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = useSelector(state => state.settings) || {};
  const slides = settings['Slider Images'] || [];

  const renderItem = ({item}) => <CarouselItem image={item.img_url} />;

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoplay
        data={slides}
        lockScrollWhileSnapping={true}
        renderItem={renderItem}
        sliderWidth={carouselWidth}
        itemWidth={carouselWidth}
        layout={'stack'}
        pagingEnabled={true}
        onSnapToItem={setActiveSlide}
      />

      <Pagination
        dotsLength={slides.length}
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
