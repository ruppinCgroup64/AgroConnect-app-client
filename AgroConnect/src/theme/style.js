import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";
import theme from "./theme";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 20
    },
    title: {
        fontSize: 40,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    subtitle: {
        fontSize: 32,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    t1: {
        fontSize: 20,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    b10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    s10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    r12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    s12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    m12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Medium',
    },
    b12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold',
    },

    r14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    m14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Medium',
    },
    s14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    b14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold',
    },
    r16: {
        fontSize: 16,
        color: Colors.disable,
        // fontFamily: 'Urbanist-Regular'
    },
    s16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    m16: {
        fontSize: 16,
        color: Colors.disable,
        // fontFamily: 'Urbanist-Medium'
    },
    b16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold'
    },
    r18: {
        fontSize: 18,
        color: Colors.disable,
        // fontFamily: 'Urbanist-Regular'
    },
    m18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-Medium',
    },
    s18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    b18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold'

    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,

    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Urbanist-Bold'
    },
    indicator: {
        borderColor: '#BDBDBD',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#BDBDBD',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: Colors.bg
    },

    txtinput: {
        paddingHorizontal: 15,
        color: Colors.disable,
        height: 55,
        borderRadius: 15,
        borderWidth: 1
    },

    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        // fontFamily: 'Urbanist-Regular'
    },

    btn1: {

        alignItems: 'center',
        // paddingVertical:15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 55


    },
    btntxt1: {
        fontSize: 16,
        color: Colors.active,
        paddingLeft: 15,
        // fontFamily: 'Urbanist-Regular'
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 50,
        // flex: 1
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    btnoutline: {
        borderColor: Colors.bord,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
        width: width / 4.5,
    },

    b3: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1
    },
    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: Colors.primary
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderColor: Colors.primary, borderWidth: 2
    },
    ctext: {
        fontSize: 16,
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.primary,
    },
    cts: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Urbanist-SemiBold'
    },
    categoryText: {
        fontSize: 16,
        color: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        fontFamily: 'Urbanist-SemiBold'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'space-between',

    },

    s1:{
        flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:Colors.primary
    },
    otp:{
        height: 50, width: 50, borderRadius: 10,  textAlign: 'center',fontSize:18,fontFamily: 'Urbanist-Bold', color:theme.txt
    }

}
);