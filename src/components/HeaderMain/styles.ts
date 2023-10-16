import {StyleSheet, Dimensions} from "react-native";

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    headerMain: {

        height: height * 0.072,
        backgroundColor: '#F7D102',
        flexDirection: 'row',
    },
    headerOne: {
        flex:4,
        height:height * 0.072,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,

    },
    headerTwo: {
        flex:1,
        height: height * 0.072,
        backgroundColor: '#F7D102',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 30,
        height: 30,
        marginHorizontal: 10,

    },
    headerOneView: {
        gap: 10,
        flex: 1,
        borderLeftColor: '#F3F2FD',
        borderLeftWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});

export default styles;