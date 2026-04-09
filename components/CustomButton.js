import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, type === 'secondary' && styles.secondaryButton]}      
      activeOpacity={0.8}
    >
      <Text style={[styles.text, type === 'secondary' && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c7596c',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 8,
    width: 220,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  text: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#c7596c',
    shadowOpacity: 0
  },
  secondaryText: {
    color: '#c7596c'
  }
})

export default CustomButton