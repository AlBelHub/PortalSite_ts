export interface Order {
    id: string,
    status: string,
    author: string,
    department: string,
    timestamp: Date,
    description: string,
}

export interface Announcement {
    id: string,
    author: string,
    header: string, 
    content: string,
    timestamp: Date,
}