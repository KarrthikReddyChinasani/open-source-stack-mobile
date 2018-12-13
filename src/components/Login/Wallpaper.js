import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, ImageBackground, View } from 'react-native';

import bgSrc from '../../resources/wallpaper.jpg';

export default class Wallpaper extends Component {
  render() {
    return (
      // <View style={styles.wrapper_view}>
        <ImageBackground style={styles.picture} source={bgSrc}>
          {this.props.children}
        </ImageBackground>
      //   <View style={styles.overlay}/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(40,40,40, 0.5)'
  },
  wrapper_view: {
    flex: 1
  }
});
