// search for the index if not found returns -1

const checkDb = (id, db) => {
	id = Number(id);
	const len = db.length;
	for (let i = 0; i < len; i += 1) {
		if (id === db[i].id) {
			return i;
		}
	}
	return -1;
};

module.exports = checkDb;
