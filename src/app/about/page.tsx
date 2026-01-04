"use client"

// src/app/about/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">About Kanban Board</h1>

        <Card className="max-w-md w-full shadow-lg">
          <CardHeader>
            <CardTitle>About Kanban Board</CardTitle>
            <CardDescription>
              A simple Trello-style Kanban board built with Next.js, TypeScript,
              Tailwind, Apollo GraphQL, and Nhost.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              This page shows a simple Card component from Shadcn/ui with a
              button that logs a message when clicked.
            </p>
            <Button onClick={() => console.log("clicked")}>Click Me</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
