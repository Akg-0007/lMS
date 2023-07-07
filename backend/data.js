// const teacher = [
//     {
//       "userId": 89725,
//       "password" : "1234",
//       "email" : "rohitpsn10@gmail.com",
//       "image": "teacher_image.jpg",
//       "name": "Teacher 74",
//       "section": [
//         {
//           "name": "K19LU",
//           "courses": [
//             "6434fcb866ddd5fafed57dd5",
//             "6434fcb866ddd5fafed57dd6",
//             "6434fcb866ddd5fafed57dd7"
//           ]
//         },
//         {
//           "name": "K19SM",
//           "courses": [
//             "6434fcb866ddd5fafed57dd9",
//             "6434fcb866ddd5fafed57dd6"
//           ]
//         }
//       ]
//     },
//     {
//       "userId": 20931,
//       "password" : "1234",
//       "email" : "rohitpsn10@gmail.com",
//       "image": "teacher_image.jpg",
//       "name": "Teacher 85",
//       "section": [
//         {
//           "name": "K19WN",
//           "courses": [
//             "6434fcb866ddd5fafed57dd9",
//             "6434fcb866ddd5fafed57dd6"
//           ]
//         },
//         {
//           "name": "K19AS",
//           "courses": [
//             "6434fcb866ddd5fafed57dd5",
//             "6434fcb866ddd5fafed57dd6",
//             "6434fcb866ddd5fafed57dd7"
//           ]
//         }
//       ]
//     },
//     {
//       "userId": 45104,
//       "password" : "1234",
//       "email" : "rohitpsn10@gmail.com",
//       "image": "teacher_image.jpg",
//       "name": "Teacher 47",
//       "section": [
//         {
//           "name": "K19LE",
//           "courses": [
//             "6434fcb866ddd5fafed57dd4",
//             "6434fcb866ddd5fafed57dd6"
//           ]
//         },
//         {
//           "name": "K19VH",
//           "courses": [
//             "6434fcb866ddd5fafed57dd5",
//             "6434fcb866ddd5fafed57dd6",
//             "6434fcb866ddd5fafed57dd7"
//           ]
//         }
//       ]
//     },
//     {
//       "userId": 69451,
//       "password" : "1234",
//       "email" : "rohitpsn10@gmail.com",
//       "image": "teacher_image.jpg",
//       "name": "Teacher 31",
//       "section": [
//         {
//           "name": "K19LR",
//           "courses": [
//             "6434fcb866ddd5fafed57dd4",
//             "6434fcb866ddd5fafed57ddb"
//           ]
//         },
//         {
//           "name": "K19SG",
//           "courses": [
//             "6434fcb866ddd5fafed57ddd",
//             "6434fcb866ddd5fafed57ddc",
//             "6434fcb866ddd5fafed57dda"
//           ]
//         }
//       ]
//     },
//     {
//       "userId": 13571,
//       "password" : "1234",
//       "email" : "rohitpsn10@gmail.com",
//       "image": "teacher_image.jpg",
//       "name": "Teacher 57",
//       "section": [
//         {
//           "name": "K19LR",
//           "courses": [
//             "6434fcb866ddd5fafed57ddd",
//             "6434fcb866ddd5fafed57ddc"
//           ]
//         },
//         {
//           "name": "K19SG",
//           "courses": [
//             "6434fcb866ddd5fafed57ddd",
//             "6434fcb866ddd5fafed57ddc",
//             "6434fcb866ddd5fafed57dda"
//           ]
//         }
//       ]
//     }
//   ]



