const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar sticky top-0 bg-transparent backdrop-blur-lg px-6 z-30">
          <div className="flex-1 px-2.5">
            <h1 className="font-sacramento text-primary-blue text-3xl font-semibold">
              ND Wedding
            </h1>
          </div>
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <i className="bi bi-list text-3xl"></i>
            </label>
          </div>
          <div className="hidden flex-none md:block">
            <ul className="menu menu-horizontal">
              <li>
                <a
                  href="#home"
                  className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#info"
                  className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
                >
                  Info
                </a>
              </li>
              <li>
                <a
                  href="#rsvp"
                  className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
                >
                  RSVP
                </a>
              </li>
              <li>
                <a
                  href="#gifts"
                  className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
                >
                  Gifts
                </a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full w-80 bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-sacramento text-primary-blue text-3xl font-semibold px-5">
              ND Wedding
            </h2>
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost"
            >
              <i className="bi bi-x text-3xl"></i>
            </label>
          </div>
          <ul className="menu gap-4">
            <li>
              <a
                href="#home"
                className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
              >
                <i className="bi bi-house-door-fill"></i>
                Home
              </a>
            </li>
            <li>
              <a
                href="#info"
                className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
              >
                <i className="bi bi-info-circle-fill"></i>
                Info
              </a>
            </li>
            <li>
              <a
                href="#rsvp"
                className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
              >
                <i className="bi bi-calendar-event-fill"></i>
                RSVP
              </a>
            </li>
            <li>
              <a
                href="#gifts"
                className="text-lg text-primary-blue hover:bg-primary-blue focus:bg-primary-blue hover:text-white transition ease-out duration-150"
              >
                <i className="bi bi-gift-fill"></i>
                Gifts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
