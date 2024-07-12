import Image, { StaticImageData } from "next/image";
import howtodothework from "./images/howtodothework.jpg";

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
    thoughts: `I thought it was a very powerful read. Dr. LePera's approach to mental wellness and self-care is both refreshing and deeply insightful. The way she integrates various scientific fields and healing modalities provides a comprehensive understanding of how our past experiences shape our present behaviors. Her emphasis on self-healing and empowerment resonated with me, making the book not just informative but also transformational. It's a guide that encourages readers to take control of their mental health, offering practical tools and strategies to break free from destructive patterns and create a more fulfilling life. The personal anecdotes and relatable examples make complex concepts accessible, and the overall message is one of hope and possibility. This book has had a lasting impact on my perspective on self-care and mental wellness, and I highly recommend it to anyone looking to make meaningful changes in their life.`,
    link: "https://www.amazon.com/How-Do-Work-Recognize-Patterns/dp/B092394734/ref=sr_1_1?crid=17RHRFSDMA8SD&dib=eyJ2IjoiMSJ9.Wrzv-uWwwF8d4F6XRtEPnwUwQnr87dXmQD6U4gn2WUZFByEbi9yPhfPQjUgkgHN9-mM0FxScCryODYNDnXcFeXa7cpig6812xkkPh4EbnTbEwX8iofwJ2EduCjmQCQ_dtHC7R61FulMxebkkzY77fQ13XV7J2Gw81-PTfc3R1VblLqxh6ZwASaOygGyQ7p-DyN2aDdZIO4i05L4zmUNnzS8rvoz7r3iL4sijkPtn9fQ.6ZXaUG0QMqDrXQ3Hf2f7pgXm8rVDscz79F0VCuiD4GI&dib_tag=se&keywords=how+to+do+the+work&qid=1720813129&sprefix=how+to+do+the+work%2Caps%2C79&sr=8-1",
  },
];

export const fetchBooksData = (bookTitle: string): Book | undefined => {
  const book = BooksList.find((b) => b.title === bookTitle);
  return book;
};