//   const assignments = [
//     {
//       "title": "Maths Assignment",
//       "description": "Solve the given problems on trigonometry",
//       "course": "CS201",
//       "section": "K19LU",
//       "marks": 25,
//       "dueDate": "2023-04-30T00:00:00.000Z",
//       "file": "maths-assignment.pdf",
//       "feedback": "Good effort",
//       "status": false,
//       "postedBy": 89725
//     },
//     {
//       "title": "English Essay",
//       "description": "Write an essay on 'The Importance of Education'",
//       "course": "CS201",
//       "section": "K19LU",
//       "marks": 30,
//       "dueDate": "2023-05-10T00:00:00.000Z",
//       "file": "english-essay.docx",
//       "feedback": "Excellent work",
//       "status": true,
//       "postedBy": 89725
//     },
//     {
//       "title": "Science Experiment",
//       "description": "Perform the given experiment on electricity",
//       "course": "CS201",
//       "section": "K19LU",
//       "marks": 20,
//       "dueDate": "2023-04-20T00:00:00.000Z",
//       "file": "science-experiment.pdf",
//       "feedback": "Well done",
//       "status": false,
//       "postedBy": 20931
//     },
//     {
//       "title": "History Research Paper",
//       "description": "Research and write a paper on the French Revolution",
//       "course": "CS301",
//       "section": "K19SM",
//       "marks": 40,
//       "dueDate": "2023-05-15T00:00:00.000Z",
//       "file": "history-research-paper.docx",
//       "feedback": "Needs improvement",
//       "status": false,
//       "postedBy": 20931
//     },
//     {
//       "title": "Computer Science Project",
//       "description": "Create a program that solves a Sudoku puzzle",
//       "course": "CS301",
//       "section": "K19SM",
//       "marks": 50,
//       "dueDate": "2023-06-01T00:00:00.000Z",
//       "file": "sudoku-solver.py",
//       "feedback": "Impressive work",
//       "status": true,
//       "postedBy": 20931
//     },
//     {
//       "title": "Geography Map Assignment",
//       "description": "Draw a map of Africa and label its physical features",
//       "course": "CS501",
//       "section": "K19WN",
//       "marks": 15,
//       "dueDate": "2023-05-05T00:00:00.000Z",
//       "file": "geography-map.png",
//       "feedback": "Well done",
//       "status": true,
//       "postedBy": 89725
//     },
//     {
//       "title": "Economics Case Study",
//       "description": "Analyze and write a case study on the impact of inflation on a developing country",
//       "course": "CS501",
//       "section": "K19WN",
//       "marks": 35,
//       "dueDate": "2023-05-25T00:00:00.000Z",
//       "file": "economics-case-study.docx",
//       "feedback": "Good effort",
//       "status": false,
//       "postedBy": 89725
//     }
//   ]


//   const announcement = [
//     {
//       heading: "New Course Offered",
//       description: "We are excited to announce a new course for the upcoming semester",
//       body: "The course will cover a range of topics including...",
//       category: "Academic"
//       }
//       ,
//       {
//       heading: "Registration Deadline Extension",
//       description: "The deadline to register for courses has been extended",
//       body: "Students now have until next Friday to register for courses...",
//       category: "Academic"
//       }
//       ,
//       {
//       heading: "Faculty Research Grant",
//       description: "Faculty members can apply for research grants",
//       body: "The grants will fund research projects in various fields...",
//       category: "Academic"
//       }
//       ,
//       {
//       heading: "Study Abroad Program",
//       description: "Applications for the study abroad program are now open",
//       body: "Students can apply to spend a semester studying at one of our partner universities...",
//       category: "Academic"
//       }
//       ,
//       {
//       heading: "Graduation Ceremony",
//       description: "The date for the graduation ceremony has been announced",
//       body: "The ceremony will be held on June 15th at the campus auditorium...",
//       category: "Academic"
//       }
//       ,
//       {
//       heading: "New Staff Appointments",
//       description: "We welcome several new staff members to the university",
//       body: "The new staff members bring a wealth of experience and expertise...",
//       category: "Administrative"
//       }
//       ,
//       {
//       heading: "Campus Maintenance",
//       description: "Scheduled maintenance work will be carried out next week",
//       body: "During this time, certain areas of the campus will be closed off...",
//       category: "Administrative"
//       }
//       ,
//       {
//       heading: "Parking Permits",
//       description: "New parking permits are now available for purchase",
//       body: "Students and staff can purchase parking permits at the campus security office...",
//       category: "Administrative"
//       }
//       ,
//       {
//       heading: "Budget Allocation",
//       description: "The budget for the upcoming fiscal year has been allocated",
//       body: "The budget has been divided among various departments and projects...",
//       category: "Administrative"
//       } ,
      
//       {
//       heading: "Policy Update",
//       description: "The university's policy on academic integrity has been updated",
//       body: "All students and faculty members are expected to familiarize themselves with the updated policy...",
//       category: "Administrative"
//       } ,
      
//       {
//       heading: "Intramural Sports",
//       description: "Registration for intramural sports is now open",
//       body: "Students can sign up for basketball, soccer, and volleyball leagues...",
//       category: "Co-curricular"
//       } ,
      
//       {
//       heading: "Clubs Fair",
//       description: "The annual clubs fair will be held next week",
//       body: "Students can learn about the various clubs and organizations on campus...",
//       category: "Co-curricular"
//       } ,
      
//       {
//       heading: "Volunteer Opportunities",
//       description: "Various volunteer opportunities are available for students",
//       body: "Students can volunteer with local organizations and charities...",
//       category: "Co-curricular"
//       } ,
      
