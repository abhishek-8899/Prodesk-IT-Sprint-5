function Header({ search, setSearch }) {
  return (
    <header className="mb-8">
      <h1 className="text-center text-4xl font-bold text-slate-800">
        Kanban Task Board
      </h1>

      <p className="mt-2 text-center text-slate-500">
        Organize your tasks efficiently
      </p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </header>
  );
}

export default Header;