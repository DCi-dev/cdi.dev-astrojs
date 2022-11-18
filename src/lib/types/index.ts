export type Skill = {
  title: string;
  data: {
    name: string;
    description: string;
    icon: string;
    url: string;
  }[];
};

export type Social = {
  title: string;
  data: {
    name: string;
    description: string;
    icon: string;
    url: string;
  }[];
};

export type Stack = {
  title: string;
  data: {
    name: string;
    description: string;
    icon: string;
    url: string;
  }[];
};

export type Certificate = {
  title: string;
  issuedDate: string;
  issuedBy: {
    name: string;
    logo: string;
  };
  url: string;
  pinned: boolean;
};
