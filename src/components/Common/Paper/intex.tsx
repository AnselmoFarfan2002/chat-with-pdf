import type React from "react";

export default function Paper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-600/90 p-5 rounded-2xl  w-full text-center font-medium text-gray-300">
      <div className="rounded-lg border-2 border-dashed p-5 border-gray-400 text-center flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
