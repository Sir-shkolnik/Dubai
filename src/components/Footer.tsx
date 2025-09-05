import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Dubai Skyline Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/dubai city skyline.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <img src="/footer_image.png" alt="Let's Get Moving Dubai" className="h-16 w-auto mx-auto mb-4" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span>Sales@Letsgetmovingdubai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <span>+971-56-142-9800</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span>110 Umm Hurair Rd - Oud Metha Al Fajer Complex Dubai, UAE</span>
              </div>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">⭐</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">🎵</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">@</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm font-bold">X</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">▶</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm font-bold">P</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80 mb-2">Copyright Reserved © 2025 letsgetmovingdubai.com</p>
          <p className="text-white/60 text-sm">Website developed by Udi Shkolnik</p>
        </div>
      </div>
    </footer>
  );
}
