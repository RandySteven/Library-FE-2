export enum SnackbarStatus {
    SUCCESS,
    FAILED,
    PENDING
}

export interface SnackbarProp {
    status: SnackbarStatus
    message: string
}