export default function FooterLayout({ children }) {
  return (
    <footer className="h-[488px]">
      <div className="flex-col justify-items-center bg-[#252B42] text-white text-left">
        {children}
      </div>
    </footer>
  );
}
