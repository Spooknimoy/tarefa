import { createStackNavigator } from '@react-navigation/stack'
import FormPessoaAsync from './FormPessoaAsync.js'
import ListPessoaAsync from './ListPessoaAsync.js'

const Stack = createStackNavigator()

export default function StackPessoaAsync() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListPessoaAsync'
        >

            <Stack.Screen name='ListaPessoasAsync' component={ListPessoaAsync} />
            <Stack.Screen name='FormPessoaAsync' component={FormPessoaAsync} />

        </Stack.Navigator>

    )
}