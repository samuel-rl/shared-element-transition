import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import vehicle, { tabs, ORANGE, popularVehicle } from './vehicle';

const width = Dimensions.get('window').width;
export const CELL_WIDTH = width * 0.64;
export const CELL_HEIGHT = CELL_WIDTH * 1.4;
export const SPACING = 12;
const FULL_SIZE = CELL_WIDTH + SPACING * 2;


export default function VehicleList({ navigation }) {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);
	return (
		<ScrollView style={{ paddingTop: 35 }} >
				<FlatList
					data={tabs}
					keyExtractor={(item, index) => `${item}-${index}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ flexGrow: 0 }}
					contentContainerStyle={{ padding: SPACING }}
					renderItem={({ item: tab }) => {
						return (
							<TouchableOpacity onPress={() => setSelectedTab(tab)}>
								<View
									style={[
										styles.pill,
										{ backgroundColor: selectedTab === tab ? ORANGE : 'transparent' },
									]}
								>
									<Text style={[styles.pillText, { color: selectedTab === tab ? 'white' : '#000' }]}>
										{tab}
									</Text>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
				<FlatList
					data={vehicle}
					keyExtractor={item => item.key}
					horizontal
					showsHorizontalScrollIndicator={false}
					snapToInterval={FULL_SIZE}
					decelerationRate="fast"
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => {
									navigation.push('VehicleListDetails', { item });
								}}
								style={{ width: CELL_WIDTH, height: CELL_HEIGHT, margin: SPACING }}
							>
								<View style={{ flex: 1, padding: SPACING, justifyContent: 'center' }}>
									<SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
										<View
											style={[
												StyleSheet.absoluteFillObject,
												{ backgroundColor: item.color, borderRadius: 16 },
											]}
										/>
									</SharedElement>
									<SharedElement id={`item.${item.key}.meta`} style={[StyleSheet.absoluteFillObject]}>
										<View style={{ position: 'absolute', top: SPACING, left: SPACING }}>
											<Text style={styles.type}>
												{item.type}
											</Text>
											<Text style={styles.subType}>
												{item.subType}
											</Text>
										</View>
									</SharedElement>
									<SharedElement id={`item.${item.key}.image`} style={styles.image}>
										<Image source={{ uri: item.image }} style={styles.image} />
									</SharedElement>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
				<FlatList
					style={{ paddingBottom: 50 }}
					data={popularVehicle}
					keyExtractor={item => item.key}
					showsVerticalScrollIndicator={false}
					scrollEnabled={false}
					renderItem={({ item }) => {
						return (
							<View style={{ flexDirection: 'row', alignItems: 'center', padding: SPACING }}>
								<Image source={{ uri: item.image }} style={styles.popularImage} />
								<View style={{ flex: 1 }}>
									<Text style={styles.popularType}>
										{item.type}
									</Text>
									<View style={{ flexDirection: 'row' }}>
										<AntDesign
											name="star"
											size={16}
											color={ORANGE}
											style={{ marginRight: SPACING / 2 }}
										/>
										<Text style={{ fontWeight: '700' }}>
											{item.rating}
										</Text>
									</View>
								</View>
								<Text style={styles.popularPrice}>
									{item.price}
								</Text>
							</View>
						);
					}}
				/>
                
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	pill: {
		paddingHorizontal: SPACING,
		paddingVertical: SPACING / 2,
		borderRadius: 12,
	},
	pillText: {
		fontWeight: '700',
	},
	popularImage: {
		width: 54,
		height: 54,
		resizeMode: 'contain',
		marginRight: SPACING,
	},
	popularType: {
		fontWeight: '800',
		fontSize: 16,
	},
	popularPrice: {
		fontWeight: '800',
	},
	type: {
		fontWeight: '800',
		fontSize: 22,
	},
	subType: {
		fontSize: 12,
		color: 0.8,
	},
	image: {
		width: CELL_WIDTH * 0.7,
		height: CELL_HEIGHT * 0.7,
		alignSelf: 'center',
		resizeMode: 'contain',
		position: 'absolute',
	},
});
