import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Sign_up from './src/Pages/Regestration/Sign_up'
import SplashScreen from './src/Components/SplashScreen/SplashScreen'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(false);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View  className="pt-7">
      {/* {loading && <SplashScreen transition={transition} />} */}
      {/* <View className={loading ? 'hidden' : ''}>
        <Sign_up />
      </View> */}
      <Sign_up/>
    </View>
  )
}

export default App;