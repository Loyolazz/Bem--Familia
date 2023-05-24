import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    backContainer: {
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: '#FF6B00',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    listContainer: {
        top: 5,
        paddingBottom: 60
    },
    iconBorder:{
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        right: 100

        
      },
});

export default style;