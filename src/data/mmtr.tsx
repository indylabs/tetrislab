export const ACTION_TITLE = "Media Multitasking (Revised) Questionnaire";

export const ACTION_INFO = "Please answer all questions to continue.";

export const ACTION_LABEL = "Submit Responses";

const MMTR_RESPONSES_DEFAULT = [
  { value: 1, label: "Not at all" },
  { value: 2.5, label: "Somewhat" },
  { value: 5, label: "Very much" },
];

const MMTR_RESPONSES_REVERSE = [
  { value: 5, label: "Not at all" },
  { value: 2.5, label: "Somewhat" },
  { value: 1, label: "Very much" },
];

const MMTR_RESPONSES_HOW_OFTEN = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Always" },
];

export const MMTR_DATA = [
  {
    id: 1,
    text: "When you sit down to do work or homework, how successful are you at avoiding distraction?",
    responses: MMTR_RESPONSES_REVERSE,
  },
  {
    id: 2,
    text: "How often do you check your phone when you shouldn’t? (e.g., during a meeting or lecture).",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 3,
    text: "When driving, how often do you reach for your phone to check for texts/calls/notifications?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 4,
    text: "How urgently do you feel the need to check for possible text messages or emails?",
    responses: MMTR_RESPONSES_DEFAULT,
  },
  {
    id: 5,
    text: "How often do you find yourself procrastinating by viewing media content online (e.g., YouTube, Netflix, Hulu, etc.)",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 6,
    text: "How distracted are you by alerts or notifications on your phone’s lock screen?",
    responses: MMTR_RESPONSES_DEFAULT,
  },
  {
    id: 7,
    text: "How often do you multitask? (i.e., begin a task or activity but then find yourself doing another task or activity?)",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 8,
    text: "How often do you multitask with multiple media devices? (e.g., answer a text message on your phone while browsing Facebook on your computer?)",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 9,
    text: "How often do you send texts during class?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 10,
    text: "When talking to people, how often are you distracted by your surroundings?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 11,
    text: "How often do you check for texts or emails while watching a movie in a theater?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 12,
    text: "If you are in the middle of a conversation and receive a notification for a new text or email, how likely are you to check it?",
    responses: MMTR_RESPONSES_DEFAULT,
  },
  {
    id: 13,
    text: "How often do thoughts about what you are doing next interfere with what you are doing in the moment?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 14,
    text: "How often do alerts/notifications on your phone interfere with what you’re doing?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 15,
    text: "When talking to someone face-to-face, how often do you feel the urge to check your phone for unread messages, notifications, etc.?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 16,
    text: "How often does your multimedia use interfere with your homework or work?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
  {
    id: 17,
    text: "How much would other people describe you as being easily distracted?",
    responses: MMTR_RESPONSES_DEFAULT,
  },
  {
    id: 18,
    text: "In a movie theater, how often are you distracted by other people sitting around you?",
    responses: MMTR_RESPONSES_HOW_OFTEN,
  },
];
