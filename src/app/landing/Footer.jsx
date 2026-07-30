// src/app/landing/Footer.jsx

import {
  GithubIcon,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp
} from "lucide-react";

import Logo from "@components/shared/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Logo />

            <p className="mt-5 leading-7 text-slate-400">
              HackSprint AI Coach is your intelligent assistant for
              hackathons. Analyze ideas, generate roadmaps, manage
              risks and build winning projects faster with AI.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Twitter size={18} />
              </a>

              <a
                href="mailto:hello@hacksprint.ai"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Workspace
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  AI Tools
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#" className="hover:text-blue-400">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  API
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mb-5 text-slate-400">
              Get product updates and AI tips directly in your inbox.
            </p>

            <form className="space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {currentYear} HackSprint AI Coach. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-blue-400">
              Cookies
            </a>

          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowUp size={18} />
            Top
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;