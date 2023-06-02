import { View, Text, ScrollView, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../components/inputtext'
import Button from '../components/button'
import { login } from '../redux/actions'
import styles from './styles'

const Login = (props) => {
    const {
        navigation
    } = props
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const isloading = useSelector(state => state.auth.loading)
    useEffect(() => {
        const loginData = async () => {
            const data = await AsyncStorage.getItem('logindata')
            if (data) {
                navigation.navigate('dashboard')
            }
        }
        loginData();
    }, [])

    const onLogin = () => {
        if (email && password) {
            dispatch(login({
                userData: {
                    email: email, password: password
                }
                , navigation: navigation
            }))
        } else {
            Alert.alert('', "Please enter email and password", [{
                text: "Ok",
            }, {
                text: "Cancel",
            }])
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={styles.upperHalf}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>Logo</Text>
                    </View>
                </View>
                <View style={styles.lowerHalf}>
                    <View style={styles.inputContainer}>
                        <Input value={email} onChangeText={(text) => setEmail(text)} placeholder={'Email'} />
                        <Input secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholder={'Password'} componentStyle={styles.secInput} />
                        <Button text={'Login'} onClick={onLogin} componentStyle={styles.loginButton} isloader={isloading} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login