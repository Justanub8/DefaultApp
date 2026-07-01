import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import FImage, {
  FastImageProps as FIProps,
  Source,
} from '@d11/react-native-fast-image';

export interface FastImageProps extends FIProps {
  trueSize?: boolean;
}

const FastImage = (props: FastImageProps) => {
  const [error, setError] = useState(false);
  const [trueSize, setTrueSize] = useState<
    {width: number; height: number} | undefined
  >();
  const source = error
    ? props.defaultSource
    : typeof props.source === 'number'
    ? props.source
    : props.source?.uri
    ? {uri: props.source.uri}
    : props.defaultSource;

  useEffect(() => {
    const _source = props?.source as Source;
    if (_source?.uri && props.trueSize) {
      Image.getSize(_source?.uri).then(res => {
        setTrueSize(res);
      });
    } else {
      setTrueSize(undefined);
    }
  }, [props?.source, props.trueSize]);

  return (
    <FImage
      {...props}
      style={[
        props.style,
        props.trueSize &&
          trueSize && {aspectRatio: trueSize?.width / trueSize?.height},
      ]}
      source={source}
      onError={() => setError(true)}
    />
  );
};

export default FastImage;
