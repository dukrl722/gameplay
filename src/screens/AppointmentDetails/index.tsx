import React from "react";
import {ImageBackground, View, Text, FlatList} from "react-native";

import {styles} from "./style";

import { Fontisto } from '@expo/vector-icons';

import Banner from '../../assets/banner.png';
import {Background} from "../../components/Background";
import {Header} from "../../components/Header";
import {BorderlessButton} from "react-native-gesture-handler";
import {theme} from "../../global/styles/theme";
import {ListHeader} from "../../components/ListHeader";
import {Member} from "../../components/Member";
import {ListDivider} from "../../components/ListDivider";
import {ButtonIcon} from "../../components/ButtonIcon";

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'TheDukrl',
            avatar_url: 'https://github.com/dukrl722.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'TheDukrl',
            avatar_url: 'https://github.com/dukrl722.png',
            status: 'offline'
        }
    ];

    return (
        <Background>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto name="share" size={24} color={theme.colors.primary} />
                </BorderlessButton>
            } />
            <ImageBackground
                source={Banner}
                style={styles.image}
            >
                <View style={styles.imageContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList
                keyExtractor={item => item.id}
                data={members}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}
