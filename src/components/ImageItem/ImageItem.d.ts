/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { Dimensions as DimensionsType, ImageSource } from "../../@types";
import { GestureResponderEvent } from "react-native";

declare type Props = {
  imageSrc: ImageSource;
  onLoadEnd: () => void;
  onLoadStart: () => void;
  onRequestClose: () => void;
  onZoom: (isZoomed: boolean) => void;
  onLongPress: (image: ImageSource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  SCREEN: DimensionsType;
};

declare const _default: React.MemoExoticComponent<({
  imageSrc,
  onLoadEnd,
  onLoadStart,
  onZoom,
  onRequestClose,
  swipeToCloseEnabled,
  SCREEN,
  onLongPress,
  delayLongPress,
  swipeToCloseEnabled,
}: Props) => JSX.Element>;

export default _default;
