"use client";

interface Job {
  title: string;
  type: string;
  qualification: string;
  vacancies: number;
  experience: string;
  skills: string[];
}

const jobs: Job[] = [
  {
    title: "Junior Software Tester",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / BCA / MCA / M.Sc",
    vacancies: 2,
    experience: "0 - 5",
    skills: [
      "Manual Testing, Web Application Testing, Mobile Application Testing, Software Testing,",
      "Sound knowledge of SDLC, Software Testing Life Cycle (STLC), Performance Testing, Bug Tracking, E-commerce",
      "Up-to-date knowledge of software test design and testing methodologies",
      "Working knowledge of test techniques and compatibility with various software programs",
    ],
  },
  {
    title: "Social Media Executive",
    type: "FullTime (West Medinipur)",
    qualification: "Any Graduate",
    vacancies: 2,
    experience: "0 - 3",
    skills: [
      "Writing and Editing social media post captions, description, tags & Scheduling and uploading posts on a regular basis.",
      "Experience in / Understanding of Social Media/Content Marketing/Digital Marketing/Content Research & Design.",
      "Planning and Strategizing SM content and creative for various platforms like LinkedIn, Facebook, Instagram, YouTube, Pinterest and Twitter.",
      "Command over English language is must and should be excellent in writing.",
    ],
  },
  {
    title: "Junior Laravel Developer",
    type: "FullTime (West Medinipur)",
    qualification: "BE / B.Tech / MCA",
    vacancies: 4,
    experience: "2 - 4",
    skills: [
      "Proficiency in HTML, PHP, SQL, JavaScript, Database Design and unit testing",
      "Understanding of MVC architecture",
      "Basic Knowledge of Laravel Development",
      "Good communication, interpersonal and problem-solving skills",
      "Creative, quick learner and Team Player",
    ],
  },
  {
    title: "Junior Hybrid Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      "Ionic framework, CSS, JavaScript, HTML 5, JSON & API Integrations",
      "Knowledge of the SQLite database or PostgreSQL",
      "Good communication, interpersonal and problem-solving skills",
      "Creative, quick learner and Team Player",
    ],
  },
  {
    title: "Junior Magento Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      "Learn and implement industry standard best practices",
      "Must have the drive to produce high quality code",
      "Design, develop, and maintain web applications",
      "Must have strong knowledge of web technologies JavaScript, HTML, CSS, etc.",
      "Experience in with frontend technologies like Angular2+, or React & backend technologies like Python (Django), JavaScript (NodeJS), etc. would be preferred",
    ],
  },
  {
    title: "Junior WordPress Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      
      "Minimum 2 years experience will require in Word Press / Woo commerce",
      "Knowledge of Template Integration & Theme Customization",
      "Knowledge of Word Press Themes, Plug-in, Widgets etc",
      "Word Press back-end working experience is mandatory",
      "Good knowledge of HTML / CSS / Bootstrap",
      "Good communication, interpersonal and problem-solving skills",
      "Creative, quick learner and Team Player",
    ],
  },
  {
    title: "Senior Hybrid App Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 1,
    experience: "4 - 5",
    skills: [
      "Responsible for the development of Hybrid mobile applications using the Ionic / flutter framework",
      "Manage the complete app development life cycle, which includes Screen Layout development, API integration, Testing and Submission to app stores",
      "Knowledge of Angular JS and/or Dart",
      "Should have sound knowledge of database and optimized query building",
    ],
  },
];

export default function HiringSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Interested? Come Join Us!
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Join our innovative team and build your career with BlueHorse.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative bg-[#f5f3fe] p-6 pb-16 rounded-xl overflow-hidden"
            >
              {/* circles */}
              <span className="circleone absolute -bottom-20 -right-20 w-50 h-50  rounded-full opacity-20"></span>
              <span className="circletwo absolute -bottom-30 -right-30 w-75 h-75 rounded-full opacity-15"></span>
              <span className="circletheree absolute -bottom-45 -right-45 w-112.5 h-112.5 rounded-full opacity-10"></span>

              <h3 className="text-xl font-bold relative z-10">
                {job.title}
              </h3>

              <p className="mt-2 font-semibold relative z-10">
                {job.type}
              </p>

              <p className="mt-2 text-sm relative z-10">
                <strong>Qualification:</strong> {job.qualification}
              </p>

              <p className="mt-2 text-sm relative z-10">
                <strong>Vacancies:</strong> {job.vacancies}
              </p>

              <p className="mt-2 text-sm relative z-10">
                <strong>Experience:</strong> {job.experience}
              </p>

              <p className="mt-4 font-semibold relative z-10">
                Skills Required
              </p>

              <ul className="mt-2 text-sm space-y-1 relative z-10 flex gap-1.25 flex-col">
                {job.skills.map((skill, i) => (
                  <li className="" key={i}>• {skill}</li>
                ))}
              </ul>

             <button className="absolute bottom-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 z-10">
  Apply Now
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
