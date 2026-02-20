// Pure presentational — no interactivity, no 'use client' needed
export default function AuthBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
      <div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
