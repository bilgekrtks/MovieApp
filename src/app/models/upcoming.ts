
export interface Upcoming{
    title: string;
    poster_path: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: Date;
    video: boolean;
    vote_count: number;
    vote_average: number;
    id:number;
}
export interface UpcomingPayload<T> {
    page: number;
    results: T
    dates:string;
    total_pages: number;
    total_results: number;
}