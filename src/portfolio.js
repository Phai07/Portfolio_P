import aboutpic from "./components/Access/ME.JPG"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'NW.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'NATTAWUT WANPHEN',
  role: 'SOFTWARE DEVELOPER',
  description:
    'Software Developer | Skilled in Frontend & Backend Development | Passionate about Agile Workflows and Problem-Solving | Committed to Continuous Learning',
  resume: 'https://drive.google.com/file/d/1cYqkNcTkb-khU8aZpejUcogNrsGJHVZP/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/nattawut-wanphen-8690ab21a/',
    github: 'https://github.com/Phai07?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: ' HTML ',
  //   description:
  //     'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
  //   stack: ['HTML, CSS'],
  //   sourceCode: 'https://github.com/Phai07/17-Nattawut-colmar',
  //   livePreview: 'https://17-nattawut-colmar.vercel.app/',
  // },
  {
    name: 'Pharmacy Shop',
    description:
      'Since finding pharmacies or clinics can often be inconvenient and challenging for purchasing, we recognized the opportunity to develop a web e-commerce platform. This platform aims to provide customers with a seamless experience in searching for and ordering medicines and medical products quickly and effortlessly. Additionally, it enhances the operational efficiency of pharmacies and clinics.',
    stack: ['Tailwind CSS','Vite','React js','Express','Nodejs', 'MongoDB','Coulddinary'],
    sourceCode: 'https://github.com/Gargantua-Saichania-JSD8/GenAIDV1',
    livePreview: 'https://gen-aidv-1-deploy-q37l.vercel.app/',
  }
  // {
  //   name: 'Resource Planner',
  //   description:
  //     'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
  //   stack: ['html-css-javascript', 'sequelize', 'React'],
  //   sourceCode: 'https://github.com/stone-com/Resource-Planner',
  //   livePreview: 'https://resource-planner-group2.herokuapp.com/',
  // },
  // {
  //   name: 'GameStoreData(back end)',
  //   description:
  //     'GameStoreData is able to let user retrieve the game from database based on its year and category',
  //   stack: ['Java 8', 'MySQL', 'React'],
  //   sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  // },
  // {
  //   name: 'Music Store(back end)',
  //   description:
  //     'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
  //   stack: ['html-css-javascript', 'sequelize', 'React'],
  //   sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
  //   livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  ' Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Express',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Golang',
  'Git/Github',
  'Figma',
  'Trello',
  'DBeaver',
  'Postman',
  'Vercel',
  'MongoDBCompass,',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'wanphen.nw@gmail.com',
}

export { header, about, projects, skills, contact }
