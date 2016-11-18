import React, { Component} from 'react';
import {
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressing: false
    };
  }

  _onPress = () => {
    console.log('press');
    this.setState({pressing: true});
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPress}>
        <Icon name={this.props.name}
              size={this.props.size}
              color={this.props.color}
              style={this.props.style}/>
      </TouchableOpacity>
    );
  }
}
