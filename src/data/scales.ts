const defaultMMTRResponses = [
  {value: 1, label: 'Not at all'},
  {value: 3, label: 'Somewhat'},
  {value: 5, label: 'Very much'}
];

const reverseDefaultMMTRResponses = [
  {value: 5, label: 'Not at all'},
  {value: 3, label: 'Somewhat'},
  {value: 1, label: 'Very much'}
]

const howOftenMMTRResponses = [
  {value: 1, label: 'Never'},
  {value: 2, label: 'Rarely'},
  {value: 3, label: 'Sometimes'},
  {value: 4, label: 'Often'},
  {value: 5, label: 'Always'}
]

const defaultFFSPesponses = [
  {value: 1, label: 'Strongly disagree'},
  {value: 2, label: 'Disagree'},
  {value: 3, label: 'Neutral'},
  {value: 4, label: 'Agree'},
  {value: 5, label: 'Strongly Agree'},
]

const mmtrScale = [
  { id: 1, text: "When you sit down to do work or homework, how successful are you at avoiding distraction?", responses: reverseDefaultMMTRResponses },
  { id: 2, text: "How often do you check your phone when you shouldn’t? (e.g., during a meeting or lecture).", responses: howOftenMMTRResponses },
  { id: 3, text: "When driving, how often do you reach for your phone to check for texts/calls/notifications?", responses: howOftenMMTRResponses },
  { id: 4, text: "How urgently do you feel the need to check for possible text messages or emails?", responses: defaultMMTRResponses },
  { id: 5, text: "How often do you find yourself procrastinating by viewing media content online (e.g., YouTube, Netflix, Hulu, etc.)", responses: howOftenMMTRResponses },
  { id: 6, text: "How distracted are you by alerts or notifications on your phone’s lock screen?", responses: defaultMMTRResponses },
  { id: 7, text: "How often do you multitask? (i.e., begin a task or activity but then find yourself doing another task or activity?)", responses: howOftenMMTRResponses },
  { id: 8, text: "How often do you multitask with multiple media devices? (e.g., answer a text message on your phone while browsing Facebook on your computer?)", responses: howOftenMMTRResponses },
  { id: 9, text: "How often do you send texts during class?", responses: howOftenMMTRResponses },
  { id: 10, text: "When talking to people, how often are you distracted by your surroundings?", responses: howOftenMMTRResponses },
  { id: 11, text: "How often do you check for texts or emails while watching a movie in a theater?", responses: howOftenMMTRResponses },
  { id: 12, text: "If you are in the middle of a conversation and receive a notification for a new text or email, how likely are you to check it?", responses: defaultMMTRResponses },
  { id: 13, text: "How often do thoughts about what you are doing next interfere with what you are doing in the moment?", responses: howOftenMMTRResponses },
  { id: 14, text: "How often do alerts/notifications on your phone interfere with what you’re doing?", responses: howOftenMMTRResponses },
  { id: 15, text: "When talking to someone face-to-face, how often do you feel the urge to check your phone for unread messages, notifications, etc.?", responses: howOftenMMTRResponses },
  { id: 16, text: "How often does your multimedia use interfere with your homework or work?", responses: howOftenMMTRResponses },
  { id: 17, text: "How much would other people describe you as being easily distracted?", responses: defaultMMTRResponses },
  { id: 18, text: "In a movie theater, how often are you distracted by other people sitting around you?", responses: howOftenMMTRResponses }
]

const fssScale = [
    {
      id: 1,
      "dimension": "Challenge-Skill Balance",
      "questions": [
        { id: 1, text: "I felt I was competent enough to meet the high demands of the situation.", responses: defaultFFSPesponses },
        { id: 2, text: "I was challenged, but I believed my skills would allow me to meet the challenge.", responses: defaultFFSPesponses },
        { id: 3, text: "My abilities matched the high challenge of the situation.", responses: defaultFFSPesponses },
        { id: 4, text: "The challenge and my skills were at an equally high level.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 2,
      "dimension": "Action-Awareness Merging",
      "questions": [
        { id: 5, text: "I made the correct movements without thinking about trying to do so.", responses: defaultFFSPesponses },
        { id: 6, text: "I performed automatically, without having to think.", responses: defaultFFSPesponses },
        { id: 7, text: "I had a sense of control over my actions.", responses: defaultFFSPesponses },
        { id: 8, text: "My movements were fluent and smooth.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 3,
      "dimension": "Clear Goals",
      "questions": [
        { id: 9, text: "I knew clearly what I wanted to do.", responses: defaultFFSPesponses },
        { id: 10, text: "I had a strong sense of what I wanted to achieve.", responses: defaultFFSPesponses },
        { id: 11, text: "I had a clear goal.", responses: defaultFFSPesponses },
        { id: 12, text: "My goals were clearly defined.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 4,
      "dimension": "Unambiguous Feedback",
      "questions": [
        { id: 13, text: "I was aware of how well I was performing.", responses: defaultFFSPesponses },
        { id: 14, text: "I was aware of my progress in the task.", responses: defaultFFSPesponses },
        { id: 15, text: "I received clear feedback on my performance.", responses: defaultFFSPesponses },
        { id: 16, text: "I could tell how well I was doing.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 5,
      "dimension": "Concentration on the Task",
      "questions": [
        { id: 17, text: "I was totally focused on what I was doing.", responses: defaultFFSPesponses },
        { id: 18, text: "I had total concentration.", responses: defaultFFSPesponses },
        { id: 19, text: "My attention was fully directed toward the task.", responses: defaultFFSPesponses },
        { id: 20, text: "I focused on what I had to do.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 6,
      "dimension": "Sense of Control",
      "questions": [
        { id: 21, text: "I felt in total control of what I was doing.", responses: defaultFFSPesponses },
        { id: 22, text: "I had a feeling of total control.", responses: defaultFFSPesponses },
        { id: 23, text: "I felt I could control what I was doing.", responses: defaultFFSPesponses },
        { id: 24, text: "I felt like I had a good handle on things.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 7,
      "dimension": "Loss of Self-Consciousness",
      "questions": [
        { id: 25, text: "I was not concerned with what others may have been thinking of me.", responses: defaultFFSPesponses },
        { id: 26, text: "I was not worried about what others thought of me.", responses: defaultFFSPesponses },
        { id: 27, text: "I had no concern about how I was presenting myself.", responses: defaultFFSPesponses },
        { id: 28, text: "I was not worried about being judged.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 8,
      "dimension": "Transformation of Time",
      "questions": [
        { id: 29, text: "Time seemed to alter (either slowed down or sped up).", responses: defaultFFSPesponses },
        { id: 30, text: "The way time passed seemed to be different from normal.", responses: defaultFFSPesponses },
        { id: 31, text: "I lost track of time.", responses: defaultFFSPesponses },
        { id: 32, text: "Time seemed to pass differently than usual.", responses: defaultFFSPesponses },
      ]
    },
    {
      id: 9,
      "dimension": "Autotelic Experience",
      "questions": [
        { id: 33, text: "I really enjoyed what I was doing.", responses: defaultFFSPesponses },
        { id: 34, text: "I found the experience extremely rewarding.", responses: defaultFFSPesponses },
        { id: 35, text: "I loved the feeling of doing what I was doing.", responses: defaultFFSPesponses },
        { id: 36, text: "What I was doing was enjoyable.", responses: defaultFFSPesponses },
      ]
    }
  ];


export { mmtrScale, fssScale };