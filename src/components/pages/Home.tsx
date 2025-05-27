import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-800 text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Bienvenidos al <span className="text-yellow-300">Team Pquis</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl font-light mb-8">
        Vamos por la 16
      </p>

    </section>
  );
}
