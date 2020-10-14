import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { SPACING, CELL_HEIGHT, CELL_WIDTH } from './FoodList';

const { width, height } = Dimensions.get('window');

const FoodListDetails = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<View style={{ flex: 1 }}>
			<View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
			<View style={{ position: 'absolute', top: SPACING * 3, left: SPACING * 2 }}>
				<Text style={styles.type}>
					{item.type}
				</Text>
				<Text style={styles.subType}>
					{item.subType}
				</Text>
			</View>
			<View style={{marginTop: height * 0.05}}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: SPACING * 2}}>
					{item.subcategories.map((subcategory, index) => {
						return (
							<View key={index} style={{backgroundColor: item.fullColor, padding: SPACING, borderRadius: 50}}>
								<Image
									source={{ uri: subcategory.image }}
									style={{ width: 32, height: 32, resizeMode: 'contain' }}
								/>
							</View>
						);
					})}
				</View>
			</View>

			<AntDesign
				name="close"
				size={28}
				style={{
					padding: SPACING,
					position: 'absolute',
					top: SPACING *2,
					right: SPACING,
					zIndex: 2,
				}}
				color={'#333'}
				onPress={() => {
					navigation.goBack();
				}}
			/>
            <View style={{padding: SPACING}}>
                <Text style={{fontSize: 32, fontWeight: '700', marginBottom: SPACING / 2}}>{item.price}</Text>
                <Text style={{fontSize: 14, lineHeight:20, opacity: 0.7}}>{item.description}</Text>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
	type: {
		fontWeight: '800',
		fontSize: 22,
	},
	subType: {
		fontSize: 12,
		color: 0.8,
	},
	image: {
		width: CELL_WIDTH * 0.9,
		height: CELL_HEIGHT * 0.9,
		alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: SPACING * 4,
	},
});

export default FoodListDetails;
