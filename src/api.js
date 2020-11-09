// Base URL
const base_url = 'https://api.rawg.io/api/';

// Get the current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

// Get the current day
const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

// Get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
}

// Set the current date
const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// Set the last year and next year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

console.log(newGamesURL());