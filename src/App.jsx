import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md w-64">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count + 1)} className="bg-green-500 hover:bg-green-600">
          Add
        </Button>
        <Button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600">
          Subtract
        </Button>
        <Button onClick={() => setCount(0)} className="bg-gray-500 hover:bg-gray-600">
          Reset
        </Button>
      </div>
    </div>
  );
}
