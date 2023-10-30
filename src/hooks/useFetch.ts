import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState<TripDescription[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(tripData);
      setIsLoading(false);
    }, 800);
  }, []);

  return { data, isLoading, error };
};

interface TripDescription {
  id: string;
  tripName: string;
  description: string;
  cost: number;
  lengthInDays: number;
  imageUrl: string;
  isBookable: boolean;
}

type TripData = Array<TripDescription>;

const tripData: TripData = [
  {
    id: "1a",
    tripName: "Ripley's Flight School",
    description:
      "There's a whole bunch of theory to learn, sure; with the advent of crystallic fusion, the hardest part is learning how to relax and unwind while the technology does everything for you. Grab your favourite camomile and learn to slow down really, really fast.",
    cost: 75000,
    lengthInDays: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1589817327185-d6502a579376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    isBookable: true,
  },
  {
    id: "2a",
    tripName: "Gial's Trap Triggering Masterclass",
    description:
      "Entrapment. Trap music. The Parent Trap. No better trap is there than a trap triggered with tact. \n Join Gial Ackbar and friends, and learn to set, trigger, and sabotage the most complex and esoteric traps in the galaxy.",
    cost: 100000,
    lengthInDays: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1579972668140-f7da53ccc2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    isBookable: true,
  },
  {
    id: "3a",
    tripName: "Intergalactic Ultra Re-style Glow-Up Experience",
    description:
      "When you hear the word 'style', what do you think of? New York? Paris? Milan? \n The truth is out there, and accompanying it is impeccable style. Go get yourself an ice-cream coiffure to make Pyramid Head blush.",
    cost: 250000,
    lengthInDays: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1639738415512-1f122497ef9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    isBookable: false,
  },
  {
    id: "4a",
    tripName: "The Claw Ponderance Retreat",
    description:
      "The claw is our master. The claw chooses who will go and who will stay. \n Take some time out to reflect upon The Claw; with morning Thought Refocus, and two tepid meals a day, there's no better way to recalibrate and bask in true clawsomeness.",
    cost: 2000,
    lengthInDays: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1607203694607-2fde6bb0724c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    isBookable: true,
  },
  {
    id: "5a",
    tripName: "Bovine Bioexploration Brainery",
    description:
      "They're amazing creatures, aren't they?! Enrol on our programme and be whisked to the cusp of understanding of one of Earth's most magnificent beings. 'Udderly Brilliant: 5 supernovas!'",
    cost: 650000,
    lengthInDays: 55,
    imageUrl:
      "https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isBookable: true,
  },
  {
    id: "1b",
    tripName: "Loom in Luminescence",
    description:
      "Take in the planet from a new perspective! Reach staggering heights as you stand on the shoulders of giants; a Sticktoid to be exact. They're friendly, gangly, and have all manner of insider-upsider gossip to impart on your trip. We strongly advise bringing some carabiner clips.",
    cost: 10000,
    lengthInDays: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1530937027413-adadcf3ed719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80",
    isBookable: true,
  },
  {
    id: "2b",
    tripName: "The Void",
    description:
      "Ever had one of those days when you just want to do nothing? In the void, there's no such thing as a day, there is only void ... and you! Float in perpetuity. Reputed to help folks establish a fresh perspective, re-evaluate goals, and practise gratitude, no-one seems to want this one to end, ever...",
    cost: 50000,
    lengthInDays: Infinity,
    imageUrl:
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isBookable: true,
  },
  {
    id: "3b",
    tripName: "Ethel's Miasmic Moonclasping Eco-voyage",
    description:
      "This stinks! By 'this', we don't mean some peculiar JavaScript binding. No! \n Ethel Parpik is on a mission to clean up the galaxy of its fetid moons. Someone keeps leaving them out of the fridge. She's accepting volunteers for her year-long clean-up programme. Full bed and board mostly provided.",
    cost: 0,
    lengthInDays: 365,
    imageUrl:
      "https://images.unsplash.com/photo-1548202983-10c750e0b1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    isBookable: true,
  },
  {
    id: "4b",
    tripName: "Infinite Monkey Tennis",
    description:
      "In the distant past, an earthling dared to dream. His contemporaries' minds were too primitive to comprehend this dream, and he was branded an outcast ... but the annals of time have cradled and nurtured the kernel of his vision to the present day. Now, at last, it's your time. It's your Monkey Tennis.",
    cost: 50000,
    lengthInDays: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1587280501635-a19de238a81e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isBookable: true,
  },
  {
    id: "5b",
    tripName: "Waiting for Godot",
    description:
      "Come. Eavesdrop on the scintillating conversation between humanity's final pair of Godot developers. Perhaps nominative determinism is at the heart of Unity's galaxy-sprawling dominance, but here's your chance to slip away from the white noise, and listen in. Expect to draw your own conclusion ... necessarily.",
    cost: 10,
    lengthInDays: Infinity,
    imageUrl:
      "https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    isBookable: false,
  },
];
