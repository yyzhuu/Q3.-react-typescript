import React, { useEffect, useState } from 'react';
import WalletPage from './components/WalletPage';
import Datasource from './utilities/Datasource';
import { WalletBalance } from './utilities/interface';
import { getPriority } from './utilities/utilities'; // Ensure you import getPriority

const App: React.FC = () => {
    const [prices, setPrices] = useState<{ [key: string]: number }>({});
    const [balances, setBalances] = useState<WalletBalance[]>([]);
    const [sortedBalances, setSortedBalances] = useState<WalletBalance[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const datasource = new Datasource("https://interview.switcheo.com/prices.json");

            try {
                const fetchedPrices = await datasource.getPrices();
                setPrices(fetchedPrices);

                // Assume you have a method to fetch balances as well
                const fetchBalances = async (): Promise<WalletBalance[]> => {
                  
                  const response = await fetch("https://interview.switcheo.com/prices.json");
                  if (!response.ok) {
                      throw new Error("Failed to fetch balances");
                  }
                  const data = await response.json();
                  return data as WalletBalance[]; // Ensure your API returns data in the expected format
              };
              
                const fetchedBalances = await fetchBalances(); // Define this method to fetch balances
                setBalances(fetchedBalances);
                setSortedBalances(fetchedBalances); // Initialize sorted balances with fetched balances
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const sortBalances = () => {
        const sorted = [...balances].sort((a, b) => {
            const aPriority = getPriority(a.currency);
            const bPriority = getPriority(b.currency);
            return bPriority - aPriority; // Sort in descending order
        });
        setSortedBalances(sorted);
    };

    return (
        <div>
            <button onClick={sortBalances}>Sort Balances</button>
            <WalletPage balances={sortedBalances} prices={prices} />
        </div>
    );
};

export default App;
