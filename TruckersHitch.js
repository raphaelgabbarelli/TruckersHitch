/**
 * Trucker's hitch Inversion of Control container
 */
var TruckersHitch = function() {
	var self = this;
	
	self.dependencies = [];
	
	this.get = function(key){
		for(var i = 0; i < self.dependencies.length; i++){
			var dep = self.dependencies[i];
            
			if(dep.key === key){
				var deps = [];
				if(dep.dependency.$deps != null){
					for(var d = 0; d < dep.dependency.$deps.length; d++){
						deps.push(self.get(dep.dependency.$deps[d]));
					}
				}
				return dep.dependency.$ctor.apply(null, deps);
			}
		}
		return null;
	};
	
	this.add = function(key, dependency){
		for(var i = 0; i < self.dependencies.length; i++){
			if(self.dependencies[i].key === key){
				return;
			}
		}
        self.dependencies.push({key : key, dependency : dependency});
	};
};