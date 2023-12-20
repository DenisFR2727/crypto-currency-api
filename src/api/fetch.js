export default async function fetchExchangeRate() {
    const apiKey = '6c9a6f8e8951433a6ee7ec3cd3c62e976afea19ca3f31d373581dfd2681b69e5';
    const mainCryptocurrencies = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];

    const url = 'https://min-api.cryptocompare.com/data/pricemulti';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Apikey ${apiKey}`,
            },
            body: JSON.stringify({
                fsyms: mainCryptocurrencies,
                tsyms: ['USD', 'EUR', 'USDT'],
            }),
        });

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error; 
    }
}