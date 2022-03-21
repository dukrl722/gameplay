import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";
import {getBottomSpace} from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: theme.colors.secondary50
    }
});