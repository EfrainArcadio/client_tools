import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-white  flex justify-between shadow-md">
        <div className="max-w-6xl py-2  mx-1">
          <a href="/">
            <img
              src="/ortpng.png"
              alt=""
              className="max-h-10 md:max-h-[80px]"
            />
          </a>
        </div>
      </header>
      <main className="m-auto container">
        <Outlet />
      </main>
    </>
  );
}
