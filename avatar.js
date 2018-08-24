import React from 'react';
import {Alert, StyleSheet, Text, View, Image } from 'react-native';
import {RkButton, RkTheme, RkText,RkTextInput, RkCard} from 'react-native-ui-kitten';

let accent = '#ed1c4d';

RkTheme.setType('RkButton','accent', {
    backgroundColor: accent,
    color: 'white'
});
let Values = {
  fontSize: 15
};
RkTheme.setType('RkText', 'salai', {
  fontSize: 20,
    color: 'midnightblue',
    padding: 20
});

class Avatar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      myStyle:{
        opacity:0
      },
      loginStyle:{
        opacity:1
      }
    }
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }
  handlePassword = (text) => {
    this.setState({password: text})
  }
  
  
  
  showAlert = () => {
    Alert.alert(
       'Welcome'
    )
  }
  
  submitValue = (email, pass) => {
    this.setState({
      myStyle:{
        opacity:1
      },
      loginStyle:{
        opacity:0
      }
    })
  }

  render() {
    return (
      <View>
        <RkText rkType='salai'>Salai Devaganamani!</RkText>
        <RkButton rkType='accent' onPress = {this.showAlert}>Click</RkButton>
        <View style={this.state.loginStyle}>
        <RkTextInput 
          style = {styles.input}
          placeholder="Email"
          onChangeText = {this.handleEmail}
          rkType = 'rounded'
         />

         <RkTextInput
          style = {styles.input}
          placeholder = "Password"
          onChangeText = {this.handlePassword}
          rkType = 'rounded'
         />

         <RkButton onPress = {
           () => this.submitValue(this.state.email, this.state.password)}>Submit</RkButton>
        </View>

         <RkCard rkType='story' style={this.state.myStyle}>
          <Image rkCardImg source={require('./img/img1.jpg')}/>
          <View rkCardHeader>
            <Text>Header</Text>
          </View>
          <View rkCardContent>
            <Text>Salai</Text>
          </View>
          <View rkCardFooter>
            <Text>Salai</Text>
          </View>
        </RkCard>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:40,
    margin:10
  }
});

export default Avatar;
