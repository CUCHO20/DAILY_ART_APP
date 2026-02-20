import { useColorScheme } from '@/hooks/use-color-scheme'; // tu hook ya creado
import { View, ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const colorScheme = useColorScheme().colorScheme ?? 'light'; // fallback

  const backgroundColor = colorScheme === 'dark' ? darkColor ?? '#000' : lightColor ?? '#fff';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}