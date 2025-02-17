import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const ACTION_TITLE = "Debrief";

export const ACTION_INFO =
  "Please read all sections of this debrief sheet and tick the checkbox to continue.";

export const ACTION_LABEL = "Continue";

export const DEBRIEF_DATA = [
  {
    id: 1,
    title: "About the project",
    content: [
      {
        id: 1,
        text: (
          <>
            <Typography sx={{ mb: 2 }}>
              <em>
                &quot;TetrisLab: Exploring the Differential Effects of
                Interrupting 📢 and Distracting 👋 UI Notifications on Flow 🧘
                and Performance 📈&quot;
              </em>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Name of Researcher: Des McDonnell
            </Typography>
            <Typography sx={{ mb: 2 }}>
              This study is designed to investigate the impact of passive and
              active notifications on flow state and performance within the
              context of a task-based user interface.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              No deception was used during this experiment.
            </Typography>
            <Typography>
              Thank you very much for taking part in this research study.
            </Typography>
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Withdrawal information",
    content: [
      {
        id: 1,
        text: (
          <>
            <Typography sx={{ mb: 2 }}>
              If you have any questions about this study, or if you would like
              to withdraw your data from the study, please contact the
              researcher at{" "}
              <Link href="mailto:N00236157@student.iadt.ie" color="secondary">
                N00236157@student.iadt.ie
              </Link>{" "}
              or the supervisor at{" "}
              <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary">
                Liam.Challenor@iadt.ie
              </Link>
              .
            </Typography>
            <Typography sx={{ mb: 2 }}>
              In your email let them know your unique participant code provided.
            </Typography>
            <Typography>
              If you submit a request for data removal, all data collected from
              you will be securely deleted. You will be able to remove your data
              from the study until the 28th of February 2025 when the data will
              be combined and analysed. Data removal will not be possible after
              that date. Please keep a copy of this information in case you wish
              to remove your data after leaving this screen.
            </Typography>
          </>
        ),
      },
    ],
  },
  {
    id: 5,
    title: "Data protection",
    content: [
      {
        id: 1,
        text: (
          <Typography>
            Your data will be treated according to GDPR regulations. You will
            find contact information for IADT&apos;s Data Protection Officer, Mr
            Bernard Mullarkey, and more information on your rights concerning
            your data at{" "}
            <Link
              href="https://iadt.ie/about/your-rights-entitlements/gdpr/"
              target="_blank"
              color="secondary"
            >
              https://iadt.ie/about/your-rights-entitlements/gdpr/
            </Link>
          </Typography>
        ),
      },
    ],
  },
  {
    id: 6,
    title: "Support resources",
    content: [
      {
        id: 1,
        text: (
          <>
            <Typography sx={{ mb: 2 }}>
              It is acknowledged that your participation in this experiment may
              have resulted in short-term frustration which is expected to
              alleviate on completion.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              If you have been affected by the content of this study in any way,
              the organisations below may be of assistance.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }} color="primary">
              IADT Student Counselling Service
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Address: Student Services Area, Office C006b, Carriglea Building,
              IADT
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Email:{" "}
              <Link href="mailto:studentcounselling@iadt.ie" color="secondary">
                studentcounselling@iadt.ie
              </Link>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Web:{" "}
              <Link
                href="https://iadt.ie/services/institute-student-services/student-counselling/"
                target="_blank"
                color="secondary"
              >
                https://iadt.ie/services/institute-student-services/student-counselling/
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }} color="primary">
              JIGSAW
            </Typography>
            <Typography sx={{ mb: 2 }}>
              JIGSAW are the National Youth Mental Health organisation and
              offers free online services in the form of one-to-one support and
              group support.
            </Typography>
            <Typography>
              Web:{" "}
              <Link
                href="https://www.jigsaw.ie/"
                target="_blank"
                color="secondary"
              >
                https://www.jigsaw.ie/
              </Link>
            </Typography>
          </>
        ),
      },
    ],
  },
  {
    id: 7,
    title: "Thank you",
    content: [
      {
        id: 1,
        text: (
          <>
            <Typography sx={{ mb: 2 }}>
              Thank you again for taking the time to participate in this
              research.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              If you have any questions about this study, please contact the
              researcher or supervisor at{" "}
              <Link href="mailto:N00236157@student.iadt.ie" color="secondary">
                N00236157@student.iadt.ie
              </Link>{" "}
              or{" "}
              <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary">
                Liam.Challenor@iadt.ie
              </Link>
            </Typography>
          </>
        ),
      },
    ],
  },
];
