// Types shared across components/pages
export interface Video {
    title: string;
    youtubeId: string;
    url: string;
}

export interface BlogPost {
    title: string;
    image?: string;
    content: string;
    linkedinUrl?: string;
    date?: string;
}

export interface InfoCardProps {
    title: string;
    content: string;
}

export interface InterestItem {
    icon?: string;
    text: string;
    link?: string;
    linkText?: string;
}
