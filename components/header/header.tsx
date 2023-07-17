const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <span className="text-4xl font-extrabold">LOGO</span>

          {/* Nav Desktop */}
          <ul className="hidden items-center justify-center gap-8 md:flex">
            <li className="">Home</li>
            <li className="">Home</li>
            <li className="">Home</li>
            <li className="">Home</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
