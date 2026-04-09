import { StyleSheet, Text, View } from 'react-native'

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Made by: Hanák Renáta</Text>
      <Text style={styles.title}>Group: Szoft 2/N</Text>
      <Text style={styles.title}>Date: 2026-04-09</Text>
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
  title: {
    color: '#E5E7EB',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 0.5,
  }
})

export default About