// src/app/providers.tsx
"use client";
import { PropsWithChildren } from "react";
import { NhostProvider } from "@nhost/nextjs";
import { ApolloProvider } from "@apollo/client/react";
import { nhost } from "@/lib/nhost";
import { makeClient } from "@/lib/apollo-client";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={makeClient()}>
        {children}
      </ApolloProvider>
    </NhostProvider>
  );
}
