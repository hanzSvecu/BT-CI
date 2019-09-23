// searches the database
const searchDb = (location, category, businesses) => {
	const result = [];
	location = location.toLowerCase();
	category = category.toLowerCase();
	for (let i = 0; i < businesses.length; i += 1) {
		if (location === businesses[i].location.toLowerCase()) result.push(i);
	}
	for (let j = 0; j < businesses.length; j += 1) {
		if (businesses[j].categories.includes(category)) {
			if (result.length === 0 || !result.includes(j)) result.push(j);
		}
	}
	return result;
};

module.exports = searchDb;
