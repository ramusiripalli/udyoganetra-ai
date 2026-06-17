const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Brand */}
        <div>

          <h3 className="text-2xl font-bold">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Udyoga
            </span>

            <span className="text-gray-900 dark:text-white">
              Netra
            </span>

          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            AI Powered Career Growth Platform
          </p>

        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">

          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>

        </div>

      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © 2026 UdyogaNetra. Built for smarter career growth.
      </div>

    </footer>
  );
};

export default Footer;