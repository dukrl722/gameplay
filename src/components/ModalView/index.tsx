import React, {ReactNode, useState} from "react";
import {
    ImageBackground,
    View,
    Text,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    ModalProps,
    Modal,
    TouchableWithoutFeedback
} from "react-native";

import {styles} from "./style";
import {Background} from "../Background";

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({children, closeModal, ...rest} : Props) {

    return (
        <Modal transparent animationType="slide" statusBarTranslucent {...rest} style={styles.container}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
