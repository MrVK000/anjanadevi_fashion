import { course, navbarOptions, socialLink } from "../interfaces/interface";

export const NAVBAR_OPTIONS:navbarOptions[] = [
    {
        label: 'Home',
        section: '#home',
    },
    {
        label: 'About',
        section: '#about',
    },
    {
        label: 'Courses',
        section: '#course',
    },
    {
        label: 'Gallery',
        section: '#gallery',
    },
    {
        label: 'Designs',
        section: '#designs',
    },
    {
        label: 'Contact',
        section: '#contact',
    },
]

export const GALLERY = [
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
    {
        label: '',
        image: '',
    },
]



export const COURSES: course[] = [
    {
        title: 'Bridal Blouse Design',
        description: 'Master the art of designing exquisite bridal blouses with intricate embroidery.',
        image: '../../assets/content images/s-l1200.jpg'
    },
    {
        title: 'Embroidery Fashion',
        description: 'Learn professional embroidery techniques to create unique fashion pieces.',
        image: '../../assets/content images/s-l1200.jpg'
    },
    {
        title: 'Custom Designs',
        description: 'Develop skills to design and stitch custom dresses tailored for clients.',
        image: '../../assets/content images/s-l1200.jpg'
    }
];


export const SOCIAL_LINKS: socialLink[] = [
    {
        label: "E-mail",
        link: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('27anjanadevifashion@gmail.com')}&su=${encodeURIComponent("")}&body=${encodeURIComponent("")}`,
        icon: "fa-solid fa-envelope",
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/anjanadevi_fashion_institute?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: "fa-brands fa-instagram",
    },
    {
        label: "Whatsapp",
        link: "https://wa.me/919003877768?text=Hi!%20I'm%20interested%20in%20enrolling%20for%20a%20fashion%20course.%20Can%20you%20help?",
        icon: "fa-brands fa-whatsapp",
    },
    {
        label: "90038 77768",
        link: "90038 77768",
        icon: "fa-solid fa-square-phone",
    },
]
