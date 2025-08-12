// app/page.tsx

export default function Home() {
  // We'll define a function that explicitly expects a 'string' argument.
  function greet(message: string) {
    console.log(message);
  }

  // Now, we'll try to call the function with a number instead of a string.
  // This should cause a TypeScript type error.
  greet(123);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Tailwind CSS Text!</h1>
        <p className="text-gray-700">The text should be styled.</p>
      </div>
    </div>
  );
}