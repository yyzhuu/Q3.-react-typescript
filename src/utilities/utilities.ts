import { FormattedWalletBalance, WalletBalance } from './interface';

export const getPriority = (blockchain: string): number => {
    switch (blockchain) {
        case 'Osmosis':
            return 100;
        case 'Ethereum':
            return 50;
        case 'Arbitrum':
            return 30;
        case 'Zilliqa':
            return 20;
        case 'Neo':
            return 20;
        default:
            return -99;
    }
};
export const formatBalances = (balances: WalletBalance[]): FormattedWalletBalance[] => {
    return balances.map(balance => {
        // Check if amount is a number before calling toFixed
        const formattedAmount = typeof balance.amount === 'number' ? balance.amount.toFixed(2) : '0.00';

        return {
            ...balance,
            formatted: formattedAmount, // Format the amount to two decimal places
        };
    });
};