import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
	Dimensions,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
} from 'react-native';

import food, { tabs, ORANGE, popularFood } from './food';

const width = Dimensions.get('window').width;
const CELL_WIDTH = width * 0.64;
const CELL_HEIGHT = CELL_WIDTH * 1.4;

const SPACING = 12;
const FULL_SIZE = CELL_WIDTH + SPACING * 2

export default function FoodList() {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<ScrollView>
			<SafeAreaView style={{ flex: 1 }}>
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
					data={food}
					keyExtractor={item => item.key}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={FULL_SIZE}
                    decelerationRate='fast'
					renderItem={({ item }) => {
						return (
							<TouchableOpacity onPress={() => {}} style={{ width: CELL_WIDTH, height: CELL_HEIGHT, margin: SPACING }}>
								<View style={{ flex: 1, padding: SPACING, justifyContent: 'center' }}>
									<View
										style={[
											StyleSheet.absoluteFillObject,
											{ backgroundColor: item.color, borderRadius: 16 },
										]}
									/>
									<View style={{position: "absolute", top: SPACING, left: SPACING}}>
										<Text style={styles.type}>
											{item.type}
										</Text>
										<Text style={styles.subType}>
											{item.subType}
										</Text>
									</View>
                                    <Image source={{ uri: item.image }} style={styles.image} />
								</View>
							</TouchableOpacity>
						);
					}}
				/>
				<FlatList
					data={popularFood}
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
			</SafeAreaView>
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
