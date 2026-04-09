import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { calcArea } from '../utils/Area'
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'

const Calculator = ({ navigation }) => {
    const [diaA, setDiaA] = useState('')
    const [diaB, setDiaB] = useState('')
    const [area, setArea] = useState('')

    function startCalc() {
        const result = calcArea(Number(diaA), Number(diaB))
        setArea(result.toFixed(2))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rombus Area Calculator</Text>

            <View style={styles.inputBox}>
                <Input 
                    title="Diagonal A"
                    placeholder="Give a number..."
                    value={diaA}
                    onChangeText={setDiaA}
                />
                <Input 
                    title="Diagonal B"
                    placeholder="Give a number..."
                    value={diaB}
                    onChangeText={setDiaB}
                />
            </View>

            <CustomButton 
                title="Calculate"            
                onPress={startCalc}
                type="primary"
            />

            <Input 
                title="Area"        
                value={area}
                editable={false}
                style={styles.resultInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        padding: 20,
        paddingTop: 50,
        alignItems: 'center'
    },
    title: {
        color: '#E5E7EB',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 60,
        letterSpacing: 0.5
    },
    inputBox: {
        width: '100%',
        marginBottom: 50,
    },
    resultInput: {
        marginTop: 10,
        backgroundColor: '#1E293B'
    }
})

export default Calculator