// Send AJAX request to server to get dashboard data
const xhr = new XMLHttpRequest();
xhr.open('GET', 'get_dashboard_data.php');
xhr.onload = function() {
	if (xhr.status === 200) {
		const dashboardData = JSON.parse(xhr.responseText);

		// Update HTML with dashboard data
		document.getElementById('total-requests').innerHTML = dashboardData.total_requests;
		document.getElementById('pending-requests').innerHTML = dashboardData.pending_requests;
		document.getElementById('completed-requests').innerHTML = dashboardData.completed_requests;
		document.getElementById('total-customers').innerHTML = dashboardData.total_customers;
		document.getElementById('total-employees').innerHTML = dashboardData.total_employees;
	} else {
		alert('Error retrieving dashboard data.');
	}
};
xhr.send();
