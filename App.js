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
        <Button title='Somar' color={'green'}/>
      </View>

      <View style={styles.subtrair1}>
        <Button title='Subtrair' color={'pink'}/>
      </View>

      <View style={styles.multiplicar1}>
        <Button title='Multiplicar' color={'red'}/>
      </View>

      <View style={styles.dividir1}>
        <Button title='Dividir' color={'blue'}/>
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
    marginLeft: 110,
    marginTop: 5,

  },
  calc: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 250,
    width: 400,
    height: 50,
  },
  valor1: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    width: 400,
    height: 50,
    fontSize: 15,
    color: 'red',
  },
  valor2: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    width: 400,
    height: 50,
    fontSize: 15,
    color: 'red',
  },
  somar1: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'darkgreen',
    marginTop: 10,
    width:90,
    height: 40,
    color: 'white',
    marginRight: 5,
  },
  subtrair1: {
    backgroundColor: 'pink',
    border: '2px solid lightpink',
    marginTop: 10,
    width: 90,
    height: 40,
    color: 'white',
    marginRight: 5,

  },
  dividir1: {
    backgroundColor: 'blue',
    border: '2px solid lightblue',
    marginTop: 10,
    width: 90,
    height: 40,
    color: 'white',

  },
  multiplicar1: {
    backgroundColor: 'red',
    border: '2px solid darkred',
    marginTop: 10,
    width: 110,
    height: 40,
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
    marginLeft: 50
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




