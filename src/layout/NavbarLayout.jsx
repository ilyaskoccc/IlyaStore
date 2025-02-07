export default function NavbarLayout({ children }) {
  return (
    <header className="h-24">
      <nav className="flex justify-around items-center h-full montserrat">
        {children}
      </nav>
    </header>
  );
}
