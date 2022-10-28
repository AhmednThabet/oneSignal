import Head from "next/head";
import Footer from "components/Footer";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Talents Valley platform",
  withoutNavbar = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!withoutNavbar && <header>navbar</header>}
      <main className="flex-1 flex justify-center items-center min-h-fit p-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
