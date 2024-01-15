import SignInCard from "@/components/SignInCard";
import { getServerAuthSession } from "@/server/auth";
import { permanentRedirect } from "next/navigation";
const Page = async () => {
  const session = await getServerAuthSession();
  if (!session || !session.user) {
    return <div className="mx-auto max-w-sm"><SignInCard /></div> 
  }
  return permanentRedirect("/");
};

export default Page;
