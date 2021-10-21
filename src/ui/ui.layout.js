import { repo } from "../layout/layout.js";


MM.UI.Layout = function() {
	this._select = document.querySelector("#layout");
	let layout = repo.get("map");
	this._select.append(new Option(layout.label, layout.id));

	var label = this._buildGroup("Graph");
	let graphOptions = ["right", "left", "bottom", "top"].map(name => {
		let layout = repo.get(`graph-${name}`);
		return new Option(layout.label, layout.id);
	});
	label.append(...graphOptions);

	var label = this._buildGroup("Tree");
	let treeOptions = ["right", "left"].map(name => {
		let layout = repo.get(`tree-${name}`);
		return new Option(layout.label, layout.id);
	});
	label.append(...treeOptions);

	this._select.addEventListener("change", this);
}

MM.UI.Layout.prototype.update = function() {
	var value = "";
	var layout = MM.App.current.layout;
	if (layout) { value = layout.id; }
	this._select.value = value;

	this._getOption("").disabled = MM.App.current.isRoot;
	this._getOption("map").disabled = !MM.App.current.isRoot;
}

MM.UI.Layout.prototype.handleEvent = function(e) {
	var layout = repo.get(this._select.value);

	var action = new MM.Action.SetLayout(MM.App.current, layout);
	MM.App.action(action);
}

MM.UI.Layout.prototype._getOption = function(value) {
	return this._select.querySelector("option[value='" + value + "']");
}

MM.UI.Layout.prototype._buildGroup = function(label) {
	var node = document.createElement("optgroup");
	node.label = label;
	this._select.appendChild(node);
	return node;
}
