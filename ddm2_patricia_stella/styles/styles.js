import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7dacf',
    alignItems: 'center',
  },
  txt: {
    marginTop: 15,
    fontSize: 40,
    color: '#1e0c42',
    fontWeight: 'bold',
  },
  inp: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '50%',
  },
  pre: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  txtb: {
    color: 'white',
    fontSize: 17,
  },
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  img: {
    height: 200,
    width:'32%',
    marginBottom: 60,
    borderColor: '#79aba2',
    borderWidth: 5,
  },
  sub:{
    fontSize:17,
    marginBottom:50,
  },
  obs:{
    marginTop: 20, 
    fontSize: 20, 
    color:'red'
  }
});

export default styles;