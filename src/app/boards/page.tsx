"use client";
import { useState, useEffect } from "react";
import { useAuthenticationStatus } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

interface Board {
  id: string;
  name: string;
  created_at: string;
}

const BOARDS_QUERY = `
  query Boards {
    boards(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`;

export default function BoardsPage() {
  const { isAuthenticated } = useAuthenticationStatus();
  const [data, setData] = useState<{ boards: Board[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setLoading(true);
    setError(null);
    nhost.graphql
      .request(BOARDS_QUERY)
      .then((result) => {
        if (result.error) {
          const errorMessage = Array.isArray(result.error)
            ? result.error.map(e => e.message).join(', ')
            : (result.error as { message: string }).message || 'GraphQL error';
          setError(new Error(errorMessage));
        } else {
          setData(result.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="p-6">
        <p>Please sign in to view your boards.</p>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Boards</h1>
        <p>Loading your boards...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Boards</h1>
        <p className="text-red-600">Error loading boards: {error.message}</p>
      </main>
    );
  }

  const boards = data?.boards || [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Boards</h1>
      {boards.length === 0 ? (
        <p className="text-muted-foreground">No boards found. Create your first board to get started.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.map((board) => (
            <Card key={board.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{board.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Created {new Date(board.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
