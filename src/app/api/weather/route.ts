import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get('lat');
    const longitude = searchParams.get('lon');

    if (!latitude || !longitude) {
        return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
    }

    const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;

    try {
        const response = await fetch(openMeteoUrl);
        const data = await response.json();

        const formattedData = data.daily.time.slice(0, 4).map((date, index) => {
            const dayNames = ['Today', 'Tomorrow', 'Day 3', 'Day 4'];

            return {
                day: dayNames[index],
                tempRange: `${Math.round(data.daily.temperature_2m_max[index])}°C / ${Math.round(data.daily.temperature_2m_min[index])}°C`,
            };
        });

        return NextResponse.json(formattedData);
    } catch (error) {
        console.error('API Fetch Error:', error);
        return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
    }
}