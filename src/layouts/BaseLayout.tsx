import { FC } from "react";
import Header from "../components/Header/Header";

export type BaseLayoutProps = JSX.IntrinsicElements["main"];

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 px-4 py-12 sm:px-12 sm:py-20">
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
