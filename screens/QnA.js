
import React, { Component } from "react";

import { Card, Badge, Button, Input,Block, Text } from "../components";
import { theme, mocks } from "../constants";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
export default class QnA extends Component {
    state = {
      doubt:null,
    }
  
    render(){
        
        
        return(
        <Block style={styles.doubt} behavior="padding">
<Text h3 bold middle>Have a doubt? </Text>
<Text h4 bold middle>Ask Us Anything !</Text>
<Block middle>
<Input
  label="Question"
  defaultValue={this.state.doubt}
  onChangeText={text => this.setState({ doubt: text })}
/>
</Block>
                <Button gradient >
              
                <Text bold white center>
                  Submit
                </Text>
            </Button>

</Block>
    )
    }
}
const styles = StyleSheet.create({
    doubt: {
      flex: 1,
      justifyContent: "center",
      padding:30
    },
    input: {
      borderRadius: 2,
      borderWidth: 0,
      borderBottomColor: theme.colors.gray2,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
      borderBottomColor: theme.colors.accent
    }
  });