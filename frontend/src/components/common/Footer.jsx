const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

        {/* Logo */}
        <h3 className="text-xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Udyoga
          </span>

          <span className="text-gray-900 dark:text-white">
            Netra
          </span>
        </h3>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 AI Powered Career Platform
        </p>

      </div>

    </footer>
  );
};

export default Footer;