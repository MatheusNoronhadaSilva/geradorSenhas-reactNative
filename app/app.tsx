import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from '@react-native-community/slider'
import { ModalPassoword } from '@/components/modal';
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

export default function App() {

    const [size, setSize] = useState(10)
    const [passowordValue, setPassowordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    function generatePassword() {
        
        let password = ""
        for (let i = 0, n = charset.length; i< size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))   
        }
        
        setPassowordValue(password)
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            />

            <Text style={styles.title}>{size} caracteres</Text>

            <View style={styles.area}>
                <Slider
                style={{ height: 50}}
                minimumValue={6}
                maximumValue={20}
                maximumTrackTintColor="#ff0000"
                minimumTrackTintColor="#000"
                thumbTintColor="#392de9"
                value={size}
                onValueChange={ (value) => setSize(Number(value.toFixed(0))) }
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassoword password={passowordValue} handleClose={ () => setModalVisible(false)}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3ff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60,
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 6,
    },
    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});
