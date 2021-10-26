// Copyright (C) 2021 B factory, Inc. All rights reserved

import NextImage, { ImageProps } from "next/image";
import qs from "querystring";
import { PureComponent } from "react";

class Image extends PureComponent<ImageProps> {
  render() {
    return (
      <NextImage
        loader={({ quality, src, width }) =>
          `${src}?${qs.stringify({ quality, width })}`
        }
        {...this.props}
      />
    );
  }
}
export default Image;
