QUnit.test("Checking correct creation of module", function(assert) {
// Set up module object.

var module = new Module("Software Engineering", "Soft251", "10:00", "11:00", "Smeaton", "Day");
// Test module properties.
assert.ok(module, "Check module is not null.");
assert.equal(module.moduleName, "Software Engineering", "Check module name");
assert.equal(module.moduleCode, "Soft251", "Check module code");
assert.equal(module.startTime, "10:00", "Check start time");
assert.equal(module.endTime, "11:00", "Check end time");
assert.equal(module.location, "Smeaton", "Check location");
assert.equal(module.day, "Day", "Check day");
});


