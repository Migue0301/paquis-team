export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="container mx-auto px-6 text-center text-sm font-light">
        <p>© {new Date().getFullYear()} <span className="font-semibold">Team Pquis</span>. Todos los derechos reservados.</p>
        <p className="mt-1 text-yellow-300 italic">Vamos por la 16 🦅</p>
      </div>
    </footer>
  );
}
