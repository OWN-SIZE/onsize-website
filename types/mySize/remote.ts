export interface AllMysize {
    top: {
        topLength: number;
        shoulder: number;
        chest: number;
        isWidthOfTop: boolean;
    }
    bottom: {
        bottomLength: number;
        waist: number;
        thigh: number;
        rise: number;
        hem: number;
        isWidthOfBottom: boolean;
    }
}

export interface AllMysizeResponse {
    data: AllMysize;
}