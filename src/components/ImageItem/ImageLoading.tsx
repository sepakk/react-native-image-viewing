/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";

import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const ImageLoading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="small" color="#FFF" />
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  loading: {
    width: '100%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
  },
  imageScrollContainer: {
    height: SCREEN_HEIGHT,
  },
});
