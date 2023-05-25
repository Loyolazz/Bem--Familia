import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    favoriteContainer: {
        width: 350,
        height: 120,
    },
    newCardTextAuthor: {
        fontSize: 12,
        fontFamily: 'IstokWeb-Bold',
        fontWeight: 'bold',
        color: '#111111',
        lineHeight: 24,
    },
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    noteIcon: {
        paddingRight: 2,
    },
    noteText: {
        fontSize: 12,
        fontFamily: 'IstokWeb-Bold',
        fontWeight: 'bold',
        color: '#111111',
    },
    newCardContainer: {
        backgroundColor: '#FFFFFF',
        width: 370,
        height: 307,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    newCardImage: {
        width: 350,
        height: 230,
        borderWidth: 1,
        borderColor: '#111111'
    },
    image: {
        width: 90,
        height: 80,
        borderRadius: 10,
    },
    newCardDetailsContainer: {
        width: 360,
        height: 100,
        paddingTop: 5,
        paddingLeft: 5,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    newCardTextTitle: {
        fontSize: 16,
        fontFamily: 'IstokWeb-Bold',
        fontWeight: 'bold',
        color: '#093D73',
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111111',
        marginBottom: 5,
    },
    favoriteTextTitle: {
        color: '#111111',
    },
    locContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locIcon: {
        paddingRight: 9,
    },
    textLoc: {
        fontSize: 14,
        color: '#111111',
    },
    favoriteTextLoc: {
        color: '#111111',
    },
});

export default styles;