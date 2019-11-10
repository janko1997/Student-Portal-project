function Modules(){

    this.modules = [];
    this.count = 0;

    Modules.prototype.registerModule = function(Module){
        //Push the new element in array
        this.modules.push(Module);
        this.count++;
    }

    Modules.prototype.unregisterModule = function(Module){
        //Find Index in array to remove the module
        let index = this.modules.findIndex( (mod) => mod.moduleCode.trim() == Module.moduleCode.trim());
        if(index > -1){
            this.modules.splice(index,1);
            this.count--;
        }
    }
}