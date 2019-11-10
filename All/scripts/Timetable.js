$(document).ready(() => {
  showRegisteredModules(modules);

  $('#btn_chat').click(() => {
    $('#mainBody').load('../chat.html');
  });

  $('#Add').click(() => {
    const allInputs = $(':input').serializeArray();

    // fill array with value and name
    const inptusArray = [];
    $.each(allInputs, (index, input) => {
      inptusArray.push([input.name, input.value]);
    });

    // get all empty Inputs
    const emptyInputs = inptusArray.filter(input => input[1].length == 0);

    if (emptyInputs.length != 0) {
      let alertText = '';
      // fill alertText with the names of empty Input Boxes
      emptyInputs.forEach(input => (alertText += `${input[0]}, `));
      alert(`You haven't insert ${alertText}`);
    } else {
      // get only values
      const onlyValues = inptusArray.map(input => input[1]);
      // create a module object
      const newModule = new Module(
        onlyValues[0],
        onlyValues[1],
        onlyValues[2],
        onlyValues[3],
        onlyValues[4],
        onlyValues[5]
      );
      modules.registerModule(newModule);

      showRegisteredModules(modules);
      student.registerModules(modules);
      fillingInputs('', '', '', '', '', '');
    }
  });

  // Edit registered Modules
  $('#registeredModules').on('click', '.edit', function() {
    const closestModule = $(this)
      .parent()
      .text();
    const trimString = closestModule.trim();
    const onlyValues = trimString.split('|');
    const newModule = new Module(
      onlyValues[0],
      onlyValues[1],
      onlyValues[2],
      onlyValues[3],
      onlyValues[4],
      onlyValues[5]
    );
    modules.unregisterModule(newModule);
    $(this)
      .parent()
      .remove();
    fillingInputs(
      onlyValues[0],
      onlyValues[1],
      onlyValues[2],
      onlyValues[3],
      onlyValues[4],
      onlyValues[5]
    );
    student.registerModules(modules);
  });
  // Delete Registered Modules
  $('#registeredModules').on('click', '.delete', function() {
    const closestModule = $(this)
      .parent()
      .text();
    const trimString = closestModule.trim();
    const onlyValues = trimString.split('|');
    const newModule = new Module(
      onlyValues[0],
      onlyValues[1],
      onlyValues[2],
      onlyValues[3],
      onlyValues[4],
      onlyValues[5]
    );
    $(this)
      .parent()
      .remove();
    modules.unregisterModule(newModule);
    student.registerModules(modules);
  });

  // Adding Modules to the timetable
  function showRegisteredModules(registeredModules) {
    $('#registeredModules').empty();
    if (registeredModules.count != 0) {
      registeredModules.modules.forEach(mod => {
        $('#registeredModules').append(
          `<div> ${mod.moduleName} | ${mod.moduleCode} | ${mod.startTime} | ${
            mod.endTime
          } | ${mod.location} | ${
            mod.day
          } <input type="submit" class="edit" value="Edit">` +
            `<input type="submit" class="done delete" value="Delete"></div>`
        );
      });
    }
  }

  function fillingInputs(mn, mc, st, et, l, d) {
    ModuleName = $('#ModuleName').val(mn);
    ModuleCode = $('#ModuleCode').val(mc);
    StartTime = $('#StartTime').val(st);
    EndTime = $('#EndTime').val(et);
    Location = $('#Location').val(l);
    Day = $('#Day').val(d);
  }
});
