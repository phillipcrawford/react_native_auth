import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };


	componentWillMount(){
		firebase.initializeApp({
    	apiKey: 'AIzaSyDG0izg1WspYc54iu8Uzl3h99AxQUwBU6s',
    	authDomain: 'auth-29aea.firebaseapp.com',
    	databaseURL: 'https://auth-29aea.firebaseio.com',
    	projectId: 'auth-29aea',
    	storageBucket: 'auth-29aea.appspot.com',
    	messagingSenderId: '571425182866'
  	});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});  		
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}

	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;