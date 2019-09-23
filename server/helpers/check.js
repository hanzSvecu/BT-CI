// helper funciton that retuns true if
// first argument and second argument are present in an array(third argument)

const checkUser = (email, pass, users) => {
	if (email || pass || users) {
		return true;
	}
	return false;
};

module.exports = checkUser;
