import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white bg-pattern relative">
      {/* Decorative Background Elements */}
      <div className="bg-decorative">
        <div className="decorative-element decorative-element-1"></div>
        <div className="decorative-element decorative-element-2"></div>
        <div className="decorative-line decorative-line-left"></div>
        <div className="decorative-line decorative-line-right"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;