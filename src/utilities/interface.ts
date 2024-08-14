export interface WalletBalance {
    currency: string;
    amount: number;
}

export interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}