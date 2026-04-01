import {View, Text, StyleSheet, Button, TextInput} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.caixa}> 

    <View style={styles.calc}>
      <Text style={styles.calculadora}>CALCULADORA</Text>
    </View>
      
    <TextInput
      placeholder='valor 01'
      style={styles.valor1} 
    />

    <TextInput
      placeholder='valor 02'
      style={styles.valor2} 
    />
  

    <View style={styles.botoes}> 
      <View style={styles.somar1}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 7, marginTop: 3 }}>SOMAR</Text>
      </View>


      <View style={styles.subtrair1}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 7, marginTop: 3 }}>SUBTRAIR</Text>
      </View>

      <View style={styles.multiplicar1}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 9, marginTop: 3 }}>MULTIPLICAR</Text>
      </View>
    
      <View style={styles.dividir1}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 7, marginTop: 3 }}>DIVIDIR</Text>
      </View>
    </View>

    <View style={styles.calcular}>
      <Text style={styles.textocalcular}> 0 </Text>
    </View>

    </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  }, calculadora: {
    fontSize: 26,
    marginLeft: 70,
    marginTop: 5,

  },
  calc: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 250,
    width: 311,
    height: 50,
  },
  valor1: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    width: 311,
    height: 50,
    fontSize: 15,
    color: 'red',
  },
  valor2: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    width: 311,
    height: 50,
    fontSize: 15,
    color: 'red',
  },
  somar1: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'darkgreen',
    marginTop: 10,
    width:67,
    height: 30,
    color: 'white',
    marginRight: 5,
  },
  subtrair1: {
    backgroundColor: 'pink',
    border: '2px solid lightpink',
    marginTop: 10,
    width: 83,
    height: 30,
    color: 'white',
    marginRight: 5,

  },
  dividir1: {
    backgroundColor: 'blue',
    border: '2px solid lightblue',
    marginTop: 10,
    width: 67,
    height: 30,
    color: 'white',

  },
  multiplicar1: {
    backgroundColor: 'red',
    border: '2px solid darkred',
    marginTop: 10,
    width: 110,
    height: 30,
    color: 'white',
    marginRight: 5,

  },
  botoes: {
    flexDirection: 'row',
    marginTop: 10,
    width: 311,
    justifyContent: 'space-between', 
},
  calcular: {
    backgroundColor: 'black',
    height: 40,
    width: 300,
    marginTop: 40,
    borderRadius: 10,
    marginLeft: 10
  },
  textocalcular: {
    marginLeft: 130,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  caixa: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
  }


});




