import React from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from '../../utils/commonPropTypes'

export default class Button extends React.PureComponent {
  static propTypes = {
    containerStyle: styleSheet,
    buttonStyle: styleSheet,
    textStyle: styleSheet,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    red: PropTypes.bool,
  }

  static defaultProps = {
    red: false,
  }

  render() {
    const {
      label, onPress, containerStyle, buttonStyle, textStyle, red,
    } = this.props
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          style={[red ? styles.buttonRed : styles.buttonGreen, buttonStyle]}
          onPress={onPress}
        >
          <Text style={textStyle}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet({
  buttonRed: {
    color: 'red',
  },
  buttonGreen: {
    color: 'green',
  },
  button: {
    borderRadius: 5,
  },
})