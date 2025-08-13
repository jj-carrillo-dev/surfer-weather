export default function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-12 h-12 ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 32c4-8 16-8 20 0 2 4 8 4 10 0 2-4 8-4 10 0"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 32c2 4 8 4 10 0"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}