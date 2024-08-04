import React, {PureComponent} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  [key: string]: any; // For other props that the icon components accept
}

class Icon extends PureComponent<IconProps> {
  IconComponent: React.ComponentType<any>;

  constructor(props: IconProps) {
    super(props);
    this.IconComponent = this.setIcon(props.type);
  }

  componentDidUpdate(prevProps: IconProps) {
    if (prevProps.type !== this.props.type) {
      this.IconComponent = this.setIcon(this.props.type);
    }
  }

  setIcon(iconType: IconType): React.ComponentType<any> {
    switch (iconType) {
      case 'AntDesign':
        return AntDesign;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'Fontisto':
        return Fontisto;
      case 'Foundation':
        return Foundation;
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return Zocial;
      default:
        return Ionicons; // Default case to prevent runtime issues
    }
  }

  render() {
    const {...rest} = this.props;
    const IconComponent = this.IconComponent;
    return <IconComponent {...rest} />;
  }
}

export default Icon;
