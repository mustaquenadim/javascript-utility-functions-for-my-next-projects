// capitalize text
export const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// calculate percentage
export const calculatePercent = (value, total) => Math.round((value / total) * 100)

// get random elements
export const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];

// remove duplicates
export const removeDuplicates = (arr) => [...new Set(arr)];

// sort elements by certain property
export const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

// check if arrays/objects are equal
export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// count number of occurrences
export const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// wait for a certain amount of time
export const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// pluck property from array of objects
export const pluck = (objs, key) => objs.map((obj) => obj[key]);

// insert an element at a certain position
export const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

