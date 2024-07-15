import Image, { StaticImageData } from "next/image";
import howtodothework from "./images/howtodothework.jpg";
import running_on_empty from "./images/running_on_empty.jpg";
import its_not_me_its_you from "./images/its_not_me_its_you.webp";

interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string;
  link: string;
}
export const BooksList = [
  {
    title: "How to Do the Work",
    author: "Dr. Nicole LePera",
    image: howtodothework,
    description: `As a clinical psychologist, Dr. Nicole LePera often found herself frustrated by the limitations of traditional psychotherapy. Wanting more for her patients—and for herself—she began a journey to develop a united philosophy of mental, physical and spiritual wellness that equips people with the interdisciplinary tools necessary to heal themselves. After experiencing the life-changing results herself, she began to share what she'd learned with others—and soon "The Holistic Psychologist" was born.
  
    Now, Dr. LePera is ready to share her much-requested protocol with the world. In How to Do the Work, she offers both a manifesto for SelfHealing as well as an essential guide to creating a more vibrant, authentic, and joyful life. Drawing on the latest research from a diversity of scientific fields and healing modalities, Dr. LePera helps us recognize how adverse experiences and trauma in childhood live with us, resulting in whole body dysfunction—activating harmful stress responses that keep us stuck engaging in patterns of codependency, emotional immaturity, and trauma bonds. Unless addressed, these self-sabotaging behaviors can quickly become cyclical, leaving people feeling unhappy, unfulfilled, and unwell.
  
    In How to Do the Work, Dr. LePera offers listeners the support and tools that will allow them to break free from destructive behaviors to reclaim and recreate their lives. Nothing short of a paradigm shift, this is a celebration of empowerment that will forever change the way we approach mental wellness and self-care.`,
    thoughts: `This is a very powerful book that helps the reader understand the immense power of the mind. It guides you to uncover the root causes of self-sabotaging patterns and become more conscious of how childhood conditioning impacts your mental and physical health. Dr. LePera provides insights and tools to develop positive patterns that improve well-being, ultimately helping you feel happier, healthier, and more in control of your life.`,
    link: "https://www.amazon.com/How-Do-Work-Recognize-Patterns/dp/B092394734/ref=sr_1_1?crid=17RHRFSDMA8SD&dib=eyJ2IjoiMSJ9.Wrzv-uWwwF8d4F6XRtEPnwUwQnr87dXmQD6U4gn2WUZFByEbi9yPhfPQjUgkgHN9-mM0FxScCryODYNDnXcFeXa7cpig6812xkkPh4EbnTbEwX8iofwJ2EduCjmQCQ_dtHC7R61FulMxebkkzY77fQ13XV7J2Gw81-PTfc3R1VblLqxh6ZwASaOygGyQ7p-DyN2aDdZIO4i05L4zmUNnzS8rvoz7r3iL4sijkPtn9fQ.6ZXaUG0QMqDrXQ3Hf2f7pgXm8rVDscz79F0VCuiD4GI&dib_tag=se&keywords=how+to+do+the+work&qid=1720813129&sprefix=how+to+do+the+work%2Caps%2C79&sr=8-1",
  },
  {
    title: "Running on Empty",
    author: "Dr. Jonice Webb",
    image: running_on_empty,
    description: "",
    thoughts: `Running on Empty focuses on children who grow up emotionally neglected. Dr. Webb's scientific approach is both enlightening and engaging. I particularly liked how she goes over many different examples in a case study-like format, making the concepts more relatable and easier to understand. The book discusses different parenting styles and the effects they can have on a child, providing deep insights into how childhood emotional neglect shapes adult life. Additionally, it offers practical strategies and alternative ways of thinking and growing once you've identified how you might have been emotionally neglected. This book is an invaluable resource for anyone seeking to understand how their past can affect their present-day behaviors.`,
    link: "https://www.amazon.com/Running-Empty-Overcome-Childhood-Emotional/dp/161448242X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9BXvQ3Wuz3q-cvNpKn2fpMtUJi8CrQpDG2pQITuqDaRA0KQci8YPZt1H2QohFYekvzuSyAjfn1y7Qr6BcSWaekiNp2INZ0guZWzQZ3dSdYgB9c68LrUEYNEImMf-pxtvPZYQIVSH3BHeFmxF_tKNjrADuyApgiuO1WEMUyBGG8N_il-37Q-9fmBQVfMl8ypbZ4WS3qjc3ZDAH9ipV5F2NZB2hMywlV_tRyAi1-geOa4.hewB9RXMQegnqizXeJOg2FvEiFFRzl-OIalQGC-Xm_o&dib_tag=se&hvadid=174250644676&hvdev=c&hvlocphy=9002000&hvnetw=g&hvqmt=e&hvrand=18209283510957391610&hvtargid=kwd-39565110&hydadcr=24659_9648993&keywords=running+on+empty&qid=1721065900&sr=8-1",
  },
  {
    title: "It's Not Me, It's You",
    author: "John Kim and Vanessa Bennett",
    image: its_not_me_its_you,
    description: "",
    thoughts: `This book provides a unique perspective from two married therapists who analyze their own relationship and past relationships. They offer detailed accounts of their journey together, discussing day-to-day relationship challenges. The book emphasizes the importance of self-growth, communication, and understanding in fostering a healthy, long-term partnership. As I neared the end, I found myself not wanting the book to end.`,
    link: "https://www.amazon.com/Its-Not-Me-You-Relationship/dp/0063206315/ref=sr_1_1?crid=1HYODSXH4RLLN&dib=eyJ2IjoiMSJ9.8SNDLLG864y_4F27TC305H1DIzkVm02ZAoF_YN8UEVBZSMXns7HuqiMDyo0Y7FdpXwyevo7vDbnhF2TpQTL6Te5KnX_R2a35AO-coJjFnXPJ0J_vfjLzSeIdWFOVE5WRCE96NMxq5haVjxuMXhYFUzr9YUfxOBi6h-qzfR4YmKsHt0wd1eGpKIaK-o1bAZNJWeCmec_vGyEsUsBxUxeB_7sBUKs4aoyrPBCFjwovKU0.lqQGEnAdN5tOnjC7CeiD_3pKoSlvIfp_VYY_trNqBns&dib_tag=se&keywords=it%27s+not+me+it%27s+you&qid=1721066902&sprefix=it%27s+not+me+it%27s%2Caps%2C85&sr=8-1",
  },
];

export const fetchBooksData = (bookTitle: string): Book | undefined => {
  const book = BooksList.find((b) => b.title === bookTitle);
  return book;
};
