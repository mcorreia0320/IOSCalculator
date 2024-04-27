import { Text, View } from "react-native";
import { colors, styles } from "../theme/app-theme.styles";
import CalculatorButton from "../components/CalculatorButton";
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen: React.FunctionComponent = () => {

  const {
    number, 
    prevNumber,
    buildNumber, 
    clean, 
    deleteOperation, 
    toggleSign,
    addOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    calculateResult
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>

      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text 
          style={styles.mainResult}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {number}
        </Text>
        <Text 
          style={{...styles.subResult, opacity: prevNumber !== '0' ? 1 : 0}}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={clean} label="C" color= {colors.lightGray} blackText/>
        <CalculatorButton onPress={toggleSign} label="+/-" color= {colors.lightGray} blackText/>
        <CalculatorButton onPress={deleteOperation} label="DEL" color= {colors.lightGray} blackText/>
        <CalculatorButton onPress={divideOperation} label="÷"  color= {colors.orange}/>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("8")} label="8" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("9")} label="9" color= {colors.darkGray}/>
        <CalculatorButton onPress={multiplyOperation} label="×"  color= {colors.orange}/>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("5")} label="5" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("6")} label="6" color= {colors.darkGray}/>
        <CalculatorButton onPress={subtractOperation} label="-"  color= {colors.orange}/>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("2")} label="2" color= {colors.darkGray}/>
        <CalculatorButton onPress={() => buildNumber("3")} label="3" color= {colors.darkGray}/>
        <CalculatorButton onPress={addOperation} label="+"  color= {colors.orange}/>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("0")} label="0" color= {colors.darkGray} doubleSize/>
        <CalculatorButton onPress={() => buildNumber(".")} label="." color= {colors.darkGray}/>
        <CalculatorButton onPress={calculateResult} label="="  color= {colors.orange}/>
      </View>

    </View>
  )
}

export default CalculatorScreen;