//       {
//       heading: "Art Exhibition",
//       description: "A student art exhibition will be held at the campus gallery",
//       body: "The exhibition will feature works by students from the fine arts program...",
//       category: "Co-curricular"
//       } ,
      
//       {
//       heading: "Guest Speaker Series",
//       description: "Renowned author and activist to speak on campus next week",
//       body: "The talk will focus on issues related to social justice and activism...",
//       category: "Co-curricular"
//       } 
//   ]


//   const assignment = [
//     {
//       title: 'Assignment 1',
//       description: 'This is the first assignment',
//       course: 'CS201',
//       section: 'K19LU',
//       marks: 10,
//       dueDate: new Date('2023-05-01'),
//       file: 'assignment1.pdf',
//       createdBy: 89725
//     },
//     {
//       title: 'Assignment 2',
//       description: 'This is the second assignment',
//       course: 'CS201',
//       section: 'K19LU',
//       marks: 20,
//       dueDate: new Date('2023-05-05'),
//       file: 'assignment2.pdf',
//       createdBy: 45104
//     },
//     {
//       title: 'Assignment 3',
//       description: 'This is the third assignment',
//       course: 'CS201',
//       section: 'K19LU',
//       marks: 15,
//       dueDate: new Date('2023-05-10'),
//       file: 'assignment3.pdf',
//       createdBy: 89725
//     },
//     {
//       title: 'Assignment 4',
//       description: 'This is the fourth assignment',
//       course: 'CS201',
//       section: 'K19LU',
//       marks: 25,
//       dueDate: new Date('2023-05-15'),
//       file: 'assignment4.pdf',
//       createdBy: 89725
//     }, 
//     {
//       title: 'Assignment 5',
//       description: 'This is the fifth assignment',
//       course: 'CS501',
//       section: 'K19WN',
//       marks: 30,
//       dueDate: new Date('2023-05-20'),
//       file: 'assignment5.pdf',
//       createdBy: 45104
//     },
//     {
//       title: 'Assignment 6',
//       description: 'This is the sixth assignment',
//       course: 'CS501',
//       section: 'K19WN',
//       marks: 40,
//       dueDate: new Date('2023-05-25'),
//       file: 'assignment6.pdf',
//       createdBy: 45104
//     },
//     {
//       title: 'Assignment 7',
//       description: 'This is the seventh assignment',
//       course: 'CS501',
//       section: 'K19WN',
//       marks: 35,
//       dueDate: new Date('2023-05-30'),
//       file: 'assignment7.pdf',
//       createdBy: 45104
//     },
//     {
//       title: 'Assignment 8',
//       description: 'This is the eighth assignment',
//       course: 'CS301',
//       section: 'K19SM',
//       marks: 45,
//       dueDate: new Date('2023-06-01'),
//       file: 'assignment8.pdf',
//       createdBy: 89725
//     },
//     {
//       title: 'Assignment 9',
//       description: 'This is the ninth assignment',
//       course: 'CS301',
//       section: 'K19SM',
//       marks: 50,
//       dueDate: new Date('2023-06-05'),
//       file: 'assignment9.pdf',
//       createdBy: 45104
//     },
//     {
//       title: 'Assignment 10',
//       description: 'This is the tenth assignment',
//       course: 'CS301',
//       section: 'K19SM',
//       marks: 60,
//       dueDate: new Date('2023-06-05'),
//       file: 'assignment9.pdf',
//       createdBy: 89725
//     }  
//   ]


//   const students = [
//     {
//       name: "Alice",
//       userId: 10001,
//       password: "password1",
//       rollNo: "A001",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS301',
//       section: 'K19SM',
//     },
//     {
//       name: "Bob",
//       userId: 10002,
//       password: "password2",
//       rollNo: "A002",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS301',
//       section: 'K19SM',
//     },
//     {
//       name: "Charlie",
//       userId: 10003,
//       password: "password3",
//       rollNo: "A003",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS501',
//       section: 'K19WN',
//     },
//     {
//       name: "David",
//       userId: 10004,
//       password: "password4",
//       rollNo: "A004",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS201',
//       section: 'K19LU',
//     },
//     {
//       name: "Emily",
//       userId: 10005,
//       password: "password5",
//       rollNo: "A005",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS501',
//       section: 'K19WN',
//     },
//     {
//       name: "Frank",
//       userId: 10006,
//       password: "password6",
//       rollNo: "B001",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS201',
//       section: 'K19LU',
//     },
//     {
//       name: "Grace",
//       userId: 10007,
//       password: "password7",
//       rollNo: "B002",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS501',
//       section: 'K19WN',
//     },
//     {
//       name: "Henry",
//       userId: 10008,
//       password: "password8",
//       rollNo: "B003",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS201',
//       section: 'K19LU',
//     },
//     {
//       name: "Isabelle",
//       userId: 10009,
//       password: "password9",
//       rollNo: "B004",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS501',
//       section: 'K19WN',
//     },
//     {
//       name: "Jacob",
//       userId: 10010,
//       password: "password10",
//       rollNo: "B005",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS201',
//       section: 'K19LU',
//     },
//     {
//       name: "Katherine",
//       userId: 10011,
//       password: "password11",
//       rollNo: "C001",
//       attendance: "612e1e451c090a7a332a9b90",
//       course: 'CS301',
//       section: 'K19SM',
//     }]


