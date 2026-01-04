"use client"

import { Button } from "@/components/ui/button";
import React from "react";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

export default function DevPage() {
  return (
    <main className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Under Construction 🏗️</h1>
        <p className="text-gray-700 mb-4">
          Index page coming soon...
        </p>
        <Button onClick={() => {console.log(process.env.NEXT_PUBLIC_API_BASE)}}> Click me to test if read from .env works</Button>
      </div>

    </main>
  );
}
