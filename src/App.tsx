import { StatusBar, View  } from "react-native";
import { CalculatorScreen } from "./screens/CalculatorScreen";
import { styles } from "./theme/app-theme.styles";

export const App: React.FunctionComponent = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <CalculatorScreen />
    </View>
    
  )
}

export default App;