//     const assignmentSubmissions = [
//       {
//         studentId: "6436ee2d5bd0326c1342d379",
//         submissionFile: "path/to/file1.pdf",
//         markEarned: 80,
//         feedback: "Good work, keep it up!",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d37c",
//         submissionFile: "path/to/file2.pdf",
//         markEarned: 70,
//         feedback: "You need to work on your formatting.",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d37d",
//         submissionFile: "path/to/file3.pdf",
//         markEarned: 90,
//         feedback: "Excellent work!",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d37f",
//         submissionFile: "path/to/file4.pdf",
//         markEarned: 85,
//         feedback: "You need to provide more examples.",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d37e",
//         submissionFile: "path/to/file5.pdf",
//         markEarned: 95,
//         feedback: "Excellent job, well done!",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d381",
//         submissionFile: "path/to/file6.pdf",
//         markEarned: 75,
//         feedback: "You need to work on your grammar.",
//         assignmentId: "6436f45e44c44e8b8ce0c615"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d380",
//         submissionFile: "path/to/file7.pdf",
//         markEarned: 80,
//         feedback: "Good effort, but you missed some important points.",
//         assignmentId: "6436f45e44c44e8b8ce0c617"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d382",
//         submissionFile: "path/to/file8.pdf",
//         markEarned: 90,
//         feedback: "Well done, keep up the good work!",
//         assignmentId: "6436f45e44c44e8b8ce0c617"
//       },
//       {
//         studentId: "6436ee2d5bd0326c1342d37b",
//         submissionFile: "path/to/file9.pdf",
//         markEarned: 70,
//         feedback: "You need to provide more detailed explanations.",
//         assignmentId: "6436f45e44c44e8b8ce0c617"
//       }]


//       section: [
//         {
//           name: {
//             type: String,
//             required: true,
//           },
//           courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
//         },
//       ],


//       {
//         "sections": [
//             {
//                 "name": "K19LE",
//                 "courses": [
//                     {
//                         "_id": "6434fcb866ddd5fafed57dd4",
//                         "name": "Introduction to Computer Science",
//                         "code": "CS101",
//                         "description": "Learn the basics of computer science and programming",
//                         "syllabus": "This course covers topics such as algorithms, data structures, and programming languages",
//                         "sessions": 20,
//                         "__v": 0
//                         "lm" : [867868678, 8687687687, 8686969, 868698968969876876, 87686868]
//                     },
//                     {
                      
//                         "_id": "6434fcb866ddd5fafed57dd6",
//                         "name": "Artificial Intelligence",
//                         "code": "CS301",
//                         "description": "Learn about machine learning and artificial intelligence",
//                         "syllabus": "This course covers topics such as neural networks, deep learning, and natural language processing",
//                         "sessions": 25,
//                         "__v": 0
//                     }
//                 ],
//                 "_id": "64363e4fc3dd1e068b97eef6"
//             },
//             {
//                 "name": "K19VH",
//                 "courses": [
//                     {
//                         "_id": "6434fcb866ddd5fafed57dd5",
//                         "name": "Database Management Systems",
//                         "code": "CS201",
//                         "description": "Learn about databases and how to design and manage them",
//                         "syllabus": "This course covers topics such as database design, normalization, and SQL",
//                         "sessions": 15,
//                         "__v": 0
//                     },
//                     {
//                         "_id": "6434fcb866ddd5fafed57dd6",
//                         "name": "Artificial Intelligence",
//                         "code": "CS301",
//                         "description": "Learn about machine learning and artificial intelligence",
//                         "syllabus": "This course covers topics such as neural networks, deep learning, and natural language processing",
//                         "sessions": 25,
//                         "__v": 0
//                     },
//                     {
//                         "_id": "6434fcb866ddd5fafed57dd7",
//                         "name": "Operating Systems",
//                         "code": "CS401",
//                         "description": "Learn about the principles of operating systems",
//                         "syllabus": "This course covers topics such as processes, threads, and memory management",
//                         "sessions": 18,
//                         "__v": 0
//                     }
//                 ],
//                 "_id": "64363e4fc3dd1e068b97eef7"
//             }
//         ]
//     }




