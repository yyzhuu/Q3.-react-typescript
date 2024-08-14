import React from 'react';


interface WalletRowProps {
    className?: string; 
    amount: number;
    Value: number; 
    formattedAmount: string; 
}

// WalletRow functional component
const WalletRow: React.FC<WalletRowProps> = ({ className, amount, Value, formattedAmount }) => {
    return (
        <div className={className}>
            <div>
                <strong>Amount:</strong> {formattedAmount}
            </div>
            <div>
                <strong>Value:</strong> ${Value.toFixed(2)}
            </div>
        </div>
    );
};

export default WalletRow;
