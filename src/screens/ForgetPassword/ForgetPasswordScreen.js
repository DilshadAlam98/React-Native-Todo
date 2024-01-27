import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgetPasswordScreen = () => {
    const { email, setEmail } = useState('');
    const { code, setCode } = useState('')
    const [isSend, setIsSend] = useState(false);
    const navigation = useNavigation();
    const onSendCode = () => {
        console.warn('Code send');
        setIsSend(true);
    }

    const onVerifyCode = () => {
        console.warn("onVerifyCode")
    }

    const goBack = () => {
        navigation.goBack();
    }


    const onChangeEmail = () => {
        setIsSend(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Reset Your Password</Text>
            {isSend ? <Text style={styles.subtitle}>
                Verification code of 6 digit has beend sent your Email address.
                <Text
                    onPress={onChangeEmail}
                    style={styles.link}> Change Email</Text>
            </Text> :
                <Text style={styles.subtitle}>Reset your password by your regitered email address, We will send you a code to your email address.</Text>
            }

            {
                !isSend ? <CustomInput
                    value={email}
                    setValue={setEmail}
                    placeholder={"Email"}
                /> : <CustomInput
                    value={email}
                    setValue={setEmail}
                    placeholder={"Enter Code"}
                />
            }
            {
                !isSend ? <CustomButton
                    onPress={onSendCode}
                    text={"Send Code"}
                /> : <CustomButton
                    onPress={onVerifyCode}
                    text={"Verify Code"}
                />
            }

            <CustomButton
                bgColor={'white'}
                borderColor={'black'}
                fgColor={'black'}
                text={"Back"}
                onPress={goBack}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: "left",
        textAlign: 'left',
        color: 'blue'
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray',
        marginBottom: 15,
        // height: 1
    },
    link: {
        color: 'blue',
        alignSelf: 'flex-end'
    }
});

export default ForgetPasswordScreen
