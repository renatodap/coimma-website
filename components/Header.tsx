// Header component for COIMMA website
export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        {/* Replace with actual logo */}
        <div className="h-10 w-32 bg-gray-200 flex items-center justify-center">
          <span className="font-bold text-xl">COIMMA</span>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/institucional" className="hover:text-blue-600 font-medium">Institucional</a></li>
          <li><a href="/produtos" className="hover:text-blue-600 font-medium">Produtos</a></li>
          <li><a href="/servicos" className="hover:text-blue-600 font-medium">Serviços</a></li>
          <li><a href="/educacional" className="hover:text-blue-600 font-medium">Educacional</a></li>
          <li><a href="/loja" className="hover:text-blue-600 font-medium">Loja Virtual</a></li>
          <li><a href="/contato" className="hover:text-blue-600 font-medium">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
