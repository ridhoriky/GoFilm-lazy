import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer footer-center p-4 text-white/60 bg-[#15191e]">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};
