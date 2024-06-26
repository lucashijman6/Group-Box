import { Component, ReactNode, createElement } from "react";
import { Text, View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../GroupBox";

export interface HelloWorldProps {
    name?: string;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export class HelloWorld extends Component<HelloWorldProps> {
    private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.label}>Hello {this.props.name || "World"}</Text>
            </View>
        );
    }
}
