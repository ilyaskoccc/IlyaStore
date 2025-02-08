export default function FooterLayout({ children }) {
  return (
    <footer className="">
      <div className="flex justify-around items-center h-full">{children}</div>
    </footer>
  );
}
