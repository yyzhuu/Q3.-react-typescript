import { useEffect, useState } from 'react';
import { WalletBalance } from '../utilities/interface'; // Adjust the import based on your project structure

const useWalletBalances = (): WalletBalance[] => {
    const [balances, setBalances] = useState<WalletBalance[]>([]);

    useEffect(() => {
        const fetchBalances = async () => {
            try {
    
                const response = await fetch('https://interview.switcheo.com/prices.json');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: WalletBalance[] = await response.json();
                setBalances(data);
            } catch (error) {
                console.error('Error fetching wallet balances:', error);
            }
        };

        fetchBalances();
    }, []); //run once after rendering 

    return balances; // Return the fetched balances
};

export default useWalletBalances;
