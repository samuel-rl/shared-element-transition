import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FoodList from './FoodList';
import FoodListDetails from './FoodListDetails';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="FoodList" component={FoodList} />
                <Stack.Screen name="FoodListDetails" component={FoodListDetails} />
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
