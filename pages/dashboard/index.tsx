import { Button } from "@mantine/core";
import useThemeStore from "../../store/themeStore";

export default function Dashboard() {
  const { colorScheme } = useThemeStore();
  return (
    <>
      <div>Color:{colorScheme}</div>
  

      <Button component="a" href="/">
        بازگشت
      </Button>
    </>
  );
}
