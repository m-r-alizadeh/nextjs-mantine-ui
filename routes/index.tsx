import { IconHome,IconUser } from "@tabler/icons";
import { IRout } from "../interfaces/customTypings";

const routes: IRout[] = [
  {
    name: "Home",
    path: "/",
    icon: IconHome,
    breadcrumb: "Home",
  },
  {
    name: "User",
    path: "/user",
    icon: IconUser,
    breadcrumb: "Users",
  },
  {
    name: "About",
    path: "/user",
    icon: IconUser,
    breadcrumb: "Users",
  },
  {
    name: "Contact",
    path: "/user",
    icon: IconUser,
    breadcrumb: "Users",
  },
];

export default routes;
