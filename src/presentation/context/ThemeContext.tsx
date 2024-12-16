/* eslint-disable react/react-in-jsx-scope */
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren ) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setcurrentTheme] = useState<ThemeColor>('light');
    const isDark = currentTheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    useEffect(() => {
      if(colorScheme === 'dark') {
        setcurrentTheme('dark');
      } else {
        setcurrentTheme('light');
      }
    }, [colorScheme]);


    // useEffect(() => {
    //   const subscription = AppState.addEventListener('change', nextAppState => {
    //     const colorScheme = Appearance.getColorScheme();
    //     setcurrentTheme( colorScheme === 'dark' ? 'dark' : 'light');
    //   });

    //   return () => {
    //     subscription.remove();
    //   };
    // }, []);

    const setTheme = (theme: ThemeColor) => {
        setcurrentTheme(theme);
    };

    return (
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                colors: colors,
                setTheme: setTheme,
                isDark: isDark,
            }}
            >
                {children}
            </ThemeContext.Provider>
      </NavigationContainer>
    );
};
