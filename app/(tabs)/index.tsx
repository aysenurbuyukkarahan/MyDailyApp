import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💗 WELCOME 💗</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('You clicked!')}>
        <Text style={styles.buttonText}>CLICK ME</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8e1f4', // Şeker pembesi tonunda açık arka plan
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ff80ab', // Yumuşak şeker pembesi
    marginBottom: 40,
    fontFamily: 'Arial', // Daha sade ve şık bir font
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffb3c1', // Daha pastel pembe buton rengi
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Yuvarlak köşeler
    borderWidth: 2,
    borderColor: '#ff80ab', // Pembe kenarlık
    shadowColor: '#ff80ab', // Pembe gölge
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Arial', // Daha sade font
    textAlign: 'center',
  },
});
