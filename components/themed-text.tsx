import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text, TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const colorScheme = useColorScheme().colorScheme ?? 'light';

  let color = colorScheme === 'dark' ? darkColor ?? '#fff' : lightColor ?? '#000';

  let fontSize = 16;
  let fontFamily = 'System';
  let fontWeight: 'normal' | 'bold' | '600' = 'normal';

  switch (type) {
    case 'title':
      fontSize = 32;
      fontWeight = 'bold';
      break;
    case 'defaultSemiBold':
      fontWeight = '600';
      break;
    case 'subtitle':
      fontSize = 20;
      break;
    case 'link':
      color = colorScheme === 'dark' ? '#0a7ea4' : '#007AFF';
      break;
  }

  return (
    <Text
      style={[{ color, fontSize, fontWeight, fontFamily }, style]}
      {...rest}
    />
  );
}