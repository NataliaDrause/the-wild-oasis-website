export default function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  children,
}) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      } px-5 py-2 hover:bg-primary-700`}
    >
      {children}
    </button>
  );
}
