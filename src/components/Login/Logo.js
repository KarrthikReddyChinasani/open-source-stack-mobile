import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";

import logoImg from "../../resources/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text>
          <Text style={styles.title_1}>OPEN SOURCE </Text>
          <Text style={styles.title_2}>STACK</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  title_1: {
    color: "white",
    fontWeight: "500",
    backgroundColor: "transparent",
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Titillium Web"
  },
  title_2: {
    fontWeight: "900",
    backgroundColor: "transparent",
    marginTop: 20,
    fontSize: 24,
    color: "#2196f3",
    fontFamily: "Titillium Web"
  }
});
