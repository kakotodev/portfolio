"use client";

import { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/background';
import Loading from './components/Loading';


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Background />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}