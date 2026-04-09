import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate a rombs area</Text>
      <View style={styles.buttonBox}>
        <CustomButton 
            title="Calculator"
            type="primary"
            onPress={() => navigation.navigate('Calculator')}          
        />
      </View>
      <View style={styles.buttonBox}>
        <CustomButton 
            title="About"
            type="secondary"
            onPress={() => navigation.navigate('About')}          
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 50
  },
  buttonBox: {
    width: '100%',
    alignItems: 'center',
    rowGap: 20,
  },
  title: {
    color: '#E5E7EB',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 0.5,
  }
})

export default Home