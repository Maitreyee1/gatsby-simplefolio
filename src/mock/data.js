import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maitreyee Mhasakar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Maitreyee Mhasakar',
  subtitle: 'Geek. Engineer. Coder. Machine Learning Enthusiast.',
  subtitle2: 'Team Darth Vader. Team White Walker.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  img1:'AIS_all.JPG',
  img2:'AIS_p.JPG',
  paragraphOne: 'My passion for coding stems from the core fun of logic building. Whether it was Cloud Computing five years ago, Machine Learning today, or Quantum Computing in the future; you will always find me building algorithms to turn ideas into real-world applications.',
  paragraphTwo: "I have a pending patent for a Pattern Recognition system and two solid internships of automating manual decision-making processes using Machine Learning and Natural Language Processing that reduced human effort from hours/days to minutes. At Pal Inc, I built ML models for early meltdown predictions in Austism and spearheaded effort of data migration to AWS.Currently, I'm working at Lumenci Inc. where I help law firms understand technology in Software litigation cases and help software companies in Intellectual Property Monetization.",
  paragraphThree: "I'm on the lookout for an exciting full-time opportunity where I get to challenge myself, utilize my skill set to contribute to path-breaking innovation, and drive projects to success. I look forward to creating my niche in tech, contributing to impactful projects, and making a difference. I'm glad you are here, explore my site to see all that I have to offer.",
  resume: 'https://drive.google.com/file/d/1aE_bQumzdyh0cZsA9jjkrcKJnzk9O3Jt/view?usp=sharing', // if no resume, the button will not show up
};

export const skillsData = [
	{id: nanoid(),skill:'Python',value:75},
	{id: nanoid(),skill:'Java', value:50},
	{id: nanoid(), skill:'C++', value:40},
	{id: nanoid(), skill:'NLTK',value:60},
	{id: nanoid(), skill:'Spacy',value:50},
	{id: nanoid(),skill:'Scikit-learn',value:50},
	{id: nanoid(),skill:'Numpy',value:50},
	{id: nanoid(),skill:'Pandas',value:60},
	{id: nanoid(),skill:'Tensorflow-Keras',value:30},
	{id: nanoid(),skill:'PyTorch',value:20},
	{id: nanoid(),skill:'Microsoft Azure AI',value:40},
	{id: nanoid(),skill:'MySQL',value:40},
	{id: nanoid(),skill:'PostgreSQL',value:30},
	{id: nanoid(),skill:'MongoDB',value:30},
	{id: nanoid(),skill:'HTML-CSS',value:60},
	{id: nanoid(),skill:'Javascript-Reactjs',value:30},
	{id: nanoid(),skill:'PHP',value:40},
	{id: nanoid(),skill:'OpenSource',value:30},
	{id: nanoid(),skill:'JIRA',value:30},
	{id: nanoid(),skill:'GitHub',value:30},
	{id: nanoid(),skill:'Jupyter,Google Colab',value:70}
];

// EDUCATION DATA
export const educationData = [
{
  id: nanoid(),
  ulogo: 'UTD-logo.jpg',
  clogo: '',
  university: 'University of Texas at Dallas',
  duration:'Aug 2018 - May 2020',
  college:'',
  degree: 'Masters in Computer Science',
  gpa:'3.4/4.0',
  description: '',
  courses:'Machine learning, Algorithms, Natural language processing, Software evolution and maintenance, Artificial Intelligence, Web Programming Languages',
},
{
  id: nanoid(),
  ulogo: 'sbpu-logo.png',
  clogo: 'Cummins-logo.jpg',
  university: 'Savitribai Phule Pune University',
  duration:'Jul 2013 - Jun 2017',
  college:'MKSSS Cummins College of Engineering for Women',
  degree: 'Bachelors in Computer Engineering',
  gpa:'74%, First Class Distinction',
  description: '',
  courses:'Data Strcutures, Operating Systems, Database Management, Cloud Computing, Smart Systems',
},
];

