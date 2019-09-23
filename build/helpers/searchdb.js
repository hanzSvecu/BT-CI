"use strict";

// searches the database
var searchDb = function searchDb(location, category, businesses) {
	var result = [];
	location = location.toLowerCase();
	category = category.toLowerCase();
	for (var i = 0; i < businesses.length; i += 1) {
		if (location === businesses[i].location.toLowerCase()) result.push(i);
	}
	for (var j = 0; j < businesses.length; j += 1) {
		if (businesses[j].categories.includes(category)) {
			if (result.length === 0 || !result.includes(j)) result.push(j);
		}
	}
	return result;
};

module.exports = searchDb;