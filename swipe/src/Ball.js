import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Ball extends Component{
    render() {
        return (
            <View style={styles.ball} />
        );
    }
}

const styles = {
    ball: {
        height: 60,
        widthh: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black',
    }
};

export default Ball;