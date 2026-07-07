function Header({ search, setSearch }) {
  return (
    <header className="mb-8">
      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-white p-6 shadow-md md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Kanban Task Board
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Organize your daily work efficiently
          </p>
        </div>

        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 md:w-80"
        />
      </div>
    </header>
  );
}

export default Header;