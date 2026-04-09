import { TextInput, View, Text, StyleSheet } from 'react-native'

const Input = ({ title, value, onChangeText, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10
  },
  title: {
    color: '#b4b4b4',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    letterSpacing: 0.3
  },
  input: {
    backgroundColor: '#1E293B',
    color: '#F8FAFC',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#c7596c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  }
})

export default Input