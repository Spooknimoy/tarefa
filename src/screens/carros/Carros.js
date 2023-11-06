import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper';

export default function Carros() {
    const [carros, setCars] = useState(["Gol", "Civic"]);
    const [inputValue, setInputValue] = useState('');
    const [editando, setEditando] = useState(false);
    const [carroEdit, setCarroEdit] = useState(null);

    function adicionarCarro() {
        let novaListaCarros = carros.concat(inputValue);
        setCars(novaListaCarros);
        setCarroEdit(null);
        setInputValue('');
    }

    function editarCarro() {
        let index = carros.indexOf(carroEdit);
        let novaListaCarros = [...carros];
        novaListaCarros[index] = inputValue;
        setCars(novaListaCarros);
        setEditando(false);
        setInputValue('');
    }

    function excluirCarro(carro) {
        let novaListaCarros = carros.filter(item => item !== carro);
        setCars(novaListaCarros);
    }

    function handleEditarCarro(carro) {
        setCarroEdit(carro);
        setInputValue(carro);
        setEditando(true);
    }

    function handleButton() {
        if (editando) {
            editarCarro();
        } else {
            adicionarCarro();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    mode='outlined'
                    label='Carro'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                    color='#008577' // Cor do botão
                >
                    {editando ? 'Editar' : 'Adicionar'}
                </Button>
            </View>
            <FlatList
                style={styles.list}
                data={carros}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <Text style={styles.cardText}>{item}</Text>
                            <IconButton icon='pencil' onPress={() => handleEditarCarro(item)} color='#008577' />
                            <IconButton icon='delete' onPress={() => excluirCarro(item)} color='red' />
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0', 
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    textInput: {
        flex: 3,
        backgroundColor: '', 
    },
    button: {
        flex: 1,
        marginLeft: 8,
    },
    list: {
        width: '100%',
    },
    card: {
        marginVertical: 5,
        backgroundColor: 'black', 
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardText: {
        flex: 1,
    },
});
