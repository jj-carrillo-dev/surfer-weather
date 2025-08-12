export default function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-12 h-12 text-blue-600 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M2 16a5 5 0 0 0 10 0c0-1.126-.372-2.164-1-3l-4-4 4-4c.628.836 1 1.874 1 3a5 5 0 0 0 10 0c0-1.126-.372-2.164-1-3l-4-4 4-4c.628.836 1 1.874 1 3a5 5 0 0 0 10 0" />
    </svg>
  );
}