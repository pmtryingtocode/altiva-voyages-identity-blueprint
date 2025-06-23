
const FooterSection = () => {
  return (
    <footer className="bg-sage-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-2xl mb-4">
              ALTIVA <span className="text-sm font-sans text-sage-200 block -mt-1">VOYAGES</span>
            </div>
            <p className="text-sage-200 text-sm leading-relaxed">
              Experiências transformadoras com raízes na natureza pristina do sul da Europa.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Experiências</h4>
            <ul className="space-y-2 text-sm text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">Wellness Regenerativo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gastronomia & Ritual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Movimento & Aventura</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arquitetura & História</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Destinos</h4>
            <ul className="space-y-2 text-sm text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">Portugal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">França</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Itália</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sul da Europa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-sage-200">
              <li>Lisboa, Portugal</li>
              <li>Nova Iorque, EUA</li>
              <li>info@altivavoyages.com</li>
              <li>+351 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-200 text-sm">
            © 2024 Altiva Voyages. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sage-200 hover:text-white transition-colors text-sm">Política de Privacidade</a>
            <a href="#" className="text-sage-200 hover:text-white transition-colors text-sm">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
