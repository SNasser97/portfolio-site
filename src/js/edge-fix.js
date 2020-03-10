export default function() {
	// display hero title fix for Edge
	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      document.getElementsByClassName("load-hidden")[0].style.visibility = "visible";
      document.getElementsByClassName("load-hidden")[1].style.visibility = "visible";
    }
}