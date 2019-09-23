"use strict";

// search for the index if not found returns -1

var checkDb = function checkDb(id, db) {
	id = Number(id);
	var len = db.length;
	for (var i = 0; i < len; i += 1) {
		if (id === db[i].id) {
			return i;
		}
	}
	return -1;
};

module.exports = checkDb;