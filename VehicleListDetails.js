import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import VehicleList, { SPACING, CELL_HEIGHT, CELL_WIDTH } from './VehicleList';

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

const animationOpacity = {
	0: { opacity: 0 },
	1: { opacity: 1 },
};

const VehicleListDetails = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
				<View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
			</SharedElement>
			<SharedElement id={`item.${item.key}.meta`}>
				<View style={{ position: 'absolute', top: SPACING, left: SPACING * 2 }}>
					<Text style={styles.type}>
						{item.type}
					</Text>
					<Text style={styles.subType}>
						{item.subType}
					</Text>
				</View>
			</SharedElement>
			<View style={{ marginTop: height * 0.01 }}>
				<SharedElement id={`item.${item.key}.image`}>
					<Image source={{ uri: item.image }} style={styles.image} />
				</SharedElement>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<Animatable.View
					useNativeDriver
					animation={animations[0]}
					delay={DURATION}
					style={{ flex: 0.3, alignSelf: 'center', alignItems: 'center' }}
				>
					<Image
						source={{ uri: item.seler.avatar }}
						style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 50 }}
					/>
				</Animatable.View>
				<Animatable.View
					useNativeDriver
					animation={animations[1]}
					delay={DURATION}
					style={{ flexDirection: 'column', flex: 0.4 }}
				>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontWeight: '700', fontSize: 17 }}>
							{item.seler.firstName}
						</Text>
						<Text style={{ fontSize: 17, marginLeft: 10 }}>
							{item.seler.lastName}
						</Text>
					</View>
					<Text style={{ opacity: 0.7 }}>
						{item.seler.city}
					</Text>
				</Animatable.View>
				<Animatable.View
					useNativeDriver
					animation={animations[2]}
					delay={DURATION}
					style={{ flex: 0.3, alignSelf: 'center', alignItems: 'center' }}
				>
					<Feather name="phone" size={24} color="black" />
				</Animatable.View>
			</View>

			<View style={{ padding: SPACING, marginTop: 20 }}>
				<Animatable.Text
					useNativeDriver
					animation={animation}
					delay={DURATION + 300}
					style={{ fontSize: 32, fontWeight: '700', marginBottom: SPACING * 2 }}
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

			<Animatable.View
				useNativeDriver
				animation={animationOpacity}
				delay={DURATION}
				style={{
					padding: SPACING,
					position: 'absolute',
					top: StatusBar.currentHeight + SPACING,
					right: SPACING,
					zIndex: 2,
				}}
			>
				<AntDesign
					name="close"
					size={28}
					color={'#333'}
					onPress={() => {
						navigation.pop();
					}}
				/>
			</Animatable.View>
		</SafeAreaView>
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
		marginTop: SPACING * 3,
		marginBottom: SPACING * 2,
	},
});

VehicleListDetails.sharedElements = (route, otherRoute, showing) => {
	const { item } = route.params;

	return [
		{
			id: `item.${item.key}.bg`,
		},
		{
			id: `item.${item.key}.image`,
		},
		{
			id: `item.${item.key}.meta`,
		},
	];
};

export default VehicleListDetails;
