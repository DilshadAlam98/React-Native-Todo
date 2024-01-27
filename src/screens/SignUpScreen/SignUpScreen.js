import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const { userName, setUserName } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { confirmPassword, setConfirmPassword } = useState('');

    const navigation = useNavigation();

    const onCreateAccount = () => {
        console.warn("onCreateAccount")
    }

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create New Account</Text>
            <CustomInput
                placeholder={"User Name"}
                value={userName}
                setValue={setUserName}
            />

            <CustomInput
                placeholder={"Email"}
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
            />
            <CustomInput
                placeholder={"Confirm Password"}
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <CustomButton
                onPress={onCreateAccount}
                text={"Create"}
            />

            <Text style={styles.title}>
                By Regisitiring, you confirmed that you are agree to our {" "}
                <Text style={styles.link}>
                    Uses
                </Text>
                <Text > and</Text>
                <Text style={styles.link}> Privacy Policy</Text>
            </Text>
            <CustomButton
                bgColor={'white'}
                fgColor={'black'}
                borderColor={'black'}
                onPress={goBack}
                text={"Back"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: 'blue',
        fontSize: 22,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
    },
    container: {
        padding: 16,
        justifyContent: 'center',
        flex: 1
    },
    title: {
        margin: 8,
        fontSize: 14,
        fontWeight: '500',
        color: 'gray',
        textAlign: 'center',
    },
    link: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue'
    }
})

export default SignUpScreen