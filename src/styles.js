// styles.js
const styles = {
  /* Paddings */
  paddingX: "padding-left: 40px; padding-right: 40px;",
  paddingY: "padding-top: 40px; padding-bottom: 40px;",
  padding:
    "padding-left: 40px; padding-right: 40px; padding-top: 40px; padding-bottom: 40px;",

  /* Hero text */
  heroHeadText:
    "font-weight: 900; color: white; font-size: 80px; line-height: 98px; margin-top: 16px;",
  heroSubText:
    "color: #dfd9ff; font-weight: 500; font-size: 30px; line-height: 40px;",

  /* Section headings */
  sectionHeadText: "color: white; font-weight: 900; font-size: 60px;",
  sectionSubText:
    "font-size: 18px; color: #aaa6c3; text-transform: uppercase; letter-spacing: 1px;",

  /* Navbar */
  navbar: `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    z-index: 20;
  `,
  navbarScrolled: "background-color: #050816;",
  navbarLink: `
    color: #aaa6c3;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
  `,
  navbarLinkActive: "color: white;",

  /* Hero section wrapper */
  heroWrapper: `
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  /* Hero vertical line */
  heroLineContainer: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `,
  heroLineCircle: `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #915EFF;
  `,
  heroLine: `
    width: 4px;
    height: 320px;
    background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  `,

  /* Works / Projects */
  projectCard: `
    background-color: #0f0f1a;
    padding: 20px;
    border-radius: 24px;
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
  `,
  projectImageWrapper: `
    position: relative;
    width: 100%;
    height: 230px;
  `,
  projectImage: `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  `,
  projectOverlay: `
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    margin: 12px;
  `,
  projectGithub: `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to right, #434343, #000000);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  projectName: `
    color: white;
    font-weight: 700;
    font-size: 24px;
    margin-top: 20px;
  `,
  projectDesc: `
    color: #aaa6c3;
    font-size: 14px;
    margin-top: 8px;
  `,
  projectTag: `
    font-size: 14px;
    margin-right: 8px;
  `,

  /* Tech section */
  techCard: `
    width: 112px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  /* Feedbacks */
  feedbackWrapper: `
    margin-top: 48px;
    border-radius: 20px;
  `,
  feedbackHeader: `
    background-color: #151030;
    border-radius: 16px;
    padding: 40px;
    min-height: 300px;
  `,
  feedbackCards: `
    margin-top: -80px;
    padding: 0 40px 56px;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
  `,
  feedbackCard: `
    background-color: #090325;
    padding: 40px;
    border-radius: 24px;
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
  `,
  feedbackQuote: `
    color: white;
    font-weight: 900;
    font-size: 48px;
  `,
  feedbackText: `
    color: white;
    font-size: 18px;
    letter-spacing: 0.04em;
    margin-top: 4px;
  `,
  feedbackUser: `
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  feedbackUserInfo: `
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  feedbackName: `
    color: white;
    font-size: 16px;
    font-weight: 500;
  `,
  feedbackRole: `
    color: #aaa6c3;
    font-size: 12px;
    margin-top: 4px;
  `,
  feedbackAvatar: `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  `,

  /* Contact form */
  contactFormWrapper: `
    flex: 0.75;
    padding: 32px;
    border-radius: 16px;
    border: 1px solid #aaa6c3;
  `,

  /* Canvas / Loader */
  canvasLoader: `
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.1s infinite ease;
    transform: translateZ(0);
  `,

  /* Gradients */
  blackGradient: `
    background: linear-gradient(to right, #434343, #000000);
  `,
  violetGradient: `
    background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  `,
  greenPinkGradient: `
    background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  `,
  orangeTextGradient: `
    background: linear-gradient(to top, #f12711, #f5af19);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  greenTextGradient: `
    background: linear-gradient(to top, #11998e, #38ef7d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  blueTextGradient: `
    background: linear-gradient(to top, #2f80ed, #56ccf2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  pinkTextGradient: `
    background: linear-gradient(to top, #ec008c, #fc6767);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};

export { styles };
