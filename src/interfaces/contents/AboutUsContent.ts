export interface AboutUsContent {
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