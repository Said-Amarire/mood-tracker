const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-sm">&copy; {new Date().getFullYear()} MoodTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
