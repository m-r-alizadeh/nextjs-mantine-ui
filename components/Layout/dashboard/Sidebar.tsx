import { ActionIcon, Group, Navbar, ScrollArea, Title, useMantineTheme } from "@mantine/core";
import useSideBarStore from "../../../store/sideBarStore";
import { useEffect, useState } from "react";
import routes from "../../../routes";
import { NavbarStyles } from "./NavbarStyles";
import { useWidth } from "../../../hooks/useWidth";

export default function Sidebar() {
  const { sideBarOpen, setSideBarOpen } = useSideBarStore();
  const [active, setActive] = useState("/");
  const { classes, cx } = NavbarStyles();
  const windowWidth = useWidth();
  const theme = useMantineTheme();

  useEffect(() => {
    const sidebarState = localStorage.getItem("sidebar-state") || "true";
    if (sidebarState === "false") {
      setSideBarOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let links = routes.map((item, index) => (
    <a
      key={index}
      href={item.path}
      className={cx(classes.link, {
        [classes.linkActive]: item.path === active,
      })}
      onClick={(event: any) => {
        event.preventDefault();
        setActive(item.name);
      }}
    >
      <Group>
        <ActionIcon title={item.name}>
          <item.icon />
        </ActionIcon>

        {sideBarOpen && <Title order={6}>{item.name}</Title>}
      </Group>
    </a>
  ));

  return (
    <>
      <Navbar
        width={{ base: sideBarOpen && windowWidth > 768 ? 250 : 73}}
        height="calc(100vh - 60px)"
        style={{padding: theme.spacing.xs}}
      >
        <Navbar.Section component={ScrollArea} grow>
          {links}
        </Navbar.Section>
      </Navbar>
    </>
  );
}
