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
      "Manual Testing",
      "STLC & SDLC Knowledge",
      "Performance Testing",
      "Bug Tracking",
    ],
  },
  {
    title: "Social Media Executive",
    type: "FullTime (West Medinipur)",
    qualification: "Any Graduate",
    vacancies: 2,
    experience: "0 - 3",
    skills: [
      "Social Media Content",
      "Digital Marketing",
      "Content Planning",
      "English Writing",
    ],
  },
  {
    title: "Junior Laravel Developer",
    type: "FullTime (West Medinipur)",
    qualification: "BE / B.Tech / MCA",
    vacancies: 4,
    experience: "2 - 4",
    skills: [
      "PHP & Laravel",
      "MVC Architecture",
      "Database Design",
      "Problem Solving",
    ],
  },
  {
    title: "Junior Hybrid Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      "Ionic Framework",
      "API Integration",
      "HTML5 & CSS",
      "SQLite / PostgreSQL",
    ],
  },
  {
    title: "Junior Magento Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      "Magento Development",
      "HTML CSS JS",
      "Frontend Frameworks",
      "Backend APIs",
    ],
  },
  {
    title: "Junior WordPress Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 2,
    experience: "2 - 4",
    skills: [
      "Theme Customization",
      "WooCommerce",
      "Plugin Development",
      "Bootstrap",
    ],
  },
  {
    title: "Senior Hybrid App Developer",
    type: "FullTime (West Medinipur)",
    qualification: "B.Tech / MCA",
    vacancies: 1,
    experience: "4 - 5",
    skills: [
      "Flutter / Ionic",
      "API Integration",
      "App Store Deployment",
      "Angular / Dart",
    ],
  },
];

export default function HiringSection() {
  return (
    <section className="py-16 bg-gray-100">
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
              <span className="circleone absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px]  rounded-full opacity-20"></span>
              <span className="circletwo absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px]  rounded-full opacity-15"></span>
              <span className="circletheree absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px]  rounded-full opacity-10"></span>

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

              <ul className="mt-2 text-sm space-y-1 relative z-10">
                {job.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>

              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 relative z-10">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
