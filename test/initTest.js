window.__html__ = window.__html__ || {};

describe("jQuery works", function()
{
	it("should load the html", function ()
	{
		document.body.innerHTML = __html__['test/index.html'];


		expect($('#test').length).toBeGreaterThan(0);

		expect($('#test')[0]).toEqual(jasmine.any(HTMLDivElement));
	});
});