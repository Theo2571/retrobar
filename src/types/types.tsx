export {};

export interface PlaceData {
    placeName: string,
    eventName: string,
    eventDate: string,
    views: number,
    photographName: string,
    photos: string[],
}

export interface AdData {
    title: string,
    description: string,
}

export interface ReportVideo {
    date: string,
    views: number,
    urlVideo: string[],
}
