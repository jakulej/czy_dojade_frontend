export type AccidentDTO = {
    id: number;
    time_of_accident: string;//time type - to fix
    acc_latitude: number;
    acc_longitude: number;
    is_verified: boolean;
    tripDTO: number;
}