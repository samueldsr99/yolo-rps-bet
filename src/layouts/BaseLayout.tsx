import { FC } from "react";
import Header from "../components/Header/Header";

export type BaseLayoutProps = JSX.IntrinsicElements["main"];

const BaseLayout: FC<BaseLayoutProps> = ({ className, children }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
};

export default BaseLayout;
