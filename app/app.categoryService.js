module.exports = function() {

    var categories = {
		"action": ["comedy", "crime", "thriller"],
		"animation": ["adventure", "comedy", "family"],
		"documentary": ["biography", "crime", "history"],
		"horror": ["comedy", "drama", "sci-fi"],
		"musical": ["comedy", "romance"],
		"war": ["action", "biography"],
		"adventure": ["biography", "war"],
		"drama": ["romance", "musical"],
		"sci-fi": ["action", "drama"],
		"mystery": ["adventure", "thriller"],
		"western": ["action", "comedy"],
		"thriller": ["action", "mystery"]
	};

    return {
        getCategories: function () {
        	return categories;
        }
    }

}