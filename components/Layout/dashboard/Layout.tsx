import {
  ColorSchemeProvider,
  MantineProvider,
  AppShell,
  Header,
  Paper,
  createEmotionCache,
  ColorScheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { SpotlightProvider } from "@mantine/spotlight";

import rtlPlugin from "stylis-plugin-rtl";
import { Search } from "tabler-icons-react";
import SpotLightActions from "../../../helpers/helpers";
import { UiComponent } from "../../../interfaces/customTypings";
import BreadcrumbList from "../../Shared/BreadcrumbList";
import Sidebar from "./Sidebar";
import { UiHeader } from "./UiHeader";
import { useLocalStorage } from "@mantine/hooks";

interface LayoutProps {
  children: React.ReactNode;
  data: UiComponent[];
}
export function Layout({ children, data }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark" as ColorScheme,
    getInitialValueInEffect: true,
  });


  const rtlCache = createEmotionCache({
    key: "mantine-rtl",
    stylisPlugins: [rtlPlugin],
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
  };

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
          theme={{
            fontFamily: "Anjoman,-apple-system, Roboto, sans-serif;",
            dir: "rtl",
            colorScheme,
          }}
        >
          <SpotlightProvider
            actions={SpotLightActions}
            searchPlaceholder="Search..."
            shortcut="mod + shift + 1"
            highlightQuery
            nothingFoundMessage="Nothing found..."
            searchIcon={<Search size={18} />}
          >
            <ModalsProvider>
              <NotificationsProvider position="top-right">
                <AppShell
                  padding="xs"
                  header={
                    <Header height={60} p="xs">
                      <UiHeader />
                    </Header>
                  }
                  navbar={<Sidebar />}
                >
                  <Paper p="xs" mb={10}>
                    <BreadcrumbList />
                  </Paper>
                  {children}
                </AppShell>
              </NotificationsProvider>
            </ModalsProvider>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
