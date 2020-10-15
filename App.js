import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import VehicleList from './VehicleList';
import VehicleListDetails from './VehicleListDetails';
enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="VehicleList" headerMode="none">
				<Stack.Screen name="VehicleListDetails" component={VehicleListDetails} />
				<Stack.Screen name="VehicleList" component={VehicleList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		flex: 1,
	},
});