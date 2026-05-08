import React from 'react'
import {
    Alert,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { icons } from '@expo/vector-icons';

export default function Home() {

    function addProduto() {
        Alert.alert("Adicionar Produto");
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

                <View styles={styles.footer}>
                    <View style={styles.inputContainer}>
                     <TextInput
                     color='#fff'
                     fontsize={18}
                     placeholder='Digite o nome do produto...'
                     placeholderTextColor="#aeaeae"
                     />
                    </View>
                    <TouchableOpacity style={styles.inputContainer} >
                       <icons name="add" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
            <Text>home</Text>
        </View>
    )
}

const styles = StyleSheet.create({})