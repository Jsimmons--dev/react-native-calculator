import React, { Component } from 'react';
import { View, Text } from 'react-native';
export class ResultsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.resultsContainerStyle}>
                <Text style={this.props.bufferStyle}>{this.props.value}</Text>
            </View>
        )
    }
}