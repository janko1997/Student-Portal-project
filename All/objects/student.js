function Student(name) {
    // Set up basic attributes.
    this.name = name;
 
    this.registerModules = function(modules){
        this.modules = modules;
    }
}