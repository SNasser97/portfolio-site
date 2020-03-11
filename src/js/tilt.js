import tilt from 'tilt.js';

function initTilt() {
	$('.project-wrapper__image a div').tilt({
    	maxTilt: 3
	});
};
export default initTilt;
