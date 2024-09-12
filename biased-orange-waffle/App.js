import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function App() {
return (
    <View style = {styles.view}>
      <View style = {{flex:2, 
      alignItems: 'center',
      justifyContent: 'center'}}>
        <Image source={require('./circle.png')}
        style={{height:100, width:100}}
        />
      </View>
      <View style = {{flex:1, 
      justifyContent: 'center',
      alignItems: 'center',
      
      }}>
        <Text style={styles.title}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>
      <View style = {{flex:1, 
      justifyContent: 'center',
      alignItems: 'center',
      }}>
        <Text style={styles.text}>We will help you to grow your business using online server</Text>
      </View>
      <View style = {{flex:1,
      flexDirection:'row', 
      alignItems:'center',
      justifyContent:'space-around'
      }}>
        <Pressable style = {styles.btn}> <Text style = {styles.text}>LOG IN</Text>
          </Pressable>
        <Pressable style = {styles.btn}> <Text style = {styles.text}>SIGN UP</Text>
          </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#87ceeb'
  },
  text: {
   fontWeight:'bold',
   textAlign: "center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  btn: {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height:40,
    borderRadius: 10,

  }
});