export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-50/80 backdrop-blur-sm">
      <svg
        className="w-44 h-44 text-rose-700"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .spinner_line {
              animation: spinner_fade 1.2s linear infinite;
            }
            @keyframes spinner_fade {
              0% { opacity: 1; }
              100% { opacity: 0.15; }
            }
          `}
        </style>
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="11"
            y="2"
            width="2"
            height="5"
            rx="1"
            className="spinner_line fill-current"
            transform={`rotate(${i * 30} 12 12)`}
            style={{ animationDelay: `${(i * 1.2) / 12 - 1.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}