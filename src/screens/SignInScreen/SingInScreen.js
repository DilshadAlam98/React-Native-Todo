import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/login-avatar.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SingInScreen = () => {
    const { height } = useWindowDimensions()
    const navigation = useNavigation()

    const onSignIn = () => {
        console.warn("Sign In");
    }
    const signInWithFacebook = () => {
        console.warn("signInWithFacebook");
    }
    const signInWithGoogle = () => {
        console.warn("signInWithGoogle");
    }
    const signInWithApple = () => {
        console.warn("signInWithApple");
    }

    const forgetPassword = () => {
        navigation.navigate('ForgetPassword')

    }
    const onCreateAccount = () => {
        navigation.navigate('SignUp')
    }

    const { userName, setUserName } = useState('');
    const { password, setPassword } = useState('');
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMethod='contain'></Image>
                <CustomInput
                    value={userName}
                    setValue={setUserName}
                    placeholder="User Name"
                ></CustomInput>
                <CustomInput
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                ></CustomInput>
                <Text
                    style={styles.text}
                    onPress={forgetPassword}
                >Forget Password</Text>
                <CustomButton
                    onPress={onSignIn}
                    bgColor={'green'}
                    text="Sign In"
                />
                <CustomButton
                    onPress={signInWithApple}
                    borderColor={'blue'}
                    bgColor={'black'}
                    fgColor={'white'}
                    text="Sign In with Apple"
                />
                <CustomButton
                    onPress={signInWithGoogle}
                    bgColor={'#fa8072'}
                    text="Sign In with Google"
                />
                <CustomButton
                    onPress={signInWithFacebook}
                    text="Sign in with Facebook"
                />
                <Text
                >Don't have an account? {' '}
                    <Text onPress={onCreateAccount} style={styles.text}>Create New</Text>
                </Text>

            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontWeight: 'bold',
        textAlign: "right",
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    root: {
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignContent: 'center'
    },
    logo: {
        width: '50 %',
        maxHeight: 200,
        maxWidth: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SingInScreen