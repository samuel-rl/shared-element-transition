import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import FoodList from './FoodList';
import FoodListDetails from './FoodListDetails';
enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="FoodList" headerMode="none">
				<Stack.Screen name="FoodList" component={FoodList} />
				<Stack.Screen
					sharedElementsConfig={(route, otherRoute, showing) => {
						const { item } = route.params;

						return [
							{
								id: `item.${item.key}.image`,
							},
							{
								id: `item.${item.key}.bg`,
							},
							{
								id: `item.${item.key}.meta`,
							},
						];
					}}
					name="FoodListDetails"
					component={FoodListDetails}
				/>
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
