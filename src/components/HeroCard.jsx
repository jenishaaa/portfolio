export default function HeroCard({ children }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/10">
      {children}
    </div>
  );
}
