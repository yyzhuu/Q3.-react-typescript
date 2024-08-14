class Datasource {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getPrices(): Promise<{ [key: string]: number }> {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error('Failed to fetch prices');
        }
        return response.json();
    }
}

export default Datasource;
