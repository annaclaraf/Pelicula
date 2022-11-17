import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Check } from 'phosphor-react-native';

export function Button({ text, onPress, selected }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.button, selected && styles.buttonSelected]}>
      <Text style={[styles.text, selected && styles.textSelected]}>
        {text}
      </Text>
      {selected && <Check weight='bold' color='white' size={20} style={styles.icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5E1F1',
    width: '100%',
    height: 35,
    borderRadius: 5,
    elevation: 5
  },
  buttonSelected: {
    backgroundColor: '#E82251',
  },
  text: {
    position: 'absolute',
    color: '#000',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  textSelected: {
    color: '#FFF',
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 8
  }
})