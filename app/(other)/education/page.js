"use client"
import { memo } from 'react';
import React from 'react';
import { motion } from "motion/react";
const institutes = [
  {
    id: 1,
    name: 'University of Engineering and Technology (UET)',
    year: '2023-2024',
    courses: [
      { name: 'Application of Information and Communication Technologies', year: 'Fall 2023'},
      { name: 'Programming Fundamentals', year: 'Fall 2023'},
      { name: 'Discrete Mathematics', year: 'Fall 2023'},
      { name: 'Functional English', year: 'Fall 2023'},
      { name: 'Calculus', year: 'Fall 2023'},
      { name: 'Object Oriented Programming', year: 'Spring 2024'},
      { name: 'Digital Logic Design', year: 'Spring 2024'},
      { name: 'Database Systems', year: 'Spring 2024'},
      { name: 'Applied Statistics and Probability', year: 'Spring 2024'},
      { name: 'Communication Skills', year: 'Spring 2024'},
      { name: 'Software Engineering', year: 'Fall 2024'},
      { name: 'Data Structures and Algorithms', year: 'Fall 2024' },
      { name: 'Computer Networks', year: 'Fall 2024'},
    ],
  },
  {
    id: 2,
    name: 'Enablers',
    year: '2023',
    courses: [
      { name: 'C++', year: '2023' },
    ],
  },
  {
    id: 3,
    name: 'Digiskills',
    year: '2023',
    courses: [
      { name: 'Digital Marketing', year: '2023' },
      { name: 'Freelancing', year: '2023' },
    ],
  },
  {
    id: 4,
    name: 'Alnoor Academy',
    year: '2019-2023',
    courses: [
      { name: 'Metric', year: '2019-2021' },
      { name: 'ICS', year: '2021-2023' },
      { name: 'C Programming Language', year: '2021-2023' },
      { name: 'Canva', year: '2021-2023' },
    ],
  },
];

const EducationPage = () => {
  return (
    <main className="h-[90vh]  w-[100%] pt-16 ">
         <div className="h-[10%] text-4xl font-bold flex items-center pl-10 text-white">
        Education
      </div>
      <div className="h-[100%] flex flex-col items-center overflow-scroll overflow-x-hidden custom-scrollbar">
        {institutes.map((institute, index) => (
          <motion.div
            key={institute.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative w-64 mb-8"
          >
            <div className="flex flex-col items-center justify-center bg-green-400 m-2 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold">{institute.name}</h3>
              <p className="text-sm">{institute.year}</p>
              <ul className="text-left mt-2">
                {institute.courses.map((course, idx) => (
                  <li key={idx} className="text-xs">
                    {course.name} ({course.year}) {course.grade && `- Grade: ${course.grade}`}
                  </li>
                ))}
              </ul>
            </div>
            {index < institutes.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 h-12 w-0.5 bg-green-400 -bottom-10"></div>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default React.memo(EducationPage);