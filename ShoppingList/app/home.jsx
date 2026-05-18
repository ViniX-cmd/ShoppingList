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