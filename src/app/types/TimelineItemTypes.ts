export interface TimelineItemProps {
  item: {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    icon: JSX.Element;
    skills: string[];
  };
  index: number;
}
