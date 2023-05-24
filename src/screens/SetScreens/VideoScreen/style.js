import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    mainPlayerView: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    viewVideo: {
        height: height / 3.85,
        width: '100%',
        backgroundColor: 'gray'
    },
    postTitle: {
        width: 300,
        maxHeight: 100,
        fontSize: 15,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        color: '#030303',
        fontFamily: 'Heavitas',
    },
    postName: {
        paddingLeft: 15,
        fontSize: 18,
        color: '#111111',
        paddingBottom: 10,
        fontFamily: 'Heavitas'
    },
    postTypeTwo: {
        fontSize: 14,
        color: '#FFFFFF',
        alignItems: 'center',
        marginLeft: 10
    },
    postType: {
        paddingLeft: 10,
        fontSize: 18,
        color: '#FFFFFF'
    },
    contentAvaliar: {
        width: '90%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FF7410',
        flexDirection: 'row',
        borderRadius: 10
    },
    videoPlayer: {
        width: '100%',
        height: '100%'
    },
    videoFav: {
        paddingStart: 340,
    },
    favorite: {
        height: 40,
        width: 40,
        backgroundColor: '#585555',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        left: 310,
        bottom: 60
    },
    desciView: {
        paddingBottom: 20,
        paddingLeft: 10,
        height: 40,
    },
    desci: {
        fontSize: 16,
        fontWeight: '400',
        color: '#111111',
        width: 290,
        height: 75,
    },
    cardVideo: {
        height: 200,
        backgroundColor: '#EFEFF0',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#AFB1B6'
    },
    titleFlat: {
        paddingLeft: 25,
        color: '#111111'
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44, 25, 2, 0.72)',
        width: '100%',
        height: '100%',
    },
    loadingText: {
        padding: 20,
        fontSize: 18,
        color: '#ffffff',
    },
})

export default styles