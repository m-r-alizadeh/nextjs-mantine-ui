import { useMantineColorScheme, useMantineTheme } from "@mantine/styles";
import useSideBarStore from "../../../store/sideBarStore";
import useThemeStore from "../../../store/themeStore";
import { useSpotlight } from "@mantine/spotlight";
import { Group, ActionIcon, Tooltip, Input, Kbd, Paper } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import {
  IconBookmark,
  IconSearch,
  IconLayoutSidebarRightExpand,
  IconLayoutSidebarRightCollapse,
  IconMoon,
  IconSun,
} from "@tabler/icons";
import { AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@mantine/hooks";
import { useWidth } from "../../../hooks/useWidth";

export function UiHeader() {
  const { sideBarOpen, setSideBarOpen } = useSideBarStore();
  const windowWidth = useWidth();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const spotLight = useSpotlight();
  const theme = useMantineTheme();

  const rightSection = (
    <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
      <Kbd style={{ fontSize: "12px" }}>Ctrl/CMD</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );
  useHotkeys([["mod+k", () => spotLight.openSpotlight()]]);

  return (
    <div
      style={{
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <Group position="apart">
        {windowWidth > 768 ? (
          <ActionIcon
            variant="default"
            onClick={() => setSideBarOpen?.(!sideBarOpen)}
            size={30}
          >
            {sideBarOpen ? (
              <IconLayoutSidebarRightCollapse />
            ) : (
              <IconLayoutSidebarRightExpand />
            )}
          </ActionIcon>
        ) : null}

        <Paper radius={0} style={{ backgroundColor: "transparent" }}>
          <Input
            icon={<IconSearch size={16} />}
            placeholder="جستجو کنید"
            width="600px"
            rightSectionWidth={70}
            styles={{ rightSection: { pointerEvents: "none", width: "116px" } }}
            rightSection={rightSection}
            onClick={spotLight.openSpotlight}
            onChange={spotLight.openSpotlight}
          />
        </Paper>
        <Group spacing="xs">
          <ActionIcon variant="default" size={30}>
            <IconBookmark />
          </ActionIcon>

          <AnimatePresence exitBeforeEnter initial={false}>
            <Tooltip
              width={80}
              withArrow
              transition="fade"
              transitionDuration={200}
              label="روشن | تیره"
            >
              <ActionIcon
                key={colorScheme === "dark" ? "dark-icon" : "light-icon"}
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
              </ActionIcon>
            </Tooltip>
          </AnimatePresence>
        </Group>
      </Group>
    </div>
  );
}
