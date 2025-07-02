import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 bg-[#f9f9f6] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto space-y-16 text-center">

        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <div className="w-16 h-1 mx-auto bg-[#3b82f6] rounded"></div>
          <p className="text-base sm:text-lg text-[#555] max-w-2xl mx-auto">
            Let’s connect! Whether you have a project in mind, want to collaborate, or just say hello — I’d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {/* Email */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <FaEnvelope className="text-[#3b82f6] text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a
                href="mailto:jennyadhikari0612@gmail.com"
                className="text-[#3b82f6] hover:underline text-base"
              >
                jennyadhikari0612@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <FaPhoneAlt className="text-[#3b82f6] text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-base">+977-9840030198</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <FaLinkedin className="text-[#3b82f6] text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b82f6] hover:underline text-base"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <FaGithub className="text-[#3b82f6] text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">GitHub</h3>
              <a
                href="https://github.com/jenishaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b82f6] hover:underline text-base"
              >
                github.com/jenishaaa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}
