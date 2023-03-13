import { Anchor, Breadcrumbs } from "@mantine/core";
import { useRouter } from "next/router";
import { ILinkPath } from "../../interfaces/customTypings";



export default function BreadcrumbList() {
  const router = useRouter();
  const linkPath = router.asPath.split("/");
  if (linkPath.length === 0) return <Anchor size="sm">خانه</Anchor>;
  linkPath.shift();
  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });

  return (
    <Breadcrumbs>
      {pathArray.map((item: ILinkPath, index) => (
        <Anchor size="sm" key={index}>
          {item.breadcrumb === "" ? "خانه" : item.breadcrumb}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
