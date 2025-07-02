export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f9f9f6] text-[#1f1f1f] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d]">
            About Me
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#3b82f6] rounded"></div>
        </div>

        {/* Description Text */}
        <div className="text-xl sm:text-2xl text-justify leading-8 sm:leading-9 text-[#333] space-y-6">
          <p>
            I'm an aspiring <span className="font-medium">Front-End Developer</span> with a growing passion for building interactive, user-friendly web experiences using 
            <span className="font-medium"> React.js</span>, 
            <span className="font-medium"> HTML</span>, 
            <span className="font-medium"> CSS</span> and 
            <span className="font-medium"> JavaScript</span>. I’m currently focused on learning modern front-end technologies and building real-world projects to sharpen my skills.
          </p>
          <p>
            I enjoy turning ideas into <span className="font-medium">responsive and visually appealing interfaces</span>, and I’m always exploring best practices in UI design, performance, and accessibility.
          </p>
          <p>
            I’m actively seeking <span className="font-medium">opportunities</span> to apply my skills, collaborate with developers, and grow in a professional setting.
          </p>
        </div>

      </div>
    </section>
  );
}