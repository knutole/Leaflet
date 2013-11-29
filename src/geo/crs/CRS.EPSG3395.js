
L.CRS.EPSG3395 = L.extend({}, L.CRS, {
	code: 'EPSG:3395',

	projection: L.Projection.Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * L.Projection.Mercator.R_MAJOR);
		return new L.Transformation(scale, 0.5, -scale, 0.5);
	}()),

	wrapLng: [-180, 180]
});
