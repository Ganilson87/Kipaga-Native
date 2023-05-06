import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>

          <Tabs.Screen
        name="payments"
        options={{
          title: 'Pagamentos',
          headerRight: () => (
            <Link href="/notificacoes" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    color="#6A5ACD"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color="#6A5ACD" />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
           title: 'Kipaga',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color="#6A5ACD" />,
          headerRight: () => (
            <Link href="/notificacoes" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    color="#6A5ACD"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Perfil',
          headerRight: () => (
            <Link href="/notificacoes" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    color="#6A5ACD"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color="#6A5ACD" />,
        }}
      />
      
    </Tabs>
  );
}
