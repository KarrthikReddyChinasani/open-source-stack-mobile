/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import Auth  from "../Auth";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return <Auth />;
  }
}
