import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


export default function FormPessoaAsync({ navigation, route }) {

    const [carros, setCars] = useState(["Gol", "Civic"])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [carroEdit, setCarroEdit] = useState(null)

    function adicionarCarro() {
        console.log('ADICIONAR CARRO')
        let novaListaCarros = carros
        novaListaCarros.push(inputValue)
        setCars(novaListaCarros)
        setCarroEdit(null)
        setInputValue('')
    }

    function editarCarro() {
        console.log('EDITAR CARRO')
        console.log('carroEdit: ', carroEdit)
        console.log('carroASerEditado inputValue: ', inputValue)

        let index = carros.indexOf(carroEdit)
        let novaListaCarros = carros

        novaListaCarros.splice(index, 1, inputValue)

        setCars(novaListaCarros)
        setEditando(false)
        setInputValue('')
    }

    function excluirCarro(carro) {
        let novaListaCarros = carros.filter(item => item !== carro)
        setCars(novaListaCarros)
    }

    function handleEditarCarro(carro) {
        setCarroEdit(carro)
        setInputValue(carro)
        setEditando(true)
    }

    function handleButton() {
        console.log('HANDLE BUTTON -> editando: ', editando)
        if (editando) {
            editarCarro()
        } else {
            adicionarCarro()
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Carro'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'Add'}
                </Button>

            </View>



            <FlatList
                style={styles.list}
                data={carros}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                            <IconButton icon='pen' onPress={() => {
                                handleEditarCarro(item)
                            }} />
                            <IconButton icon='trash-can-outline' onPress={() => {
                                excluirCarro(item)
                            }} />
                        </Card.Content>
                    </Card>
                )}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 10,
        gap: 5
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '95%',
        marginTop: 10
    },
    card: {
        margin: 5
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

