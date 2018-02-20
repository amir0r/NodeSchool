// It could be tricky for beginners that's why I wrote some comments

// exemple: a simple user = { id: 1 }
// we check if every users from submittedUsers (array of users)
// is equals to some users from goodUsers

const checkUsersValid = (goodUsers) => 
	allUsersValid = (submittedUsers) => submittedUsers
	.every(user => goodUsers
		.some(u => u.id == user.id)
	)

module.exports = checkUsersValid