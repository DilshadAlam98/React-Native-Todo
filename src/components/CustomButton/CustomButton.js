import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, marginVertical, padding, borderColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},
            marginVertical ? { margin: marginVertical } : {},
            padding ? { padding: padding } : {},
            borderColor ? { borderColor: borderColor } : {}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 12,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'transparent',
        borderWidth: 1

    },
    container_TERTIARY: {

    },
    container_PRIMARY: {
        backgroundColor: '#0047AB',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    text_TERTIARY: {
        color: 'blue'
    },

})
export default CustomButton