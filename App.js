import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
	const response = await Api.get('ws/' +inputCep+ '/json/');
	setCep(response.data);
	}

  return(
    <View style={styles.container}>
		  <Image
  			source={{ uri: 'https://store-images.s-microsoft.com/image/apps.6607.13510798887520085.3b5999bd-0689-4a5d-b1fa-378e87bb83a5.ee076621-7430-46f1-a4ac-a0c442d69e58' }}
  			style={{ width: 100, height: 100 }}
/>
	  <View style={styles.bloco}>
		<Text style={styles.texto}>Informe seu CEP</Text>
		<TextInput
			  style={styles.input}
			  placeholder="Ex. : 11740000"
			  onChangeText={(data) => setInputCep(data)}
		/>
			
		<TouchableOpacity 
			style={styles.botao}
			onPress = {carregaCep}
			>
			<Text style={styles.textoBotao}>Buscar</Text>
		</TouchableOpacity>
		  
		</View>
		<Cep data = {cep}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
	bloco:{
		width: '100%',
		alignItems: 'center',
    	justifyContent: 'center',
		backgroundColor: 'lightgray'
	},
	input:{
		width: '80%',
		marginLeft: '10%',
		borderBottomWidth: 1,
		FontSize: 20
	},
	texto:{
		fontSize: 20,
		textAling: 'center'
	},
	botao:{
		width: '80%',
		marginLeft:'10',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textoBotao:{
		fontSize: 20,
		alignItems: 'center',
    	justifyContent: 'center'
	}
});
