import React, { useContext } from 'react';
import {View, Text, TextInput, Image, Alert, ActivityIndicator} from 'react-native';

import { styles } from './style';

import IllustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from "../../components/ButtonIcon";
import {Background} from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from '../../global/styles/theme';

export function SignIn() {

    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (err) {
            Alert.alert(err);
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image source={IllustrationImg} resizeMode="stretch" style={styles.image} />

                <View style={styles.content}>
                    <Text style={styles.title}>Conecte-se{'\n'} e organize suas{'\n'} jogatinas</Text>
                    <Text style={styles.subtitle}>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</Text>
                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                        <ButtonIcon title="Entre com Discord" onPress={handleSignIn}/>
                    }
                </View>
            </View>
        </Background>
    )
}