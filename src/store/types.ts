export type StoreEntities<T> = { [id: string]: T };
export enum StoreRequestStatus {
    IDLE = 'idle',
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}
