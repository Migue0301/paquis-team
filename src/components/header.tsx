import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-yellow-300 transition">
            Team Pquis
          </NavLink>
        </h1>

        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300 transition"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300 transition"
              }
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300 transition"
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
