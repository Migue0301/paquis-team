import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aquí podrías enviar los datos a una API o backend
    setSubmitted(true);
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-teal-700 to-blue-800 px-6 py-12">
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl max-w-lg w-full p-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
          Contáctanos <span className="text-yellow-400">Team Pquis</span>
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-gray-900 placeholder-gray-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-gray-900 placeholder-gray-400 transition"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-gray-900 placeholder-gray-400 resize-none transition"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg shadow-lg transition"
            >
              Enviar mensaje
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg mb-6 font-semibold text-gray-800">
              ¡Gracias por contactarnos! Te responderemos pronto.
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-lg transition"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
