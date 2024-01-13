import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    container: {
        paddingTop: normalize(50, "height"),
        paddingHorizontal: normalize(30, "width"),
        backgroundColor: '#E0DFDD',
        flex: 1,
    },
    headerTitle: {
        fontSize: 50,
        color: '#000000',
        marginTop: 25
    },
    headerProfile: {
        width: 300,
        height: 100,
    },
    headerAboutGroup: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: 25
    },
    headerAboutPurpose: {
        width: 125,
        fontSize: 12,
        color: '#000000',
    },
    headerAboutName: {
        fontSize: 40,
        textAlign: "right"
    },
    scrollNotif: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between"
    },
    scrollNotifImg: {
        width: 65,
        height: 65,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollNotifText: {
        fontSize: 12,
        width: 150,
        textAlign: "right"
    },
    projectTitleContainer: {
        marginTop: 25,
        fontSize: 20,
        color: "#000000"
    },
    projectContainer: {
        paddingVertical: 20,
    },
    projectImage: {
        width: "100%",
        height: 175,
    },
    descContainer: {
        marginTop: 10,
        gap: 3,
    },
    titleProject: {
        fontSize: 16,
        color: "#000000"
    },
    descProject: {
        fontSize: 14,
        color: "#000000"
    },
    projectBtn: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    projectBtnText: {
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    footerContainer: {
        flexDirection: "row",
        paddingBottom: 25,
        justifyContent: "space-between",
        alignItems: "center",
    },
    footer: {
        borderBottomWidth: 1,
        borderColor: "#000000",
        width: 75,
        height: 35,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        color: "#000000",
    }
});

export default styles;