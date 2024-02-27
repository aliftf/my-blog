function Header({ onClickCreateBlog }) {
  return (
    <div className="flex justify-between pt-6 pb-6 pr-9 pl-9">
      <h1 className="text-2xl font-semibold">Blog GDSC Tel-U</h1>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded"
        onClick={onClickCreateBlog}
      >
        Buat Blog
      </button>
    </div>
  );
}

export default Header;
