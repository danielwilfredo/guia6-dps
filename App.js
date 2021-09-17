import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, ScrollView , Modal, Button, TouchableOpacity} from "react-native";

export default function App() {

  //creando state para manejar el modal
  const [modalVisiblePlaya, setModalVisiblePlaya]=useState(false);
  const [modalComida, setModalComida]=useState(false);
  const [modalRuta, setModalRuta]=useState(false);

  
  return (
    <>
      <ScrollView>
        <Modal transparent={true}
        animationType="slide"
        visible={modalVisiblePlaya}
        onRequestClose={()=>(
          alert("Modal has been closed.")
        )}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa 
              </Text>
              <Text>El salvador cuenta con hermosas playas a nivel centroamericano</Text>
              <Button title="cerrar" onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}}>
              </Button>
              </View> 
          </View>

        </Modal>

          {//modal 2
          }

<Modal transparent={true}
        animationType="slide"
        visible={modalComida}
        onRequestClose={()=>(
          alert("Modal has been closed.")
        )}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Comidas El Salvador
              </Text>
              <Text>Aqui podras encontrar mas informacion de los platillos salvadoreños</Text>
              <Button title="cerrar" onPress={()=>{setModalComida(!modalComida)}}>
              </Button>
              </View> 
          </View>

        </Modal>

          {
            //modal 3
          }

<Modal transparent={true}
        animationType="slide"
        visible={modalRuta}
        onRequestClose={()=>(
          alert("Modal has been closed.")
        )}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Rutas El Salvador
              </Text>
              <Text>El salvador cuenta con muchas rutas hermosas, como por ejemplo la ruta de las flores
                que tiene como destino muchos lugares Turisticos del pais
              </Text>
              <Button title="cerrar" onPress={()=>{setModalRuta(!modalRuta)}}>
              </Button>
              </View> 
          </View>

        </Modal>


        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.banner}
            source={require("./src/img/imagen1.jpg")}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableOpacity
              onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya)}}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/imagen3.jpg")}
              />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/imagen4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/imagen5.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/imagen6.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/imagen7.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
            <TouchableOpacity
              onPress={()=>{setModalComida(!modalComida)}}>
              <Image
                style={styles.mejores}
                source={require("./src/img/pupusas.jpg")}
              />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/empanadas.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/pastelitos.jpg")}
              />
            </View>
          </View>
          <Text style={styles.titulo}>Rutas Turisticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
            <TouchableOpacity
              onPress={()=>{setModalRuta(!modalRuta)}}>
                
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta1.jpg")}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta2.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta3.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta4.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  ciudad: { width: 250, height: 300, marginRight: 10 },
  contenedor: {
    marginHorizontal: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1
  },
  vistaModal:{
    backgroundColor:"#000000aa",
    flex:1
  }
});
