export default function About() {
  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Sobre nosotros <span className="text-yellow-300">Team Pquis</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-light mb-10">
          Somos un equipo apasionado por la tecnología, el desarrollo y la innovación. Nos encanta construir soluciones creativas, aprender en equipo y enfrentar nuevos desafíos. ¡Y sí, arriba el América! 🦅
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {[
          { name: "Eduardo Sánchez", role: "Desarrollador Frontend" },
          { name: "Francisco de Luis", role: "Diseñadora UI/UX" },
          { name: "Laura Contreras", role: "Diseñadora UI/UX" },
          { name: "Miguel Angel Paredes", role: "Líder de Proyecto" },
        ].map((member, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-20 h-20 bg-yellow-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-yellow-100">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
