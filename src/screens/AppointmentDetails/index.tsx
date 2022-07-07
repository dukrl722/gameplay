import React, { useEffect, useState } from "react";
import {ImageBackground, View, Text, FlatList, Alert, Share, Platform} from "react-native";
import * as Linking from 'expo-linking';

import {styles} from "./style";

import { api } from "../../services/api";

import { Fontisto } from '@expo/vector-icons';

import Banner from '../../assets/banner.png';
import {Background} from "../../components/Background";
import {Header} from "../../components/Header";
import {BorderlessButton} from "react-native-gesture-handler";
import {theme} from "../../global/styles/theme";
import {ListHeader} from "../../components/ListHeader";
import {Member, MemberProps} from "../../components/Member";
import {ListDivider} from "../../components/ListDivider";
import {ButtonIcon} from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { Load } from "../../components/Load";

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invide: string;
    members: MemberProps[];
}

export function AppointmentDetails() {

    const route = useRoute();
    const {guildSelected} = route.params as Params;

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios' 
            ? `Junte-se a ${guildSelected.guild.name}`
            : widget.instant_invide;

            Share.share({
                message,
                url: widget.instant_invide
            });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invide);
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    return (
        <Background>
            <Header title="Detalhes" action={
                guildSelected.guild.owner &&
                <BorderlessButton onPress={handleShareInvitation}>
                    <Fontisto name="share" size={24} color={theme.colors.primary} />
                </BorderlessButton>
            } />
            <ImageBackground
                source={Banner}
                style={styles.image}
            >
                <View style={styles.imageContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Load /> :
                <>
                    <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />
                    <FlatList
                        keyExtractor={item => item.id}
                        data={widget.members}
                        renderItem={({item}) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.members}
                    />
                </>
            }
            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
                </View>
            }
        </Background>
    )
}
