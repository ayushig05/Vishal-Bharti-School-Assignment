import React from "react";

function About() {
  return (
    <section className="text-slate-900 py-10 -mt-4">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Vishal Bharti Senior Secondary School
        </h2>

        <p className="text-lg text-slate-700 italic font-medium mb-8">
          Discover our unique approach to education and excellence.
        </p>

        <div className="flex justify-between items-center">
          <div className="w-full lg:w-1/2 mb-6 ">
            <img
              src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656"
              alt="School Building"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 pl-8">
            <p className="text-base text-slate-800 leading-relaxed mb-6">
              At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That's why we've developed a unique approach to learning that focuses on each student's individual needs and learning style.
            </p>

            <p className="text-base text-slate-800 leading-relaxed mb-6">
              Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.
            </p>

            <button className="bg-red-200 text-slate-800 font-semibold text-md py-2 px-6 rounded-xl shadow-xl hover:bg-red-100 hover:shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
