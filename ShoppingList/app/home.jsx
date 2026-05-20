import React, { useState, useEffect } from 'react'
import {
    Alert,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ItemList from '../components/ItemList';

export default function Home() {
    const [TextInput, setTextInput] = useState('');
    const [items, setItems] = useState([]);

    function addProduto() {
       // console.log(TextInput);
       if (TextInput == '') {
        Alert.alert(
            'Ocorreu um problema :(',
                'Por favor, informe o nome do produto'
                );
                return;
       }
       const newItem = {
        id: Date.now().toString(),
        name: TextInput, 
        bought: false
       };
       setItems([...items, newItem]);
       setTextInput('');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode='repeat'
                style={{ flex: 1, justifyContent: 'flex-start' }}
            >
                <View style={styles.hearder}>
                    <Text style={styles.title}>Lista de Compras</Text>
                    <icons name='trash' size={32} color='#fff' />
                </View>

                {/* Lista de produtos */}
                <FlatList 
                    contentContainerStyle={{padding: 20, color: '#fff'}}
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <ItemList item={item} />
                }               
                />

                <View styles={styles.footer}>
                    <View style={styles.inputContainer}>
                     <TextInput
                     color='#fff'
                     fontsize={18}
                     placeholder='Digite o nome do produto...'
                     placeholderTextColor="#aeaeae"
                     value={TextInput}
                     onChangeText={(text) => setTextInput(text)}
                     />
                    </View>
                    <TouchableOpacity style={styles.iconContainer} onPress={addProduto}>
                       <Ionicons name="add" size={36} color="#fff" />
                    </TouchableOpacity>   
                </View>
                    </ImageBackground>
            <Text>home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header:{
    padding: 25,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:'#0000',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
},
title: {
    fontsize: 26,
    fontWeight: 'bold',
    color: '#fff',
},
footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0000',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingButton: 30,
},
inputContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    elevation: 40,
    flex: 1,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
},
iconContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: '#000',
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
}
})