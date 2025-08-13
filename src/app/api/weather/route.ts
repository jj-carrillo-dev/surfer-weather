export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (!lat || !lon) {
        console.error('API Error: Latitude and longitude are required.');
        return new Response(JSON.stringify({ error: 'Latitude and longitude are required.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const marineApiUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=swell_wave_height,swell_wave_direction,swell_wave_period,sea_surface_temperature&forecast_days=4`;

        console.log('Fetching from URL:', marineApiUrl);

        const response = await fetch(marineApiUrl);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Open-Meteo API Error:', response.status, errorBody);
            throw new Error(`Failed to fetch data from Open-Meteo API: ${response.statusText}`);
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Server-side Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}