import Image, { StaticImageData } from "next/image";
import howtodothework from "./images/howtodothework.jpg";
import running_on_empty from "./images/running_on_empty.jpg";
import its_not_me_its_you from "./images/its_not_me_its_you.webp";
import secure_love from "./images/secure_love.jpg";
import mating_in_captivity from "./images/mating_in_captivity.jpg";
import the_state_of_affairs from "./images/the_state_of_affairs.jpg";
import the_5_love_languages from "./images/the_5_love_languages.jpg";
import the_love_rx from "./images/the_love_rx.jpg";
import seven_principles from "./images/seven_principles.jpg";
import single_on_purpose from "./images/single_on_purpose.jpg";
import Attached from "./images/Attached.jpg";

interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string[];
  link: string;
  currentlyReading: boolean;
}
export const BooksList = [
  {
    title: "How to Do the Work",
    author: "Dr. Nicole LePera",
    image: howtodothework,
    description: "",
    thoughts: [
      "This is a very powerful book that helps the reader understand the power of the mind.",
      "It guides you to uncover the root causes of self-sabotaging patterns and become more conscious of how childhood conditioning impacts your mental and physical health.",
      "Provides insights and tools to develop positive patterns that improve well-being, ultimately helping you feel happier, healthier, and more in control of your life.",
    ],
    link: "https://www.amazon.com/How-Do-Work-Recognize-Patterns/dp/B092394734/ref=sr_1_1?crid=17RHRFSDMA8SD&dib=eyJ2IjoiMSJ9.Wrzv-uWwwF8d4F6XRtEPnwUwQnr87dXmQD6U4gn2WUZFByEbi9yPhfPQjUgkgHN9-mM0FxScCryODYNDnXcFeXa7cpig6812xkkPh4EbnTbEwX8iofwJ2EduCjmQCQ_dtHC7R61FulMxebkkzY77fQ13XV7J2Gw81-PTfc3R1VblLqxh6ZwASaOygGyQ7p-DyN2aDdZIO4i05L4zmUNnzS8rvoz7r3iL4sijkPtn9fQ.6ZXaUG0QMqDrXQ3Hf2f7pgXm8rVDscz79F0VCuiD4GI&dib_tag=se&keywords=how+to+do+the+work&qid=1720813129&sprefix=how+to+do+the+work%2Caps%2C79&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "Running on Empty",
    author: "Jonice Webb, PhD",
    image: running_on_empty,
    description: "",
    thoughts: [
      "Focuses on children who grow up emotionally neglected.",
      "Its scientific approach is both enlightening and engaging.",
      "Provides many examples in a case study-like format, making the concepts more relatable.",
      "Discusses different parenting styles and their effects on a child.",
      "Offers deep insights into how childhood emotional neglect shapes adult life.",
      "Provides practical strategies and alternative ways of thinking and growing.",
      "Great resource for anyone seeking to understand how their past can affect their present-day behaviors.",
    ],
    link: "https://www.amazon.com/Running-Empty-Overcome-Childhood-Emotional/dp/161448242X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9BXvQ3Wuz3q-cvNpKn2fpMtUJi8CrQpDG2pQITuqDaRA0KQci8YPZt1H2QohFYekvzuSyAjfn1y7Qr6BcSWaekiNp2INZ0guZWzQZ3dSdYgB9c68LrUEYNEImMf-pxtvPZYQIVSH3BHeFmxF_tKNjrADuyApgiuO1WEMUyBGG8N_il-37Q-9fmBQVfMl8ypbZ4WS3qjc3ZDAH9ipV5F2NZB2hMywlV_tRyAi1-geOa4.hewB9RXMQegnqizXeJOg2FvEiFFRzl-OIalQGC-Xm_o&dib_tag=se&hvadid=174250644676&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=18209283510957391610&hvtargid=kwd-39565110&hydadcr=24659_9648993&keywords=running+on+empty&qid=1721065900&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "It's Not Me, It's You",
    author: "John Kim and Vanessa Bennett",
    image: its_not_me_its_you,
    description: "",
    thoughts: [
      "Provides a unique perspective from two married therapists who analyze their own relationship and past relationships.",
      "Detailed accounts of their journey together, discussing day-to-day relationship challenges.",
      "Emphasizes the importance of self-growth, communication, and understanding in fostering a healthy, long-term partnership.",
      "As I neared the end, I found myself not wanting the book to end.",
    ],
    link: "https://www.amazon.com/Its-Not-Me-You-Relationship/dp/0063206315/ref=sr_1_1?crid=1HYODSXH4RLLN&dib=eyJ2IjoiMSJ9.8SNDLLG864y_4F27TC305H1DIzkVm02ZAoF_YN8UEVBZSMXns7HuqiMDyo0Y7FdpXwyevo7vDbnhF2TpQTL6Te5KnX_R2a35AO-coJjFnXPJ0J_vfjLzSeIdWFOVE5WRCE96NMxq5haVjxuMXhYFUzr9YUfxOBi6h-qzfR4YmKsHt0wd1eGpKIaK-o1bAZNJWeCmec_vGyEsUsBxUxeB_7sBUKs4aoyrPBCFjwovKU0.lqQGEnAdN5tOnjC7CeiD_3pKoSlvIfp_VYY_trNqBns&dib_tag=se&keywords=it%27s+not+me+it%27s+you&qid=1721066902&sprefix=it%27s+not+me+it%27s%2Caps%2C85&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "Secure Love",
    author: "Julie Menanno",
    image: secure_love,
    description: "",
    thoughts: [
      "Does an excellent job of helping readers understand both themselves and their partners in relationships.",
      "Breaks down common behaviors and explains how to appreciate both perspectives.",
      "Focuses on attachment styles and how different styles influence behavior.",
      "The concept of looking through the lens of attachment allows readers to interpret their partner's actions more deeply.",
      "Great read for those looking to improve their relationships by addressing and understanding attachment needs.",
    ],

    link: "https://www.amazon.com/Secure-Love-Create-Relationship-Lifetime/dp/1668012863/ref=sr_1_1?dib=eyJ2IjoiMSJ9.YA417hGgs4DP9Zi9lNJeiVRqHA2deDgzCsVtY-KwhDNtJ8fM-hs0-TbSf4VY8NmZfww0OiLLw57KHs3xCdT1bvH476z80RPAoGno8xAVmMp8ANEXUdlrJoL50u-3ovjWj-T9nW9yCoQkWXvB-3wAweOQldvPdvbu07417Wq5iq66LsoDenVPLybZwQZ-pWJp4HhbAHXQCrZFxgyh-Mzp8WUGo-y77ogNMt0MOAg9mI4.TG8GfNPznsH3LyaSdfrMjjyBjFSrASNuMtU5joKOI-o&dib_tag=se&hvadid=656260501629&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=6704096486433775881&hvtargid=kwd-2022423946768&hydadcr=22565_13493330&keywords=secure+love+julie+menanno&qid=1721067824&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "Mating in Captivity",
    author: "Esther Perel",
    image: mating_in_captivity,
    description: "",
    thoughts: [
      "Offers insightful and practical advice for rekindling sexual passion in long-term relationships.",
      "Explains the barriers that can diminish desire and provides strategies to overcome them.",
      "Emphasizes understanding how childhood experiences shape adult views on sex.",
      "Highlights the importance of prioritizing intimacy even with busy lives and kids.",
      "Addresses the necessity of acknowledging the risk of infidelity to safeguard against it.",
      "Provides guidance to help couples maintain both emotional and physical intimacy, making this a great read for anyone looking to enhance their relationship.",
    ],
    link: "https://www.amazon.com/Mating-Captivity-Unlocking-Erotic-Intelligence/dp/0060753641/ref=sr_1_1?dib=eyJ2IjoiMSJ9.bXIETwz6rg35EJfbpa4eyYLsPY8MJBndRK-jFPZx9O896wQRAHiwY7xwa4RbYQfjCfOCEEVJXMNyHl79xtP6YTIqCWzcpX4ZXDaJQnvXW9j1QXSXZmW1BUoRyWpEsVw7ARy40rMKiaN3njvrI_80K0-XTFt7Q_T82aj7oxIJCqn-Guljm0pP1UmcRZMCfCPSiIdFuoppcvqYk7XVNFO_5CtlcLGG9K8Hjo-XBER5smE.czcwQp1v0waNoghfLCp25vucj9aYZx8bH52siaHlx1s&dib_tag=se&hvadid=598611025806&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=15785908691450779839&hvtargid=kwd-2305557232&hydadcr=15553_13558561&keywords=mating+in+captivity+esther+perel&qid=1721068287&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "The State of Affairs",
    author: "Esther Perel",
    image: the_state_of_affairs,
    description: "",
    thoughts: [
      "Offers a nuanced exploration of infidelity, challenging the biases and discomfort that often accompany the topic.",
      "Helps readers understand the many dimensions of infidelity without justifying it.",
      "The real-life anecdotes and incisive analysis provide valuable insights into the underlying emotions and motivations behind affairs.",
      "Creates a safe space for re-examining our thoughts on infidelity.",
      "An essential read for anyone looking to gain empathy and insight into the complexities of relationships.",
    ],
    link: "https://www.amazon.com/State-Affairs-Rethinking-Infidelity/dp/0062322591/ref=sr_1_1?dib=eyJ2IjoiMSJ9.TbDUaVxdw7L3pwPtSTliohvFFDvv-HwFcglO8d410NQzvGQUY2HWh_iRwSRDLXvm0gBX9SsM-pj2VwoAfqCH6qeb1u77pQWaRwOAFwzRKLWHgvU621mICDWoXcbb5W5HX62mFdClJzBgeESoVBv5Q-eJ8pX7_BIhEudqm5LLvN7AGeoRu1rTieQtvHAstQ0wpJVhPtzDiF4xn2W5HuAjgU5y1w4yFxBeHaQv4--MoUM.Iqunl832yK9jQJJLOWLf6KCEX1h2jEFvRHB_mAI1I4U&dib_tag=se&hvadid=598656948628&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=9418302432024001867&hvtargid=kwd-865596004775&hydadcr=15552_13558506&keywords=a+state+of+affairs+esther+perel&qid=1721068582&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "The 5 Love Languages",
    author: "Gary Chapman",
    image: the_5_love_languages,
    description: "",
    thoughts: [
      "Provides insights into maintaining emotional love and connection in relationships.",
      "Explains that conflicts often arise from differences in how partners communicate and perceive love.",
      "Serves as a guide for anyone looking to deepen their emotional connection and ensure both partners feel genuinely loved and appreciated.",
    ],
    link: "https://www.amazon.com/Love-Languages-Secret-that-Lasts/dp/080241270X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.MeElUaCPU9PbSpr3CMLRv-fPcy742BvHuOaAjgTt4_I3Y6ykgpn5Y0rmRrHYrvNN4HAas-wZ-S11MO6flVDLJXJORjNSlw6NHOQAZl0yyGP6ksXk81ZkFfHyOmfqPnpJxv8EMTy_esBXR6M4SjFnnmPwA9rSWHK_lHcrQhe00dW92alI_H4DTB_UoLiz9HQDAkrvo-uBy3o2VF9TxNJ8Un31LdDNlN2oujncu5PA-vM.IXV9KdQGk7gAJpCB7Wy8jxh_0JPDRTnYMV_DgWNFnKI&dib_tag=se&hvadid=616990762754&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=1052908644207036688&hvtargid=kwd-2112545889&hydadcr=24633_13611805&keywords=5+love+languages+book&qid=1721069143&sr=8-1",
    currentlyReading: false,
  },
  {
    title: "The Love Prescription",
    author: "John Gottman and Julie Schwartz",
    image: the_love_rx,
    description: "",
    thoughts: [
      "Offers practical advice and activities to strengthen emotional bonds between partners.",
      "Highlights the importance of daily actions in maintaining a healthy and thriving relationship.",
      "Emphasizes the need for appreciation and acknowledgement of positive behaviors in a partnership.",
      "Encourages open-ended questions to build deeper understanding and connection.",
      "Stresses the significance of physical touch and intentional communication for long-term relationship satisfaction.",
    ],
    link: "https://www.amazon.com/Love-Prescription-Seven-Intimacy-Connection/dp/0143136631",
    currentlyReading: false,
  },
  {
    title: "The Seven Principles for Making Marriage Work",
    author: "John Gottman",
    image: seven_principles,
    description: "",
    thoughts: [
      "Highlights the importance of a strong friendship as the foundation of a successful marriage.",
      "Emphasizes the significance of knowing your partner deeply through 'love maps' and maintaining an ongoing connection.",
      "Provides actionable steps for resolving conflicts and managing perpetual problems within a relationship.",
      "Discusses the 'Four Horsemen' of negative interactions and how to counteract them to maintain a healthy marriage.",
      "Encourages couples to create shared meaning and rituals to strengthen their bond and enrich their relationship.",
    ],
    link: "https://www.amazon.com/Seven-Principles-Making-Marriage-Work/dp/0553447718",
    currentlyReading: false,
  },
  {
    title: "Single on Purpose",
    author: "John Kim",
    image: single_on_purpose,
    description: "",
    thoughts: [
      "Emphasizes the journey of self-discovery and finding fulfillment.",
      "Stresses the need to take responsibility, break unhealthy patterns, and rebuild a positive relationship with oneself.",
      "Introduces the concept of 'dating yourself' to cultivate self-love and independence.",
      "Explores Radical Acceptance, encouraging readers to embrace life as it is.",
      "Challenges societal norms of seeking validation through relationships, promoting a life centered on meaning, joy, and engagement.",
    ],
    link: "https://www.amazon.com/Single-Purpose-Redefine-Everything-Yourself/dp/0062980734",
    currentlyReading: false,
  },
  {
    title: "Attached",
    author: "Amire Levine and Rachel Heller",
    image: Attached,
    description: "",
    thoughts: ["Coming Soon"],
    link: "https://www.amazon.com/Attached-Science-Adult-Attachment-YouFind/dp/1585429139/ref=sr_1_1?dib=eyJ2IjoiMSJ9.W2Hu0CFeu4eu-473CFxL4jBcuXpB0HfXkB7_4grJKwqHH-U5nyAQ2_4To42BDPlHH7mAKEMNwhrigzDjqBwg1R6GhNYwNX_g8OlC02PCNjT3FbsCRbS9TaqmwpUlbWxcX40fh1QgKmimem8NquR57BN66VTm_cBNTX_sOHkHr9UYdaB1qQpQH-fz8GtvgjrMKJRAwIFeiIliCy5FhoepjPaF2VW76jeg28SZZo_oLrs.Gne3tkPGNgDXl9M0Xx41jgQBisGWFNgfGVOXm2OsxI0&dib_tag=se&hvadid=281011131015&hvdev=c&hvlocphy=9001854&hvnetw=g&hvqmt=e&hvrand=16779611567248771436&hvtargid=kwd-405488365567&hydadcr=22536_9636732&keywords=the+book+attached&qid=1723581644&sr=8-1",
    currentlyReading: true,
  },
];

export const fetchBooksData = (bookTitle: string): Book | undefined => {
  const book = BooksList.find((b) => b.title === bookTitle);
  return book;
};
