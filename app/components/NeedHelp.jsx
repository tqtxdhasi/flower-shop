import React from "react";

const NeedHelp = () => {
  return (
    <div className="mt-8 bg-rose-700 text-white p-4 rounded-lg flex items-center justify-between">
      <div>
        <h3 className="font-medium">Masz konkretny problem?</h3>
        <p className="text-sm opacity-90">Przejdź do naszego poradnika</p>
      </div>
      <Link
        href="/blog/rozwiązywanie-problemow-z-rozami"
        className="bg-white text-rose-700 px-4 py-2 rounded-full flex items-center hover:bg-rose-50"
      >
        Pomoc
      </Link>
    </div>
  );
};

export default NeedHelp;
