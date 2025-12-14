const Footer = () => {
    return (
      <footer className="bg-gray-100 text-center py-4 mt-10">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Mood Tracker App. Built with React & TailwindCSS.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  