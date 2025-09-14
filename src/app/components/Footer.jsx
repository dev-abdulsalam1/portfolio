import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Abdulsalam Shiikhow</h2>
          <p className="text-sm">
            Full-Stack Developer passionate about building modern, responsive,
            and user-friendly applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://github.com/dev-abdulsalam1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulsalam-hassan-296739368/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/shiiqow.yare.52"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/dev_abdulsalam1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Abdulsalam Shiikhow. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
