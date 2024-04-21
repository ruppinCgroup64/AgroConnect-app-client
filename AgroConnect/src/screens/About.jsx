import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Switch,
} from 'react-native'
import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icon from "react-native-vector-icons/Ionicons";
import RoundedImage from '../components/RoundImage';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const t = `חקלאות ישראל הינה בעלת משמעות וחשיבות כלכלית, לאומית והתיישבותית. ענף הפירות משתרע על פני מיליון דונם, ענף הירקות על פני מאות אלפים וענף הפרחים על פני עשרות אלפים. קיימים ענפים בהם ישנה העדפה לייבוא חוץ וישנה סכנה לפגיעה בהם. כאשר תוצרת גדלה מחוץ לגבולות המדינה אין בקרה של המדינה על תהליך הגידול. לעומת זאת, על תוצרת מקומית קיימת בקרה של רשות המים, משרד החקלאות ועוד. בנוסף, ברשתות השיווק ישנם מוצרים ללא מידע על מקורם, דבר המעיד על חוסר שקיפות ועלול להדאיג את הצרכנים. כיום, החקלאים מפיצים את סחורתם בעזרת סוחרים הגובים עמלות תיווך גבוהות, הפצה ישירה, במשלוחים או בהגעת הלקוחות למשקים, המאפשרת גמישות במחיר המכירה אך דורשת מאמץ רב ומצריכה ידע במגוון טכנולוגיות, נקודות מכירה להן נקבע מיקום, מועד ומופץ טופס רכישה וירידים המאורגנים ע"י אנשים פרטיים, עיריות או מועצות אזוריות בהתנדבות או בתשלום סימלי. על מנת להבין לעומק את הכאבים של הצרכנים והחקלאים, ערכנו סקרים וראיונות. הסקרים פורסמו בעשרות קבוצות ברשתות החברתיות. על מנת לספק מענה לכאבים הללו, הוחלט לפתח את אפליקציית AgroConnect וזאת במטרה לספק פתרון טכנולוגי שיאפשר חיבור ישיר ויעיל בין חקלאים לצרכנים, ירכז בתוכו את דרכי ההפצה הישירה, ויקדם את השקיפות והאמון בין הצדדים. \n\n
המסקנות העיקריות שהגענו אליהן לאחר ניתוח הסקר לצרכן: קיים רצון רב לרכוש ישירות מחקלאי. המידע על מכירות ישירות של חקלאים נאבד בעומס הקיים ברשתות החברתיות. ישנה דאגה בנושא חוסר שקיפות מקור התוצרת ברשתות החברתיות. אמונה כי אפליקציה עשויה להקל על תהליך הרכישה הישירה. באפליקציה הצרכן יוכל:  לחפש באופן נוח ופשוט את אופציות הרכישה הישירה. לצפות במפה. לצפות במידע המוצג באופן מסודר. לאשר הגעה לירידים. לרכוש מנקודות מכירה ולדרג אותן. להגיש הצעה למכרז. המסקנות העיקריות שהגענו אליהן לאחר ניתוח הסקר והראיונות לחקלאים: קיים רצון רב למכור ישירות לצרכן. מכירה ישירה מצריכה ידע רב בשיווק ותשתית טכנולוגית שתתמוך במכירה. פרסום הירידים חלש ולא מצליח להביא הרבה קונים. קשה לצפות מראש כמה קונים יגיעו ליריד. אמונה כי אפליקציה עשויה להקל על תהליך המכירה הישירה. באפליקציה החקלאי יוכל: להצטרף לירידים באופן מקוון. ליצור נקודות מכירה. לצפות במפה.  לצפות במידע המוצג באופן מסודר. לצפות בחקלאים אחרים ולאפשר שיתופי פעולה. ליצור מכרזים ולמכור בטווח המיידי את התוצרת. \n\n במהלך איסוף הנתונים גילינו כי יש לנו משתמש נוסף רלוונטי והוא מארגן ירידים. בנוסף עלה כי פרסום הירידים חלש ולא מצליח להביא מספיק צרכנים, אין למארגן היריד מידע אודות כמות הצרכנים המתכננים להגיע, התיעוד של החקלאים אשר מגיעים אינו נוח ולעיתים לצרכנים ולחקלאים חסר מידע אודות היריד.  באפליקציה מארגן היריד יוכל: ליצור ולפרסם ירידים. לצפות בחקלאים באזור וליצור שיתופי פעולה. לקבל אישורי הגעה מצרכנים ולצפות בחקלאים שאישרו הגעה ליריד שלהם ובכמויות המוצרים, כך יוכלו להבין את סדר גודל האירוע וכמות משתתפיו. \n\n
האפליקציה שלנו חינמית ופונה לצרכנים המעוניינים לרכוש באופן ישיר מחקלאים, לחקלאים המעוניינים למכור לצרכן הישיר ולמארגני ירידים. האפליקציה תיתן מענה לכאבים העיקריים של הצרכנים, החקלאים ושל מארגני הירידים ותהווה פלטפורמה נוחה, מסודרת ונגישה למידע ופעילות אודות המכירה הישירה מהחקלאי לצרכן. באופן אינטואיטיבי ונוח יותר מבעבר יוכלו המשתמשים לבצע פעולות בתהליך הרכישה הישירה בהתאם לצורך שלהם.
`;

export default function About() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <AppBar
                color={theme.bg}
                title="אודות"
                titleStyle={[
                    style.apptitle,
                    { color: theme.txt, textAlign: "center" },
                ]}
                style={{ paddingBottom: 15 }}
                elevation={0}
                leading={
                    <TouchableOpacity onPress={() => navigation.goBack() }>
                        <Icon
                            name="arrow-back"
                            color={theme.txt}
                            size={30}
                            style={{
                                transform: [{ scaleX: -1 }],
                            }}
                        />
                    </TouchableOpacity>
                }
                trailing={<View style={{ width: 30, height: 30, opacity: 0 }} />}
            />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View>
                    <Text style={[style.s18, { textAlign: "center", color: theme.txt, writingDirection: "rtl" }]}> {t} </Text>
                    <Text style={[style.s18, { textAlign: "center", fontSize: 25, color: theme.txt, writingDirection: "rtl" }]}> נוצר ע"י </Text>
                    <View style={{ paddingTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <RoundedImage url="data:image/jpeg;base64,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" wid={width / 3.6} hei={height / 8} />
                    </View>
                    <Text style={[style.s18, { textAlign: "center", color: theme.txt, writingDirection: "rtl" }]}> עמית דוכן </Text>
                    <View style={{ paddingTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <RoundedImage url="https://media.licdn.com/dms/image/D4D35AQEaOBJz4yM-TQ/profile-framedphoto-shrink_800_800/0/1707056756112?e=1714262400&v=beta&t=oM7XzGNDDUL1Yl1vLheCgwUMunMT5dsgo-guHDm4mI8" wid={width / 3.6} hei={height / 8} />
                    </View>
                    <Text style={[style.s18, { textAlign: "center", color: theme.txt, writingDirection: "rtl" }]}> עדי חדד </Text>
                    <View style={{ paddingTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <RoundedImage url="https://media.licdn.com/dms/image/D4D03AQFGqGLUWnVcFQ/profile-displayphoto-shrink_200_200/0/1677437510929?e=1718841600&v=beta&t=BXsL5kD_CObe7_GtTGESCQs8w0S5gRWAtzr-YmxTRVs" wid={width / 3.6} hei={height / 8} />
                    </View>
                    <Text style={[style.s18, { textAlign: "center", color: theme.txt, writingDirection: "rtl" }]}> שירי נוסל</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )//return
}//Settings