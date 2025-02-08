export default function NavbarLayout({ children }) {
  return (
    <header className="h-24 justify-items-center">
      <nav className="flex justify-evenly items-center w-[1322px] h-full">
        {children}
      </nav>
    </header>
  );
}
