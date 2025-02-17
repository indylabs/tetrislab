import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const ACTION_TITLE = "Information Sheet";
export const ACTION_INFO =
  "Please read all sections of this information sheet and tick the checkbox to continue.";
export const ACTION_LABEL = "Continue";

export const INFORMATION_DATA = [
  {
    id: 1,
    title: "About the project",
    content: (
      <>
        <Typography sx={{ mb: 2 }}>
          <em>
            &quot;TetrisLab: Exploring the Differential Effects of Interrupting
            📢 and Distracting 👋 UI Notifications on Flow 🧘 and Performance
            📈&quot;
          </em>
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You are invited to take part in research to investigate the impact of
          passive and active notifications on flow state and performance within
          the context of a task-based user interface (UI). This project is being
          undertaken by Des McDonnell for our major research project as part of
          the{" "}
          <Link
            href="https://iadt.ie/courses/cyberpsychology/"
            target="_blank"
            color="secondary"
          >
            MSc Cyberpsychology
          </Link>
          , at the{" "}
          <Link href="https://iadt.ie/" target="_blank" color="secondary">
            Institute of Art, Design and Technology (IADT)
          </Link>
          .
        </Typography>
        <Typography>
          Before you decide whether you wish to take part, it is important for
          you to understand why this research is being done and what it will
          involve. Please take time to read this information carefully and
          discuss it with someone you trust. If there is anything that is
          unclear or if you would like more information please ask, our contact
          details are at the end of this information sheet. Thank you for
          reading this.
        </Typography>
      </>
    ),
  },
  {
    id: 2,
    title: "What is the purpose of the project?",
    content: (
      <Typography>
        As digital information systems become more prevalent in our lives, the
        need to receive status updates and other forms of notifications from the
        applications we rely on has increased significantly. As autonomous AI
        agents become more prevalent, it is expected that this requirement will
        only increase. This study aims to investigate the impact of these
        notifications on flow state and the performance of primary cognitive
        tasks.
      </Typography>
    ),
  },
  {
    id: 3,
    title: "Why are you being invited to take part?",
    content: (
      <Typography>
        You are invited to participate in this study because you are a graduate
        student at IADT and as such meet the minimum age requirement of 18 years
        and have a competent level of computer literacy and familiarity with
        common UI patterns and conventions.
      </Typography>
    ),
  },
  {
    id: 4,
    title: "What is involved?",
    content: (
      <>
        <Typography sx={{ mb: 2 }}>
          If you choose to proceed as a participant in this study you will be
          asked to complete a web-based experiment comprising of pre-task,
          primary task and post-task parts.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="primary">
          Pre-Task
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Prior to the task, you will asked to record your particulars, confirm
          that you meet the requirements for the study and register your
          consent.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          You will also be requested to complete the Media Multitasking-Revised
          (MMT-R) questionnaire. This will involve a series of 18 questions
          related to your general Media Multitasking behaviour. Responses will
          be based on a likert rating scale.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="primary">
          Primary Task
        </Typography>
        <Typography sx={{ mb: 2 }}>
          For the primary task, you will be requested to play a game of Tetris
          using the arrow keys on your keyboard.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          The score you achieve and the time taken to complete this task will be
          recorded and later analysed.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Note that your score and time will not be displayed on screen during
          the game to avoid additional distractions.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          If you are randomly selected to be part of one of two intervention
          cohorts, you will be exposed to interfering stimuli in the form of
          either passive or active UI notifications.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Passive notifications may periodically appear in the bottom right
          corner of your screen and do not require any interaction.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Active notifications may periodically appear in the middle of your
          screen. While this notifications are visible, the primary task will be
          paused. Active notifications will require a response to continue. You
          can response by clicking either &quot;Yes&quot; or &quot;No&quot; with
          your mouse.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="primary">
          Post-Task
        </Typography>
        <Typography sx={{ mb: 2 }}>
          On completion of the primary task, you will be asked to complete the
          Flow State Scale (FSS-2) questionnaire. This will comprise of 36
          questions related to any flow state experienced during the primary
          task. Responses will be based on a likert rating scale.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Finally, you will be presented with debrief information and a
          participant code. Please record your participant code and reference it
          if you decide to withdraw from the study after completion.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          It is estimated that the study will take approximately 15 minutes in
          addition to the primary task time (which is dependent on ability) to
          complete.
        </Typography>
      </>
    ),
  },
  {
    id: 5,
    title: "Do I have to take part?",
    content: (
      <Typography>
        You are free to decide whether you wish to take part or not. If you do
        decide to take part, you will be asked to sign a consent form that lets
        us know you have read this information sheet and understand what is
        involved in the research. You are free to withdraw from this study at
        any time and without giving reasons. Your decision to partake or abstain
        in this study will have no impact on your marks, assessments or future
        studies.
      </Typography>
    ),
  },
  {
    id: 6,
    title: "What are the disadvantages and risks (if any) of taking part?",
    content: (
      <>
        <Typography sx={{ mb: 2 }}>
          If you choose to partake in this study you may be exposed to an
          abnormal amount and frequency of user interface notifications. It is
          acknowledged that this may result in short-term frustration which is
          expected to alleviate on completion of the experiment.
        </Typography>
        <Typography>
          If at any point throughout your involvement, you deem this frustration
          to be overwhelming, you may choose to opt-out completely. You can do
          so by either closing your web browser or clicking on a provided{" "}
          <strong>&quot;Withdraw From Study&quot;</strong> button.
        </Typography>
      </>
    ),
  },
  {
    id: 7,
    title: "What are the possible benefits of taking part?",
    content: (
      <Typography>
        While this study may not benefit you directly, the information gathered
        and findings established through analysis will help to increase the
        understanding of UI interference on flow state and task performance.
      </Typography>
    ),
  },
  {
    id: 8,
    title: "How will my information be used?",
    content: (
      <Typography>
        Your performance on Tetris and your responses to stimuli presented
        during the experiment will be collected as assessed. No identifying
        information will be persisted as part of this study. These results will
        be aggregated with data from other participants and statistically
        analysed. The interpreted results will be presented in the final thesis
        for the MSc Cyberpsychology at the Dun Laoghaire Institute of Art,
        Design & Technology. This can be requested through the library at IADT,
        or by emailing the researcher or supervisor at{" "}
        <Link href="mailto:N00236157@student.iadt.ie" color="secondary">
          N00236157@student.iadt.ie
        </Link>{" "}
        and{" "}
        <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary">
          Liam.Challenor@iadt.ie
        </Link>
        . This study may also be published in an academic journal article and
        may be written about for blog posts or media articles which can be
        requested from the researcher.
      </Typography>
    ),
  },
  {
    id: 9,
    title: "How will my data be protected?",
    content: (
      <>
        <Typography sx={{ mb: 2 }}>
          Under the EU General Data Protection Regulation (GDPR) the legal basis
          for collecting data for scholarly research is that of public interest.
          The regulations regarding the protection of your data will be
          followed. Only data which is needed for analysis will be collected.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          By giving your consent to take part in the study you are consenting to
          the use of your data as detailed in this information sheet. The data
          will be retained by the researcher for at least one year and may be
          retained for up to 7 years if the results of the study are published
          in certain capacities (e.g. in a journal article). There is also a
          possibility that the fully anonymised dataset may be submitted to a
          journal and made available to other researchers and academics
          worldwide for verification purposes, but if this occurs it will be
          ensured that you are not identifiable from the data.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          As the supervisor on this project, I, Dr Liam Challenor, am
          responsible for ensuring that all datasets will be stored in
          accordance with GDPR regulations and those which are not submitted to
          a journal will be fully deleted on or before April 30th 2032.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Throughout the study and during the thesis evaluation period data
          collected will be accessible to the researcher, Des McDonnell and
          supervisor, Dr Liam Challenor only. While participants are completing
          the study, data will be stored in a cloud-based database. On
          completion, data will be exported and stored in encrypted form on
          password-protected computers only.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          If a data breach occurs at any point, the data protection officer in
          IADT will be informed immediately. All data collected and stored will
          be fully anonymous with no identifiable properties.
        </Typography>
        <Typography>
          On or before the 30th of April 2032, copies of data held by the
          researcher and supervisor will be fully deleted. You will find contact
          information for IADT&apos;s Data Protection Officer, Mr Bernard
          Mullarkey, and more information on your rights concerning your data at{" "}
          <Link
            href="https://iadt.ie/about/your-rights-entitlements/gdpr/"
            color="secondary"
          >
            https://iadt.ie/about/your-rights-entitlements/gdpr/
          </Link>
          .
        </Typography>
      </>
    ),
  },
  {
    id: 10,
    title: "Who has reviewed the study?",
    content: (
      <Typography>
        This study has been approved by the IADT Psychology Ethics Committee.
      </Typography>
    ),
  },
  {
    id: 11,
    title: "What if you have any questions or there is a problem?",
    content: (
      <>
        <Typography>
          If you have a concern about any aspect of this study, you may wish to
          speak to the researcher who will do their best to answer your
          questions.
        </Typography>
        <Typography>
          You should contact Des McDonnell via email at{" "}
          <Link href="mailto:N00236157@student.iadt.ie" color="secondary">
            N00236157@student.iadt.ie
          </Link>{" "}
          or their supervisor Dr Liam Challenor at{" "}
          <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary">
            Liam.Challenor@iadt.ie
          </Link>
          .
        </Typography>
      </>
    ),
  },
];
