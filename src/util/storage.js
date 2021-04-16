export const getSessionStorage = (name) => {
    const itemStr = sessionStorage.getItem(name);
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null;
	}
    const item = JSON.parse(itemStr);
	const now = new Date();
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		sessionStorage.removeItem(name);
		return null;
	}
	return item.value;
};

export const setSessionStorage = (name, value, ttl = 86400) => {
    const now = new Date();
	const item = {
		value,
		expiry: now.getTime() + ttl,
	};
	sessionStorage.setItem(name, JSON.stringify(item));
};