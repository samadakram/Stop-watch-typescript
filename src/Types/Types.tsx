export type Hour = number;

export type action = () => void;

export type Button = {
    title: string;
    click?: () => void;
    disable: boolean
}