export interface HeroTitleProps {
    title: string
}

export interface AboutUsProps {
    welcomeMessage: string;
    mission: string;
    services: Service[];
    whyChooseUs: {
      points: string[];
    };
    values: string[];
    closingMessage: string;
    contactInfo: {
      message: string;
    };
}

interface Service {
    name: string;
    description: string;
}