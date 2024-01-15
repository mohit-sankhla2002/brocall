"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/react";
const SignInCard = () => {
  return (
    <Card className="mx-4 mt-32">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign In to BroCall</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="flex w-full gap-2"
            variant="outline"
            onClick={() => signIn("discord")}
          >
            <FaDiscord />
            Sign In With Discord
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
