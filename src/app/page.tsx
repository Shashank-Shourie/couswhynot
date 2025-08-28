"use client";

import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const { user, loading } = useAuth();

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      {//<main className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        // <Card className="w-full max-w-md shadow-xl rounded-2xl">
        //   <CardHeader>
        //     <CardTitle className="text-center text-2xl font-bold">
        //       Welcome to Sudoku Clash
        //     </CardTitle>
        //   </CardHeader>
        //   <CardContent className="flex flex-col gap-4">
        //     {/* Single Player */}
        //     <Button className="w-full">Play Single Player</Button>

        //     {/* Multiplayer only if logged in */}
        //     {!loading && user && (
        //       <Button className="w-full" variant="secondary">
        //         Play Multiplayer
        //       </Button>
        //     )}

      //       {/* Message if not logged in */}
      //       {!loading && !user && (
      //         <p className="text-sm text-gray-500 text-center">
      //           Login to unlock Multiplayer mode
      //         </p>
      //       )}
      //     </CardContent>
      //   </Card>
      // </main>
      }
    </div>
  );
}
