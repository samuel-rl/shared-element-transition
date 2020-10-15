import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-native-shared-element';

import FoodList, { SPACING, CELL_HEIGHT, CELL_WIDTH } from './FoodList';

const { width, height } = Dimensions.get('window');
const DURATION = 300;

const animation = {
	0: { opacity: 0, translateY: 100 },
	1: { opacity: 1, translateY: 0 },
};

const createAnimation = from => ({
	0: { opacity: 0, translateY: -100, translateX: from },
	1: { opacity: 1, translateY: 0, translateX: 0 },
});

const animations = [createAnimation(100), createAnimation(0), createAnimation(-100)];

const FoodListDetails = ({ navigation, route }) => {
    const { item } = route.params;
    
    

	return (
		<View style={{ flex: 1 }}>
			<SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
				<View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
			</SharedElement>
			<SharedElement id={`item.${item.key}.meta`}>
				<View style={{ position: 'absolute', top: SPACING * 2, left: SPACING * 2 }}>
					<Text style={styles.type}>
						{item.type}
					</Text>
					<Text style={styles.subType}>
						{item.subType}
					</Text>
				</View>
			</SharedElement>
			<View style={{ marginTop: height * 0.05 }}>
				<SharedElement id={`item.${item.key}.image`}>
					<Image source={{ uri: item.image }} style={styles.image} />
				</SharedElement>
				<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: SPACING * 2 }}>
					{item.subcategories.map((subcategory, index) => {
						return (
							<Animatable.View
								useNativeDriver
								animation={animations[index]}
								delay={DURATION}
								key={index}
								style={{ backgroundColor: `${item.fullColor}99`, padding: SPACING, borderRadius: 50 }}
							>
								<Image
									source={{ uri: subcategory.image }}
									style={{ width: 32, height: 32, resizeMode: 'contain' }}
								/>
							</Animatable.View>
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
					top: SPACING * 2,
					right: SPACING,
					zIndex: 2,
				}}
				color={'#333'}
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<View style={{ padding: SPACING }}>
				<Animatable.Text
					useNativeDriver
					animation={animation}
					delay={DURATION + 300}
					style={{ fontSize: 32, fontWeight: '700', marginBottom: SPACING / 2 }}
				>
					{item.price}
				</Animatable.Text>
				<Animatable.Text
					useNativeDriver
					animation={animation}
					delay={DURATION + 400}
					style={{ fontSize: 14, lineHeight: 20, color: 'rgba(0,0,0,0.7)' }}
				>
					{item.description}
				</Animatable.Text>
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
		zIndex: 2,
		width: CELL_WIDTH * 0.9,
		height: CELL_HEIGHT * 0.9,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginVertical: SPACING * 4,
	},
});


FoodListDetails.sharedElements = (route, otherRoute, showing) => {
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
};

export default FoodListDetails;
