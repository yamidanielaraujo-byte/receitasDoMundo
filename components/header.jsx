// Header.js
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Title on the left */}
        <Link href="/" className="text-3xl font-bold hover:text-gray-300" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Receitas do Mundo
        </Link>

        {/* Navigation on the right */}
        <nav className="flex items-center space-x-6">
          <Link href="/receitas" className="hover:text-gray-300">
            Receitas
          </Link>
          <span className="text-gray-400">|</span>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:text-gray-300">
              Iniciar Sessão
            </Link>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;