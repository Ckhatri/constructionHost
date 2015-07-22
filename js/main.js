$(document).ready(function () {
	var path = $(location).attr('pathname');
	if (path.indexOf("about") !== -1) {
		$("#aboutMenu").addClass("active");
	}

	else if (path.indexOf("projects") !== -1) {
		$("#projectsMenu").addClass("active");
	}
	else if (path.indexOf("contact") !== -1) {
		$("#contactMenu").addClass("active");
	}
	else {
		$("#homeMenu").addClass("active");
	}
});