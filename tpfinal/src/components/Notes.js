import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	Button, 
	ScrollView, 
	TouchableOpacity, 
	Modal, 
	StyleSheet, 
} from "react-native"; 

export default function Notes({ navigation }) {
	const [notes, setNotes] = useState([]); 
	const [selectedNote, setSelectedNote] = useState(null); 
	
    const [title, setTitle] = useState(""); 
	const [content, setContent] = useState(""); 

	const [modalVisible, setModalVisible] = useState(false); 
	
    const guardarNota = () => { 
		if (selectedNote) { 
			const notaActualizada = notes.map((note) => 
				note.id === selectedNote.id 
					? { ...note, title, content } 
					: note 
			); 
			setNotes(notaActualizada); 
			setSelectedNote(null); 
		} else { 
			const newNote = { 
				id: Date.now(), 
				title, 
				content, 
			}; 
			setNotes([...notes, newNote]); 
		} 
		setTitle(""); 
		setContent(""); 
		setModalVisible(false); 
	}; 

	// Function to handle editing a note 
	const handleEditNote = (note) => { 
		setSelectedNote(note); 
		setTitle(note.title); 
		setContent(note.content); 
		setModalVisible(true); 
	}; 

	// Function to handle deleting a note 
	const handleDeleteNote = (note) => { 
		const notaActualizada = notes.filter( 
			(item) => item.id !== note.id 
		); 
		setNotes(notaActualizada); 
		setSelectedNote(null); 
		setModalVisible(false); 
	}; 

	return ( 
		<View style={styles.container}> 
			{/* Title */} 
			<Text style={styles.title}>My Notes</Text> 

			{/* List of notes */} 
			<ScrollView style={styles.noteList}> 
				{notes.map((note) => ( 
					<TouchableOpacity 
						key={note.id} 
						onPress={() => handleEditNote(note)} 
					> 
						<Text style={styles.noteTitle}> 
							{note.title} 
						</Text> 
					</TouchableOpacity> 
				))} 
			</ScrollView> 

			{/* Add Note button */} 
			<TouchableOpacity 
				style={styles.addButton} 
				onPress={() => { 
					setTitle(""); 
					setContent(""); 
					setModalVisible(true); 
				}} 
			> 
				<Text style={styles.addButtonText}> 
					Crear Note 
				</Text> 
			</TouchableOpacity> 

			{/* Modal for creating/editing notes */} 
			<Modal 
				visible={modalVisible} 
				animationType="slide"
				transparent={false} 
			> 
				<View style={styles.modalContainer}> 
					{/* Note title input */} 
					<TextInput 
						style={styles.input} 
						placeholder="Enter note title"
						value={title} 
						onChangeText={setTitle} 
					/> 

					{/* Note content input */} 
					<TextInput 
						style={styles.contentInput} 
						multiline 
						placeholder="Enter note content"
						value={content} 
						onChangeText={setContent} 
					/> 

					{/* Buttons */} 
					<View style={styles.buttonContainer}> 
						<Button 
							title="Guardar"
							onPress={guardarNota} 
							color="#007BFF"
						/> 
						<Button 
							title="Cancel"
							onPress={() => 
								setModalVisible(false) 
							} 
							color="#FF3B30"
						/> 
						{selectedNote && ( 
							<Button 
								title="Eliminar"
								onPress={() => 
									handleDeleteNote( 
										selectedNote 
									) 
								} 
								color="#FF9500"
							/> 
						)} 
					</View> 
				</View> 
			</Modal> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 40, 
		backgroundColor: "#e6e6e6", 
	}, 
	title: { 
		fontSize: 24, 
		fontWeight: "bold", 
		marginBottom: 10, 
		color: "#333", 
	}, 
	noteList: { 
		flex: 1, 
	}, 
	noteTitle: { 
		fontSize: 15, 
		marginBottom: 10, 
		fontWeight: "bold", 
		color: "black", 
		backgroundColor: "white", 
		height: 40, 
		width: "100%", 
		padding: 10, 
		borderRadius: 8, 
	}, 
	addButton: { 
		alignItems: "center", 
		justifyContent: "center", 
		backgroundColor: "#007BFF", 
		paddingVertical: 12, 
		borderRadius: 5, 
		marginTop: 10, 
	}, 
	addButtonText: { 
		color: "white", 
		fontSize: 16, 
		fontWeight: "bold", 
	}, 
	modalContainer: { 
		flex: 1, 
		padding: 50, 
		backgroundColor: "white", 
	}, 
	input: { 
		borderWidth: 1, 
		borderColor: "#E0E0E0", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 5, 
	}, 
	contentInput: { 
		borderWidth: 1, 
		borderColor: "#E0E0E0", 
		padding: 10, 
		marginBottom: 20, 
		borderRadius: 5, 
		height: 150, 
		textAlignVertical: "top", 
	}, 
	buttonContainer: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
	}, 
}); 