// WORKEX DATA
export const workexData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Data Science Intern',
	duration:'Aug 2020 - Present',
	company:'Pal Inc (Gaia Wearables)',
    info: 'Building Machine Learning model on wearables’ sensor data for predicting early meltdowns in Autism Spectrum Disorders.',
    info2: 'Python, Scikit-learn, Numpy, Pandas, Matplotlib',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Machine Learning Engineer Intern',
	duration:'Jun 2019 - Aug 2019',
	company:'DPR Construction',
    info: 'Automated end-to-end manual sentiment analysis process with 74% accuracy. Developed customized NLP, ML modules to facilitate supervised classification of construction industry data. The designed system improved manual project selection decision-making procedures by 70%.',
    info2: 'Python, Scikit-learn, NLTK, SpaCY, Numpy, Pandas, Matplotlib',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Research Assistant',
    duration:'Jul 2017 - Apr 2018',
    company:'MKSSS Cummins College of Engineering for Women',
    info: 'Published Patent as one of the three inventors working for Cummins College of Engineering for Women. Designed an innovative handwritten Devanagari character classification algorithm based on a variant of density-based clustering system that reduced processing time of existing systems from complexity of n^2 to nlogn & optimized space usage complexity from n2 to n with 70% accuracy.',
    info2: 'Python, C++, OpenCV',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Intern (Software Developer Intern)',
	duration:'Aug 2016 - May 2017',
	company:'Principal Financial Group',
    info: 'Worked in a team of 4 to automate existing manual underwriting process with 80% accuracy. Built an end-to-end system that performed extractive summarization of medical documents using regex and Natural Language Processing, explored and harnessed Machine Learning algorithms for classifying client into appropriate risk class.',
    info2: 'Tessaract OCR, PostgreSQL, SAS Enterprise Miner, Python, pydocx, NLTK',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
 {
    id: nanoid(),
    img: '',
    title: 'Patent Publication: Handwritten Devanagari Character Recognition System',
    info: 'My native language is Marathi and we write it using Devanagari script. Very few systems have successfully digitized handwritten documents due to complexity of its structure and variability. I designed an efficient new character recognition algorithm that identifies characters based on structure and not on size. This will help revive old scriptures and documents, digitize daily local transactions and help bring tech to people who speak and use the native language in the region as well help bring it to the world. Searchable Publishing Number: 201821016520',
    info2: 'Python,C++,OpenCV',
	label1:'',
	label2:'See Publication',
	topictags:'Machine Learning,Unsupervised Learning, Pattern Recognition,Edge Detection',
    url: '',
    repo: 'http://www.ipindia.nic.in/writereaddata/Portal/IPOJournal/1_4807_1/Part-2.pdf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'System to score meaning based sentence similarity',
    info: 'Built a Natural Language Processing based semantic system to score English sentences based on meaning similarity. Predicted score in range of 1-5; 1 as least similar and 5 as most similar with 70% accuracy.',
    info2: 'Python,Scikit-learn,NLTK,SpaCY,StanfordNLP',
	label1:'',
	label2:'',
	topictags:'Machine Learning,Natural Language Processing,Semantic Similarity',	
    url: '',
    repo: 'https://github.com/Maitreyee1/Natural-Language-Processing/tree/master/Meaning_based_sentence_similarity', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'French to English Language Translation',
    info: 'Built a system to translate 100,000 French sentences to English with 87% accuracy.',
    info2: 'Google Colab Cloud Platform, Python, Tensorflow-Keras, Numpy, Pandas',
	label1:'',
	label2:'',
	topictags:'Natural Language Processing,Deep Learning,Machine Translation,Recurrent Neural Networks,Long-Short Term Memory',
    url: '',
    repo: 'https://github.com/Maitreyee1/Natural-Language-Processing/tree/master/Neural_Machine_Translation/Fall19_Workshop2_Machine_Translation-master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Clothing Classification using Deep Learning',
    info: 'Built a convolutional neural network on a popular Fashion MNIST dataset of 60,000 clothing images to classify clothing into one of 9 categories with 94% accuracy.',
    info2: 'Google Colab Cloud Platform, Python, Tensorflow-Keras, Numpy, Matplotlib',
	label1:'',
	label2:'',
	topictags:'Deep Learning, Convolutional Neural Networks, Image Classification',
    url: '',
    repo: 'https://github.com/Maitreyee1/Basic-Machine-Learning/tree/master/Deep%20Learning/ANN-CNN%20on%20Fashion_MNIST_Dataset', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: '',
    title: 'Paralleling tuning of PID controller simulations using GPU',
    info: 'Converted serial operation of PID controller simulation tuning into parallel by harnessing GPU computing power using CUDA on Nvidia GTX 1060. This reduces processing time and improves computation with accuracy of 85%.',
    info2: 'Python, Numpy, pyCUDA, jit, numba',
	label1:'',
	label2:'',
	topictags:'Hardware, GPU,CUDA, Multithreading',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Virtual Reality based Chemistry lab',
    info: 'Built a simulation of a chemistry lab where user performs experiments using various physics and object effects on the apparatus and interacts using navigation techniques, throwing, grabbing and other body movements. The simulation can help chemist analyze experiments before the actual trials in the lab. This can help teach apparatus handling to Chemistry beginners.',
    info2: 'Unity3D, C#',
	label1:'',
	label2:'',
	topictags:'Virtual Reality',
    url: '',
    repo: '' // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'maitreyee.mhasakar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maitreyee-mhasakar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Maitreyee1',
    },
	{
      id: nanoid(),
      name: 'wordpress',
      url: 'https://maitreyeemhasakar.wordpress.com/',
    },
  ],
};


// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
