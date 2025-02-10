import React, { useState } from 'react'
import { Text, StyleSheet, Pressable, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface PasswordItemProps {
    data: string;
    removePassword: () => void;
}

export function PasswordItem({ data, removePassword}: PasswordItemProps) {

    const [senhavisivel, setSenhaVisivel] = useState(false)

    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{senhavisivel ? data : <View style={styles.censorship}></View> }</Text>
            <TouchableOpacity onPress={ () => setSenhaVisivel(!senhavisivel)}>
                <Icon name={senhavisivel ? 'eye' : 'eye-off'} size={24} color="#fff" />
            </TouchableOpacity>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: "#fff"
    },
    censorship: {
        width: 200,
        borderRadius: 8,
        padding: 6,
        backgroundColor: "#fff",
    }
})