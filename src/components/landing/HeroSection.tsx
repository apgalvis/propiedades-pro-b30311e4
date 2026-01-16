import { Eye, TrendingUp, Zap, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("visibility-callout");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                <Eye className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="w-4 h-4 text-amber-900" />
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Si te ven más,{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              te contactan más
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-emerald-100/90 mb-4 max-w-2xl mx-auto">
            La visibilidad gratuita es temporal.
          </p>

          {/* Value proposition */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm md:text-base font-medium border border-white/20 mb-10">
            <Zap className="w-5 h-5 text-amber-400" />
            Mantén tu anuncio activo y visible con el nivel adecuado
          </div>

          {/* Scroll indicator */}
          <div className="mt-8">
            <button 
              onClick={scrollToNext}
              className="inline-flex flex-col items-center gap-2 text-emerald-200/60 hover:text-emerald-100 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider">Descubre cómo</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
