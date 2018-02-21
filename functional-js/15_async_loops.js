 const loadUsers = async (userIds, load, done) => {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    await users.push(load(userIds[i]))
  }
  done(users)
  return users
}

module.exports = loadUsers