// Get request ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const requestId = urlParams.get('id');

// Check if request ID is valid
if (!requestId) {
	document.getElementById('message').innerHTML = 'Invalid request ID.';
} else {
	// Send AJAX request to server to get request details
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `get_request_details.php?id=${requestId}`);
	xhr.onload = function() {
		if (xhr.status === 200) {
			const requestDetails = JSON.parse(xhr.responseText);

			// Update HTML with request details
			document.getElementById('request-id').innerHTML = requestDetails.id;
			document.getElementById('customer-name').innerHTML = requestDetails.customer_name;
			document.getElementById('contact-number').innerHTML = requestDetails.contact_number;
			document.getElementById('pickup-address').innerHTML = requestDetails.pickup_address;
			document.getElementById('delivery-address').innerHTML = requestDetails.delivery_address;
			document.getElementById('pickup-date-time').innerHTML = `${requestDetails.pickup_date} ${requestDetails.pickup_time}`;
			document.getElementById('delivery-date-time').innerHTML = `${requestDetails.delivery_date} ${requestDetails.delivery_time}`;
			document.getElementById('instructions').innerHTML = requestDetails.instructions;
		} else {
			document.getElementById('message').innerHTML = 'Error retrieving request details.';
		}
	};
	xhr.send();
}
