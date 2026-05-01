import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p>© 2026 SkillSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}