import { Button } from "@/components/ui/button";
import { UserButton, UserProfile, auth } from "@clerk/nextjs";
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-[#519188] to-[#a8c8c4]">
      <p className="absolute top left-1/4 -translate-x-3/4 text-6xl pt-10 text-[#39665f] font-extralight">
        SAFE SPACE
      </p>

      <div className="flex justify-end pt-10 pr-10 pl-5">
        <Button
          variant="link"
          className="pr-10 text-xl text-[#182b29] font-light"
        >
          About
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 pb-10 text-7xl font-light">hi, wanna talk?</h1>
          </div>

          <div className="flex mt-2">
            {isAuth && (
              <Link href="/dashboard">
                <Button>
                  Go to Dashboard <ArrowRight className="ml-2" />
                </Button>
              </Link>
            )}
          </div>

          <div className="w-full mt-4">
            {isAuth ? (
              <h1>calendar</h1>
            ) : (
              <div className="flex space-x-4">
                <Link href="/sign-in">
                  <Button variant="secondary">
                    Notes To Yourself
                    <LogIn className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Button>
                  Quick Journaling Session
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
