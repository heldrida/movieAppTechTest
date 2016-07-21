module.exports = function() {

	var list = [{
		title: 'movieA',
		category: 'categoryA',
		subcategory: 'subCategoryA',
		actors: [{
			name: 'name1',
			salary: 5000	
		}, {
			name: 'name2',
			salary: 65000
		}, {
			name: 'name3',
			salary: 16500
		}]
	}, {
		title: 'movieB',
		category: 'categoryB',
		subcategory: 'subCategoryB',
		actors: [{
			name: 'name1',
			salary: 66000
		}, {
			name: 'name2',
			salary: 12500
		}, {
			name: 'name3',
			salary: 3295
		}, {
			name: 'name4',
			salary: 85300
		}, {
			name: 'name5',
			salary: 85300
		}, {
			name: 'name6',
			salary: 85300
		}]
	}, {
		title: 'movieC',
		category: 'categoryB',
		subcategory: 'subCategoryB',
		actors: [{
			name: 'name1',
			salary: 66000
		}, {
			name: 'name5',
			salary: 85300
		}, {
			name: 'name6',
			salary: 85300
		}]
	}];

	return {
		get: function () {
			return list;
		},

		set: function (data) {
			list.push(data);
		}
	}

}