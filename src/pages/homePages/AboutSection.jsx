import React from "react";
import { Film, ShieldCheck, UsersRound, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Film size={40} />,
    title: "Huge Movie Library",
    desc: "Browse movies by popularity, rating, genre & more."
  },
  {
    icon: <UsersRound size={40} />,
    title: "User Statistics",
    desc: "Track total users, movie counts & platform growth data."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure & Fast",
    desc: "Optimized backend system built with Express & MongoDB."
  },
  {
    icon: <Sparkles size={40} />,
    title: "Modern UI/UX",
    desc: "Clean, modern and responsive design powered by Tailwind + DaisyUI."
  }
];

const AboutPlatform = () => {
  return (
    <div className="w-full bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center text-white">

        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          About <span className="text-yellow-400">MovieMaster Pro</span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in delay-150">
          MovieMaster Pro is an advanced movie management and discovery platform.
          It offers real-time movie updates, statistics, personalized movie lists,
          user-friendly features, and professional-grade tools to make your
          experience smoother and smarter.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl text-center cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-gray-700 animate-slide-up delay-[${index * 100}ms]"
            >
              <div className="mb-3 text-yellow-400 mx-auto">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPlatform;




// import React from 'react';

// const AboutSection = () => {
//     return (
//          <div className="w-full bg-gray-900 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center text-white">
        
//         <h2 className="text-3xl font-bold mb-4">
//           About <span className="text-yellow-400">MovieMaster Pro</span>
//         </h2>
        
//         <p className="text-gray-300 max-w-3xl mx-auto mb-10">
//           MovieMaster Pro is an advanced movie management and discovery platform.
//           It offers real-time movie updates, statistics, personalized movie lists,
//           user-friendly features, and professional-grade tools to make your
//           experience smoother and smarter.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {/* Feature 1 */}
//           <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition cursor-pointer">
//             <Film size={40} className="mx-auto text-yellow-400 mb-3" />
//             <h3 className="text-xl font-semibold mb-2">Huge Movie Library</h3>
//             <p className="text-gray-400">
//               Browse movies by popularity, rating, genre & more.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition cursor-pointer">
//             <UsersRound size={40} className="mx-auto text-yellow-400 mb-3" />
//             <h3 className="text-xl font-semibold mb-2">User Statistics</h3>
//             <p className="text-gray-400">
//               Track total users, movie counts & platform growth data.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition cursor-pointer">
//             <ShieldCheck size={40} className="mx-auto text-yellow-400 mb-3" />
//             <h3 className="text-xl font-semibold mb-2">Secure & Fast</h3>
//             <p className="text-gray-400">
//               Optimized backend system built with Express & MongoDB.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition cursor-pointer">
//             <Sparkles size={40} className="mx-auto text-yellow-400 mb-3" />
//             <h3 className="text-xl font-semibold mb-2">Modern UI/UX</h3>
//             <p className="text-gray-400">
//               Clean, modern and responsive design powered by Tailwind + DaisyUI.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//     );
// };

// export default AboutSection;