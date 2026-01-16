import { Button } from "@/components/ui/button";
import { Check, X, Crown, Shield, Zap, Eye, MessageCircle, TrendingUp } from "lucide-react";

interface PremiumPlansSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const features = [
  { name: "Publicar inmuebles", free: true, pro: true, proPlus: true },
  { name: "Editar anuncios en cualquier momento", free: true, pro: true, proPlus: true },
  { name: "Anuncios siempre visibles", free: false, pro: true, proPlus: true },
  { name: "Sin pausas de 30 días", free: false, pro: true, proPlus: true },
  { name: "Leads por correo ilimitados", free: false, pro: true, proPlus: true },
  { name: "Leads por WhatsApp ilimitados", free: false, pro: true, proPlus: true },
  { name: "Destacados incluidos", free: false, pro: false, proPlus: true },
  { name: "Mayor posición en búsquedas", free: false, pro: false, proPlus: true },
];

const PremiumPlansSection = ({ cartUrl, whatsappUrl }: PremiumPlansSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Compara y elige tu <span className="text-emerald-600">nivel de visibilidad</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Desde publicación gratuita hasta máxima exposición premium
          </p>
        </div>

        {/* Visual Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {/* Gratis */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center relative">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-6 h-6 text-gray-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Gratis</h3>
            <p className="text-xs text-gray-500 mb-4">Publicación básica</p>
            
            {/* Visual indicator */}
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-gray-400 rounded-full" style={{ width: '25%' }} />
            </div>
            <p className="text-xs text-gray-400">Visibilidad limitada</p>
          </div>

          {/* Plan Pro */}
          <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Crown className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Plan Pro</h3>
            <p className="text-xs text-gray-500 mb-4">Visibilidad continua</p>
            
            {/* Visual indicator */}
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '65%' }} />
            </div>
            <p className="text-xs text-emerald-600 font-medium">3x más alcance</p>
          </div>

          {/* Plan Pro + Destacados */}
          <div className="bg-emerald-800 border-2 border-emerald-700 rounded-xl p-5 text-center relative shadow-lg">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
              POPULAR
            </span>
            <div className="w-12 h-12 bg-emerald-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="font-bold text-white mb-1">Pro + Destacados</h3>
            <p className="text-xs text-emerald-200 mb-4">Máxima visibilidad</p>
            
            {/* Visual indicator */}
            <div className="h-2 bg-emerald-900 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-xs text-emerald-300 font-medium">5x más alcance</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
            <div className="p-3 text-xs font-medium text-gray-500">Característica</div>
            <div className="p-3 text-xs font-medium text-gray-500 text-center">Gratis</div>
            <div className="p-3 text-xs font-medium text-emerald-600 text-center">Pro</div>
            <div className="p-3 text-xs font-medium text-emerald-700 text-center bg-emerald-50">Pro + Destacados</div>
          </div>
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 ${index !== features.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="p-3 text-xs text-gray-700">{feature.name}</div>
              <div className="p-3 flex justify-center">
                {feature.free ? (
                  <Check className="w-4 h-4 text-gray-400" />
                ) : (
                  <X className="w-4 h-4 text-gray-300" />
                )}
              </div>
              <div className="p-3 flex justify-center">
                {feature.pro ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <X className="w-4 h-4 text-gray-300" />
                )}
              </div>
              <div className="p-3 flex justify-center bg-emerald-50/50">
                {feature.proPlus ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <X className="w-4 h-4 text-gray-300" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Benefits Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Más visitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Leads más rápido</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">WhatsApp ilimitado</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            <a href={cartUrl} target="_blank" rel="noopener noreferrer">
              Ver planes y precios
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Asesoría personalizada
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlansSection;
