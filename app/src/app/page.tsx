import React from "react";
import { getServerAuthSession } from "@/server/auth";
import { permanentRedirect } from "next/navigation";
const Page = async () => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return permanentRedirect("/sign-in");
  }

  return <div></div>;
};

export default Page;
