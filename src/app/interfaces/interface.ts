export interface contactDetail {
    name: string,
    mobileNumber: number | string,
    emailAddress: string,
    subject: string,
    message: string
}

export interface navbarOptions {
    label: string;
    section: string;
}

export interface socialLink {
    label: string;
    link: string;
    icon: string;
}

export interface course {
    title: string;
    description: string;
    image: string;
}
