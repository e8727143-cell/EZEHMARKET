import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto" id="search-container">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-ezeh-white/30" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar..."
        className="w-full bg-white/5 border border-white/10 text-ezeh-white placeholder:text-ezeh-white/30 pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ezeh-red focus:border-transparent transition-all shadow-inner"
        id="search-input"
      />
      {/* Decorative focus glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-ezeh-red to-ezeh-gold rounded-2xl opacity-0 group-focus-within:opacity-20 blur-sm -z-10 transition-opacity" />
    </div>
  );
}
