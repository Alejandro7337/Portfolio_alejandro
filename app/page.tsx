import homeData from "@/content/home.json";
import { HomeClient } from "@/components/HomeClient";
import type { HomepageQuery } from "@/tina/__generated__/types";

export default function Page() {
  const data = { homepage: homeData } as unknown as HomepageQuery;

  return (
    <HomeClient
      data={data}
      variables={{ relativePath: "home.json" }}
      query=""
    />
  );
}
