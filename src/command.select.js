MM.Command.Select = Object.create(MM.Command, {
	label: {value: "Move selection"},
	keys: {value: [
		{keyCode: 75, ctrlKey:false},
		{keyCode: 72, ctrlKey:false},
		{keyCode: 74, ctrlKey:false},
		{keyCode: 76, ctrlKey:false}
	]}
});
MM.Command.Select.execute = function(e) {
	var dirs = {
		72: "left",
		75: "top",
		76: "right",
		74: "bottom"
	}
	var dir = dirs[e.keyCode];

	var layout = MM.App.current.getLayout();
	var item = /*MM.App.map*/layout.pick(MM.App.current, dir);
	MM.App.select(item);
}

MM.Command.SelectRoot = Object.create(MM.Command, {
	label: {value: "Select root"},
	keys: {value: [{keyCode: 36}]}
});
MM.Command.SelectRoot.execute = function() {
	var item = MM.App.current;
	while (!item.isRoot()) { item = item.getParent(); }
	MM.App.select(item);
}

// Macs use keyCode 8 to delete instead
if (!MM.isMac()) {
	MM.Command.SelectParent = Object.create(MM.Command, {
		label: {value: "Select parent"},
		keys: {value: [{keyCode: 8}]}
	});
	MM.Command.SelectParent.execute = function() {
		if (MM.App.current.isRoot()) { return; }
		MM.App.select(MM.App.current.getParent());
	}
}