[
    {
      studentId: '6436ee2d5bd0326c1342d37a',
      submissionFile: 'math_homework.pdf',
      markEarned: 85,
      feedback: 'Great job! You really nailed the concepts we covered.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:00:00.000Z',
      updatedAt: '2023-04-15T12:00:00.000Z'
    },
    {
      studentId: '6436ee2d5bd0326c1342d37b',
      submissionFile: 'history_essay.pdf',
      markEarned: 72,
      feedback: 'Good effort, but your essay could use some improvement. Let\'s discuss in class.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:05:00.000Z',
      updatedAt: '2023-04-15T12:05:00.000Z'
    },
    {
      studentId: '6436ee2d5bd0326c1342d382',
      submissionFile: 'chemistry_lab_report.pdf',
      markEarned: 95,
      feedback: 'Excellent work! Your lab report was very thorough and well-written.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:10:00.000Z',
      updatedAt: '2023-04-15T12:10:00.000Z'
    },
    {
      studentId: '6436ee2d5bd0326c1342d380',
      submissionFile: 'english_poetry_analysis.pdf',
      markEarned: 88,
      feedback: 'Well done! Your poetry analysis was insightful and well-organized.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:15:00.000Z',
      updatedAt: '2023-04-15T12:15:00.000Z'
    },
    {
      studentId: '6436ee2d5bd0326c1342d381',
      submissionFile: 'physics_problem_set.pdf',
      markEarned: 70,
      feedback: 'Good start, but you should work on your problem-solving skills. Let\'s practice some more.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:20:00.000Z',
      updatedAt: '2023-04-15T12:20:00.000Z'
    },
    {
      studentId: '6436ee2d5bd0326c1342d37e',
      submissionFile: 'biology_research_paper.pdf',
      markEarned: 92,
      feedback: 'Impressive work! Your research paper was well-researched and well-written.',
      assignmentId: '64399a84ca050f9b22c65377',
      createdAt: '2023-04-15T12:25:00.000Z',
      updatedAt: '2023-04-15T12:25:00.000Z'
    }
    ,
    
    
    {
          studentId: '6436ee2d5bd0326c1342d37f',
          submissionFile: 'music_composition.pdf',
          markEarned: 90,
          feedback: 'Excellent work! Your music composition was very creative and well-structured.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:30:00.000Z',
          updatedAt: '2023-04-15T12:30:00.000Z'
        },
        {
          studentId: '6436ee2d5bd0326c1342d379',
          submissionFile: 'computer_science_project.pdf',
          markEarned: 82,
          feedback: 'Good effort, but there were some issues with your code. Let\'s work on debugging together.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:35:00.000Z',
          updatedAt: '2023-04-15T12:35:00.000Z'
        },
        {
          studentId: '6436ee2d5bd0326c1342d37c',
          submissionFile: 'spanish_dialogue.pdf',
          markEarned: 78,
          feedback: 'Not bad, but your Spanish needs some improvement. Let\'s review some grammar rules together.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:40:00.000Z',
          updatedAt: '2023-04-15T12:40:00.000Z'
        },
        {
          studentId: '6436ee2d5bd0326c1342d37d',
          submissionFile: 'philosophy_essay.pdf',
          markEarned: 91,
          feedback: 'Great work! Your philosophy essay was very thought-provoking and well-argued.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:45:00.000Z',
          updatedAt: '2023-04-15T12:45:00.000Z'
        },
        {
          studentId: '6436ee2d5bd0326c1342d37e',
          submissionFile: 'marketing_presentation.pdf',
          markEarned: 87,
          feedback: 'Well done! Your marketing presentation was engaging and persuasive.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:50:00.000Z',
          updatedAt: '2023-04-15T12:50:00.000Z'
        },
        {
          studentId: '6436ee2d5bd0326c1342d381',
          submissionFile: 'geography_report.pdf',
          markEarned: 83,
          feedback: 'Good effort, but your geography report could use more detail. Let\'s work on research skills together.',
          assignmentId: '64399abaca050f9b22c6537b',
          createdAt: '2023-04-15T12:55:00.000Z',
          updatedAt: '2023-04-15T12:55:00.000Z',
        }
]