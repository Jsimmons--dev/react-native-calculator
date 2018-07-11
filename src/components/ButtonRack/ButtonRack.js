import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export class ButtonRack extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            [{ symbol: 'C', type: 'clear' },
            { symbol: '( )', type: 'operator' },
            { symbol: '%', type: 'operator' },
            { symbol: '/', type: 'operator' }],
            [{ symbol: '7', type: 'number' },
            { symbol: '8', type: 'number' },
            { symbol: '9', type: 'number' },
            { symbol: '*', type: 'operator' }],
            [{ symbol: '4', type: 'number' },
            { symbol: '5', type: 'number' },
            { symbol: '6', type: 'number' },
            { symbol: '-', type: 'operator' }],
            [{ symbol: '1', type: 'number' },
            { symbol: '2', type: 'number' },
            { symbol: '3', type: 'number' },
            { symbol: '+', type: 'operator' }],
            [{ symbol: '+/-', type: 'operator' },
            { symbol: '0', type: 'number' },
            { symbol: '.', type: 'operator' },
            { symbol: '=', type: 'enter' }]
        ]
        this.styleMap = {
            'operator': this.props.operatorButton,
            'number': this.props.numberButton,
            'clear': this.props.clearButton,
            'enter': this.props.equalButton
        }
    }
    handleButton(symbol) {
        if(symbol === 'C'){
            return this.props.clearBuffer
        } else if(symbol === '='){
            return this.props.evalBuffer
        } else {
            return this.props.addToBuffer(symbol)
        }
    }
    render() {
        let styleMap 
        
        let buttonEls = [];
        this.buttons.forEach((row, i) => {
            row.forEach((button, j) => {
                buttonEls.push(
                    <TouchableOpacity
                        onPress={this.handleButton(button.symbol)}
                        key={`${i},${j}`}
                        style={button.type === 'enter' ?
                            this.props.equalButtonContainerStyle :
                            this.props.buttonContainerStyle}
                    >
                        <Text style={this.styleMap[button.type]}> {button.symbol} </Text>
                    </TouchableOpacity>
                );
            });
        });
        return (
            <View style={this.props.rackStyle}>
                {buttonEls}
            </View>
        )
    }
}