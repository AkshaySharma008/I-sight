setTimeout(function() {
    (function() {
	document.body.innerHTML = `
	<html>
		<body>
			<div id="alert-image">
				<img src="${chrome.runtime.getURL("images/alert.png")}" id="image"/>
			</div> 
		</body>
	</html>
	`
	})()
}, 1200000);