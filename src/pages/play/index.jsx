export default function index() {
  return (
    <main
      className="h-screen font-playfair"
      style={{ backgroundColor: "#2a3042" }}
    >
      <nav className="flex items-center justify-center h-full">
        <ul className="flex gap-4 flex-col text-center text-[#c3a38c] text-2xl">
          <h3 className="mb-4 text-3xl tracking-wider text-gray-200">
            Let your fate be <span className="text-[#c3a38c]"> decided</span>
          </h3>
          <h3 className="mb-4 text-3xl tracking-widest text-gray-200">
          <span className="text-[#c3a38c]">D</span>raw <span className="text-[#c3a38c]">Y</span>our <span className="text-[#c3a38c]">C</span>ards
          </h3>
        </ul>
      </nav>
    </main>
  );
}