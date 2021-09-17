export default function fetchData(url) {
    const random = Math.random();

    if (random > 0.5) {
        return { status: 'ok', level: random * 100 };
    }

    return {
        status: 'error',
    }
}