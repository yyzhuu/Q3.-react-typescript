import React from 'react';
import { FormattedWalletBalance, WalletBalance } from '../utilities/interface';
import { formatBalances } from '../utilities/utilities';
import WalletRow from './WalletRow';

interface Props {
    balances: WalletBalance[];
    prices: { [key: string]: number };
}

const WalletPage: React.FC<Props> = ({ balances, prices }) => {
    const formattedBalances = formatBalances(balances);

    const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const Value = prices[balance.currency] * balance.amount;
        return (
            <WalletRow 
                className="wallet-row" 
                key={index}
                amount={balance.amount}
                Value={Value}
                formattedAmount={balance.formatted}
            />
        );
    });

    return (
        <div>
            {rows}
        </div>
    );
};

export default WalletPage;
