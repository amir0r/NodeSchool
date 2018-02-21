const getDependencies = (tree, key="", result = []) => {
  const module = key + '@' + tree.version
  
  // we don't want duplicates modules of the same version
  // so result.indexOf(module) === -1 will say if it is already in result
  if (key && result.indexOf(module) === -1)
  	result.push(module)
  
  if (tree.dependencies) {
    const keys = Object.keys(tree.dependencies)
    
    if (keys) {
      keys.forEach(key => 
        getDependencies(tree.dependencies[key], key, result)
      )
    }
  }
  
  return result.sort()
}

module.exports = getDependencies

/* The official solution is also interesting
function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}
*/