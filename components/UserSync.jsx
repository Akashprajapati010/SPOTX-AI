"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";

export default function UserSync() {
  const { isSignedIn } = useUser();
  const { mutate: storeUser } = useConvexMutation(api.users.store);

  useEffect(() => {
    if (isSignedIn) {
      storeUser(); // 🔥 create user in DB
    }
  }, [isSignedIn]);

  return null;
}