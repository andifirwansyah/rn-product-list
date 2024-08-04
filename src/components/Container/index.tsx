import React, {ReactNode} from 'react';
import {StatusBar, View, ViewStyle} from 'react-native';

interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  barColor?: string;
}

const defaultStyle: ViewStyle = {
  flex: 1,
};

const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor = 'white',
  barStyle = 'dark-content',
  barColor = 'transparent',
}) => (
  <View style={[{...defaultStyle, backgroundColor}]}>
    <StatusBar translucent barStyle={barStyle} backgroundColor={barColor} />
    <View style={{flex: 1}}>{children}</View>
  </View>
);

export default Container;
