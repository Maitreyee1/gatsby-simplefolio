import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maitreyee Mhasakar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
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
  img3:'x.jpg',
  paragraphOne: 'Hi, This is Maitreyee. Thanks for visitng my website.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
	{id: nanoid(),skill:'PostgresSQL',value:30},
	{id: nanoid(),skill:'MongoDB',value:30},
	{id: nanoid(),skill:'HTML-CSS',value:60},
	{id: nanoid(),skill:'Javascript-Ajax,JQuery',value:30},
	{id: nanoid(),skill:'PHP',value:40},
	{id: nanoid(),skill:'JIRA',value:30},
	{id: nanoid(),skill:'GitHub',value:30},
	{id: nanoid(),skill:'Jupyter,Google Colab',value:70}
];

// EDUCATION DATA
export const educationData = [
{
  id: nanoid(),
  ulogo: 'UTD-logo-Copy.jpg',
  clogo: '',
  university: 'University of Texas at Dallas',
  duration:'Aug 2018 - May 2020',
  college:'',
  degree: 'Masters in Computer Science',
  gpa:'3.4/4.0',
  description: '',
  courses:'Machine learning, Algorithms, Natural language processing, Software evolution and maintenance, Artificial Intelligence, Web Programming Languages',
resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
},
{
  id: nanoid(),
  ulogo: 'sbpu-logo-Copy.png',
  clogo: 'Cummins-logo-Copy.jpg',
  university: 'Savitribai Phule Pune University',
  duration:'Jul 2013 - Jun 2017',
  college:'MKSSS Cummins College of Engineering for Women',
  degree: 'Bachelors in Computer Engineering',
  gpa:'74%, First Class Distinction',
  description: '',
  courses:'Data Strcutures, Operating Systems, Database Management, Cloud Computing, Smart Systems',
resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
},
];

// WORKEX DATA
export const workexData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Data Science Intern',
	duration:'Aug 2020 - Present',
	company:'Pal Inc(Gaia Wearables)',
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
    info2: 'Python, Numpy, Pandas, Spacy, NLTK, Scikit-learn, Matplotlib',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Research Assistant',
	duration:'Jul 2017 - Apr 2018',
	company:'MKSSS Cummins College of Engineering for Women',
    info: 'Published Patent for an innovative handwritten Devanagari character classification algorithm & a density-based clustering system that improved time complexity from n2 to nlogn & optimized space complexity from n2 to n with 70% accuracy.',
    info2: 'Python, OpenCV',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Intern(Software Developer Intern)',
	duration:'Aug 2016 - May 2017',
	company:'Principal Financial Group',
    info: 'Worked in a team of 4 to automate existing manual underwriting process with 80% accuracy. Built an end-to-end system that performed extractive summarization of medical documents using regex and NLP, explored and harnessed ML algorithms for classifying client into appropriate risk class.',
    info2: 'Tessaract OCR, PostgresSQL, SAS Enterprise Miner, Python, pydocx, NLTK',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
 {
    id: nanoid(),
    img: '',
    title: 'Pending Patent: Handwritten Devanagari Character Recognition System',
    info: 'Published Patent as one of the three inventors working for Cummins College of Engineering for Women. My native language is Marathi and we write it using Devanagari script. Very few systems have successfully digitized handwritten documents due to compelxity of its structure and variability. I designed an efficient new charcater recognition algorithm that identifies characters based on structure and not on size. This will help revive old scriptures and documents, digitize daily local chores and help bring tech to people who speak and use the native language in the region as well help bring it to the world.',
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
    info2: 'Python,SpaCY,StanfordNLP,NLTK,Scikit-learn',
	label1:'',
	label2:'',
	topictags:'NLP,ML',	
    url: '',
    repo: 'https://github.com/Maitreyee1/Natural-Language-Processing/tree/master/Meaning_based_sentence_similarity', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'French to English Language Translation',
    info: 'Built a LSTM based deep learning model to translate 100,000 French sentences to English with 87% accuracy.',
    info2: 'Google Colab Cloud Platform, Python, Tensorflow, Keras, Numpy, Pandas',
	label1:'',
	label2:'',
	topictags:'NLP,Machine Translation,Machine Learning,Deep Learning, RNN-LSTM',
    url: '',
    repo: 'https://github.com/Maitreyee1/Natural-Language-Processing/tree/master/Neural_Machine_Translation/Fall19_Workshop2_Machine_Translation-master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Fashion MNIST clothing classification using Deep Learning algorithms',
    info: 'Built a convolutional neural network on a popular Fashion MNIST dataset of 60,000 clothing images to classify clothing into one of 9 categories with 94% accuracy.',
    info2: 'Google Colab Cloud Platform, Python, Tensorflow-Keras, Numpy, Matplotlib',
	label1:'',
	label2:'',
	topictags:'Deep Learning, CNN, Image Classification',
    url: '',
    repo: 'https://github.com/Maitreyee1/Basic-Machine-Learning/tree/master/Deep%20Learning/ANN-CNN%20on%20Fashion_MNIST_Dataset', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: '',
    title: 'Paralleling tuning of PID controller simulations using GPU',
    info: 'Converted serial operation of PID controller simulation tuning into parallel by harnessing GPU computing power using CUDA on Nvidia GTX 1060 with accuracy of 85%.',
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
    info: 'Built a simulation of a chemistry lab where user performs experiments using various physics and object effects on the apparatus and interacts using navigation techniques, throwing, grabbing and other body movements.',
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
  ],
};


// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};