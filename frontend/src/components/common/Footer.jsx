const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 py-4 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

        {/* Logo */}
        <h3 className="text-xl font-bold">
          <span className="bg-linear-to-r from-purple-600  to-pink-600 text-transparent bg-clip-text">
            Udyoga
          </span>

          <span className="text-gray-900 dark:text-white">
            Netra <span className="text-pink-600"> AI</span>
          </span>
        </h3>

        {/* Copyright */}
        <p className="text-sm text-gray-900 dark:text-white">
          © 2026 AI Powered Career Platform
        </p>

      </div>

    </footer>
  );
};

export default Footer;