import {StyleSheet} from "react-native"

export const styles = StyleSheet.create ({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    image: {
        width: 122,
        height: 122,
    },

    about: {
        flex: 1,
        gap: 5,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
    },

    description: {
        fontSize: 12,
    },

    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 22,
    }

})