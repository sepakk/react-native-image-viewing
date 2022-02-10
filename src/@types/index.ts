/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ImageURISource, ImageRequireSource } from "react-native";

export type Dimensions = {
  width: number;
  height: number;
};

export type Position = {
  x: number;
  y: number;
};

export type ImageSource = {
  uri?: string,
  bundle?: string,
  method?: string,
  headers?: { [key: string]: string },
  cache?: 'default' | 'reload' | 'force-cache' | 'only-if-cached',
  body?: string,
  width?: number,
  height?: number,
  scale?: number,
  type: String, 
  print_button: Boolean, 
  thumbnail_url: String, 
  media_url: String
} | ImageRequireSource;