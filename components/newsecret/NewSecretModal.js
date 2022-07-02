import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, View, TextInput, Text } from 'react-native';

const NewSecretModal = () => {
	const [modalVisible, setModalVisible] = useState(true);
	const [text, setText] = useState('');

	const changeText = text => {
		setText(text);
	};
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>New Secret</Text>
					<TextInput
						style={styles.input}
						onChangeText={changeText}
						value={text}
						// placeholder="useless placeholder"
						// keyboardType="text"
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 100
	},
	modalView: {
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		width: '100%',
		height: '80%',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	input: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center'
	}
});

export default NewSecretModal;
