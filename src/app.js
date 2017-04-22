import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
    		apiKey: 'AIzaSyDG0izg1WspYc54iu8Uzl3h99AxQUwBU6s',
    		authDomain: 'auth-29aea.firebaseapp.com',
    		databaseURL: 'https://auth-29aea.firebaseio.com',
    		projectId: 'auth-29aea',
    		storageBucket: 'auth-29aea.appspot.com',
    		messagingSenderId: '571425182866'
  		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An App!</Text>
			</View>
		);
	}
}

export default App;