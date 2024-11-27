const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFF"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,224C672,203,768,149,864,112C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <div className="w-full py-10">
          <div className="text-center">
            <small className="block">
              &copy; {new Date().getFullYear()} Dove by{" "}
              <a
                className="italic"
                target="_blank"
                href="https://instagram.com/axara.dev"
              >
                Axara
              </a>
              . All Rights Reserved.
            </small>
            <small className="block">
              Design by{" "}
              <a
                className="italic"
                target="_blank"
                href="https://instagram.com/oortsky"
              >
                @oortsky
              </a>
              .
            </small>

            <ul className="flex justify-center gap-3 mt-3">
              <li>
                <a target="_blank" href="https://instagram.com/oortsky">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://x.com/oortsky">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://wa.me/6283831038379">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/oortsky">
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
