// Data Storage (In-memory simulation of database)
let flights = [];
let bookings = [];
let passengers = [];
let aircraft = [];
let nextFlightId = 1;
let nextBookingId = 1;
let nextPassengerId = 1;

// Initialize with sample data
function initializeSampleData() {
    // Sample Aircraft with more variety
    aircraft = [
        {
            id: 1,
            registration: "N12345",
            model: "Boeing 737-800",
            manufacturer: "Boeing",
            capacity: 180,
            year: 2020,
            status: "Active"
        },
        {
            id: 2,
            registration: "N67890",
            model: "Airbus A320",
            manufacturer: "Airbus",
            capacity: 150,
            year: 2019,
            status: "Active"
        },
        {
            id: 3,
            registration: "N11111",
            model: "Boeing 777-300ER",
            manufacturer: "Boeing",
            capacity: 350,
            year: 2021,
            status: "Active"
        },
        {
            id: 4,
            registration: "N22222",
            model: "Airbus A380",
            manufacturer: "Airbus",
            capacity: 525,
            year: 2018,
            status: "Maintenance"
        },
        {
            id: 5,
            registration: "N33333",
            model: "Embraer E190",
            manufacturer: "Embraer",
            capacity: 100,
            year: 2022,
            status: "Active"
        }
    ];

    // Sample Flights with more routes
    flights = [
        {
            id: 1,
            flightNumber: "SL001",
            aircraft: "N12345",
            origin: "New York",
            destination: "Los Angeles",
            departureDate: "2025-08-15",
            departureTime: "08:00",
            arrivalDate: "2025-08-15",
            arrivalTime: "11:30",
            price: 299.99,
            status: "Scheduled"
        },
        {
            id: 2,
            flightNumber: "SL002",
            aircraft: "N67890",
            origin: "Chicago",
            destination: "Miami",
            departureDate: "2025-08-16",
            departureTime: "14:00",
            arrivalDate: "2025-08-16",
            arrivalTime: "17:45",
            price: 249.99,
            status: "Scheduled"
        },
        {
            id: 3,
            flightNumber: "SL003",
            aircraft: "N11111",
            origin: "San Francisco",
            destination: "London",
            departureDate: "2025-08-17",
            departureTime: "22:00",
            arrivalDate: "2025-08-18",
            arrivalTime: "16:30",
            price: 899.99,
            status: "Scheduled"
        },
        {
            id: 4,
            flightNumber: "SL004",
            aircraft: "N33333",
            origin: "Boston",
            destination: "Washington DC",
            departureDate: "2025-08-15",
            departureTime: "12:00",
            arrivalDate: "2025-08-15",
            arrivalTime: "13:30",
            price: 149.99,
            status: "Delayed"
        },
        {
            id: 5,
            flightNumber: "SL005",
            aircraft: "N12345",
            origin: "Dallas",
            destination: "Denver",
            departureDate: "2025-08-18",
            departureTime: "09:15",
            arrivalDate: "2025-08-18",
            arrivalTime: "10:45",
            price: 189.99,
            status: "Scheduled"
        },
        {
            id: 6,
            flightNumber: "SL006",
            aircraft: "N67890",
            origin: "Seattle",
            destination: "Las Vegas",
            departureDate: "2025-08-19",
            departureTime: "16:30",
            arrivalDate: "2025-08-19",
            arrivalTime: "19:00",
            price: 179.99,
            status: "Scheduled"
        }
    ];

    // Sample Passengers with more variety
    passengers = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@email.com",
            phone: "+1-555-0123",
            dob: "1985-05-15",
            passport: "A12345678",
            nationality: "American",
            ffn: "FF123456789"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@email.com",
            phone: "+1-555-0124",
            dob: "1990-08-22",
            passport: "B98765432",
            nationality: "Canadian",
            ffn: "FF987654321"
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Johnson",
            email: "m.johnson@email.com",
            phone: "+1-555-0125",
            dob: "1978-12-03",
            passport: "C11223344",
            nationality: "British",
            ffn: "FF555666777"
        },
        {
            id: 4,
            firstName: "Sarah",
            lastName: "Williams",
            email: "sarah.w@email.com",
            phone: "+1-555-0126",
            dob: "1993-04-18",
            passport: "D55667788",
            nationality: "Australian",
            ffn: ""
        },
        {
            id: 5,
            firstName: "David",
            lastName: "Brown",
            email: "david.brown@email.com",
            phone: "+1-555-0127",
            dob: "1982-09-11",
            passport: "E99887766",
            nationality: "American",
            ffn: "FF111222333"
        }
    ];

    // Sample Bookings with more variety
    bookings = [
        {
            id: 1,
            flightId: 1,
            passengerName: "John Doe",
            email: "john.doe@email.com",
            phone: "+1-555-0123",
            seatClass: "Economy",
            specialRequests: "Window seat preferred, vegetarian meal",
            status: "Confirmed"
        },
        {
            id: 2,
            flightId: 2,
            passengerName: "Jane Smith",
            email: "jane.smith@email.com",
            phone: "+1-555-0124",
            seatClass: "Business",
            specialRequests: "Extra legroom",
            status: "Confirmed"
        },
        {
            id: 3,
            flightId: 3,
            passengerName: "Michael Johnson",
            email: "m.johnson@email.com",
            phone: "+1-555-0125",
            seatClass: "First",
            specialRequests: "Wheelchair assistance required",
            status: "Confirmed"
        },
        {
            id: 4,
            flightId: 4,
            passengerName: "Sarah Williams",
            email: "sarah.w@email.com",
            phone: "+1-555-0126",
            seatClass: "Economy",
            specialRequests: "Aisle seat, no special meal",
            status: "Confirmed"
        },
        {
            id: 5,
            flightId: 1,
            passengerName: "David Brown",
            email: "david.brown@email.com",
            phone: "+1-555-0127",
            seatClass: "Economy",
            specialRequests: "Traveling with pet",
            status: "Confirmed"
        }
    ];

    nextFlightId = 7;
    nextBookingId = 6;
    nextPassengerId = 6;

    updateDashboard();
    updateFlightDropdowns();
    updateAircraftDropdowns();
    renderFlights();
    renderBookings();
    renderPassengers();
    renderAircraft();
}

// Navigation Functions
function showSection(sectionName, event) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(sectionName).classList.add('active');
    if(event) event.target.classList.add('active');

    if (sectionName === 'dashboard') {
        updateDashboard();
        animateDashboardCounters();
    }
}

// Dashboard Functions
function updateDashboard() {
    document.getElementById('totalFlights').textContent = flights.length;
    document.getElementById('totalBookings').textContent = bookings.length;
    document.getElementById('totalPassengers').textContent = passengers.length;
    document.getElementById('totalAircraft').textContent = aircraft.filter(a => a.status === 'Active').length;
    renderRecentFlights();
}

function renderRecentFlights() {
    const recentFlights = flights.slice(0, 5);
    const html = recentFlights.map(flight => `
        <div class="flight-card">
            <div class="flight-header">
                <div class="flight-route">${flight.flightNumber}: ${flight.origin} → ${flight.destination}</div>
                <div class="flight-status status-${flight.status.toLowerCase()}">${flight.status}</div>
            </div>
            <p><strong>Departure:</strong> ${flight.departureDate} at ${flight.departureTime}</p>
            <p><strong>Arrival:</strong> ${flight.arrivalDate} at ${flight.arrivalTime}</p>
            <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
            <p><strong>Price:</strong> $${flight.price}</p>
        </div>
    `).join('');

    document.getElementById('recentFlights').innerHTML = html || '<p>No recent flights available.</p>';
}

// Flight Management Functions
function addFlight() {
    const flightData = {
        id: nextFlightId++,
        flightNumber: document.getElementById('flightNumber').value.trim(),
        aircraft: document.getElementById('flightAircraft').value,
        origin: document.getElementById('flightOrigin').value.trim(),
        destination: document.getElementById('flightDestination').value.trim(),
        departureDate: document.getElementById('flightDepartureDate').value,
        departureTime: document.getElementById('flightDepartureTime').value,
        arrivalDate: document.getElementById('flightArrivalDate').value,
        arrivalTime: document.getElementById('flightArrivalTime').value,
        price: parseFloat(document.getElementById('flightPrice').value),
        status: document.getElementById('flightStatus').value
    };

    if (validateFlightData(flightData)) {
        flights.push(flightData);
        renderFlights();
        updateFlightDropdowns();
        clearFlightForm();
        showAlert('Flight added successfully!', 'success');
    }
}

function validateFlightData(data) {
    if (!data.flightNumber || !data.aircraft || !data.origin || !data.destination) {
        showAlert('Please fill in all required fields.', 'error');
        return false;
    }
    
    if (flights.some(f => f.flightNumber === data.flightNumber && f.id !== data.id)) {
        showAlert('Flight number already exists.', 'error');
        return false;
    }
    
    return true;
}

function renderFlights() {
    const html = flights.map(flight => `
        <div class="flight-card">
            <div class="flight-header">
                <div class="flight-route">${flight.flightNumber}: ${flight.origin} → ${flight.destination}</div>
                <div class="flight-status status-${flight.status.toLowerCase()}">${flight.status}</div>
            </div>
            <p><strong>Departure:</strong> ${flight.departureDate} at ${flight.departureTime}</p>
            <p><strong>Arrival:</strong> ${flight.arrivalDate} at ${flight.arrivalTime}</p>
            <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
            <p><strong>Price:</strong> $${flight.price}</p>
            <div style="margin-top: 15px;">
                <button class="btn btn-secondary" onclick="editFlight(${flight.id})">Edit</button>
                <button class="btn" style="background: #dc3545;" onclick="deleteFlight(${flight.id})">Delete</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('flightsList').innerHTML = html || '<p>No flights available.</p>';
}

function deleteFlight(id) {
    if (confirm('Are you sure you want to delete this flight?')) {
        flights = flights.filter(f => f.id !== id);
        renderFlights();
        updateFlightDropdowns();
        showAlert('Flight deleted successfully!', 'success');
    }
}

function clearFlightForm() {
    document.querySelectorAll('#flights input, #flights select').forEach(input => {
        input.value = '';
    });
}

// Booking Management Functions
function addBooking() {
    const bookingData = {
        id: nextBookingId++,
        flightId: parseInt(document.getElementById('bookingFlight').value),
        passengerName: document.getElementById('bookingPassengerName').value.trim(),
        email: document.getElementById('bookingEmail').value.trim(),
        phone: document.getElementById('bookingPhone').value.trim(),
        seatClass: document.getElementById('bookingSeat').value,
        specialRequests: document.getElementById('bookingRequests').value.trim(),
        status: 'Confirmed'
    };

    if (validateBookingData(bookingData)) {
        bookings.push(bookingData);
        renderBookings();
        clearBookingForm();
        showAlert('Booking created successfully!', 'success');
    }
}

function validateBookingData(data) {
    if (!data.flightId || !data.passengerName || !data.email || !data.phone) {
        showAlert('Please fill in all required fields.', 'error');
        return false;
    }
    
    if (!isValidEmail(data.email)) {
        showAlert('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

function renderBookings() {
    const tbody = document.getElementById('bookingsTableBody');
    const html = bookings.map(booking => {
        const flight = flights.find(f => f.id === booking.flightId);
        const flightInfo = flight ? `${flight.flightNumber} (${flight.origin} → ${flight.destination})` : 'Unknown Flight';
        
        return `
            <tr>
                <td>BK${booking.id.toString().padStart(4, '0')}</td>
                <td>${flightInfo}</td>
                <td>${booking.passengerName}</td>
                <td>${booking.email}</td>
                <td>${booking.seatClass}</td>
                <td><span class="flight-status status-${booking.status.toLowerCase()}">${booking.status}</span></td>
                <td>
                    <button class="btn btn-secondary" onclick="editBooking(${booking.id})" style="font-size: 12px; padding: 5px 10px;">Edit</button>
                    <button class="btn" style="background: #dc3545; font-size: 12px; padding: 5px 10px;" onclick="deleteBooking(${booking.id})">Cancel</button>
                </td>
            </tr>
        `;
    }).join('');
    
    tbody.innerHTML = html || '<tr><td colspan="7">No bookings available.</td></tr>';
}

function deleteBooking(id) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== id);
        renderBookings();
        showAlert('Booking cancelled successfully!', 'success');
    }
}

function clearBookingForm() {
    document.querySelectorAll('#bookings input, #bookings select, #bookings textarea').forEach(input => {
        if (input.type !== 'select-one') {
            input.value = '';
        } else {
            input.selectedIndex = 0;
        }
    });
}

// Passenger Management Functions
function addPassenger() {
    const passengerData = {
        id: nextPassengerId++,
        firstName: document.getElementById('passengerFirstName').value.trim(),
        lastName: document.getElementById('passengerLastName').value.trim(),
        email: document.getElementById('passengerEmail').value.trim(),
        phone: document.getElementById('passengerPhone').value.trim(),
        dob: document.getElementById('passengerDOB').value,
        passport: document.getElementById('passengerPassport').value.trim(),
        nationality: document.getElementById('passengerNationality').value.trim(),
        ffn: document.getElementById('passengerFFN').value.trim()
    };

    if (validatePassengerData(passengerData)) {
        passengers.push(passengerData);
        renderPassengers();
        clearPassengerForm();
        showAlert('Passenger registered successfully!', 'success');
    }
}

function validatePassengerData(data) {
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
        showAlert('Please fill in all required fields.', 'error');
        return false;
    }
    
    if (!isValidEmail(data.email)) {
        showAlert('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (passengers.some(p => p.email === data.email && p.id !== data.id)) {
        showAlert('A passenger with this email already exists.', 'error');
        return false;
    }
    
    return true;
}

function renderPassengers() {
    const tbody = document.getElementById('passengersTableBody');
    const html = passengers.map(passenger => `
        <tr>
            <td>PAX${passenger.id.toString().padStart(4, '0')}</td>
            <td>${passenger.firstName} ${passenger.lastName}</td>
            <td>${passenger.email}</td>
            <td>${passenger.phone}</td>
            <td>${passenger.nationality}</td>
            <td>${passenger.ffn || 'N/A'}</td>
            <td>
                <button class="btn btn-secondary" onclick="editPassenger(${passenger.id})" style="font-size: 12px; padding: 5px 10px;">Edit</button>
                <button class="btn" style="background: #dc3545; font-size: 12px; padding: 5px 10px;" onclick="deletePassenger(${passenger.id})">Delete</button>
            </td>
        </tr>
    `).join('');
    
    tbody.innerHTML = html || '<tr><td colspan="7">No passengers registered.</td></tr>';
}

function deletePassenger(id) {
    if (confirm('Are you sure you want to delete this passenger?')) {
        passengers = passengers.filter(p => p.id !== id);
        renderPassengers();
        showAlert('Passenger deleted successfully!', 'success');
    }
}

function clearPassengerForm() {
    document.querySelectorAll('#passengers input').forEach(input => {
        input.value = '';
    });
}

// Aircraft Management Functions
function addAircraft() {
    const aircraftData = {
        id: aircraft.length + 1,
        registration: document.getElementById('aircraftReg').value.trim(),
        model: document.getElementById('aircraftModel').value.trim(),
        manufacturer: document.getElementById('aircraftManufacturer').value.trim(),
        capacity: parseInt(document.getElementById('aircraftCapacity').value),
        year: parseInt(document.getElementById('aircraftYear').value),
        status: document.getElementById('aircraftStatus').value
    };

    if (validateAircraftData(aircraftData)) {
        aircraft.push(aircraftData);
        renderAircraft();
        updateAircraftDropdowns();
        clearAircraftForm();
        showAlert('Aircraft added successfully!', 'success');
    }
}

function validateAircraftData(data) {
    if (!data.registration || !data.model || !data.manufacturer || !data.capacity || !data.year) {
        showAlert('Please fill in all required fields.', 'error');
        return false;
    }
    
    if (aircraft.some(a => a.registration === data.registration && a.id !== data.id)) {
        showAlert('Aircraft with this registration already exists.', 'error');
        return false;
    }
    
    return true;
}

function renderAircraft() {
    const tbody = document.getElementById('aircraftTableBody');
    const html = aircraft.map(plane => `
        <tr>
            <td>${plane.registration}</td>
            <td>${plane.model}</td>
            <td>${plane.manufacturer}</td>
            <td>${plane.capacity}</td>
            <td>${plane.year}</td>
            <td><span class="flight-status status-${plane.status.toLowerCase()}">${plane.status}</span></td>
            <td>
                <button class="btn btn-secondary" onclick="editAircraft(${plane.id})" style="font-size: 12px; padding: 5px 10px;">Edit</button>
                <button class="btn" style="background: #dc3545; font-size: 12px; padding: 5px 10px;" onclick="deleteAircraft(${plane.id})">Delete</button>
            </td>
        </tr>
    `).join('');
    
    tbody.innerHTML = html || '<tr><td colspan="7">No aircraft in fleet.</td></tr>';
}

function deleteAircraft(id) {
    if (confirm('Are you sure you want to delete this aircraft?')) {
        aircraft = aircraft.filter(a => a.id !== id);
        renderAircraft();
        updateAircraftDropdowns();
        showAlert('Aircraft deleted successfully!', 'success');
    }
}

function clearAircraftForm() {
    document.querySelectorAll('#aircraft input, #aircraft select').forEach(input => {
        input.value = '';
    });
}

// Search Functions
function searchFlights() {
    const origin = document.getElementById('searchOrigin').value.toLowerCase();
    const destination = document.getElementById('searchDestination').value.toLowerCase();
    const date = document.getElementById('searchDate').value;

    let results = flights.filter(flight => {
        const matchOrigin = !origin || flight.origin.toLowerCase().includes(origin);
        const matchDestination = !destination || flight.destination.toLowerCase().includes(destination);
        const matchDate = !date || flight.departureDate === date;
        
        return matchOrigin && matchDestination && matchDate;
    });

    renderSearchResults(results);
}

function renderSearchResults(results) {
    const container = document.getElementById('searchResults');
    const resultsList = document.getElementById('searchResultsList');
    
    if (results.length === 0) {
        resultsList.innerHTML = '<p>No flights found matching your criteria.</p>';
    } else {
        const html = results.map(flight => `
            <div class="flight-card">
                <div class="flight-header">
                    <div class="flight-route">${flight.flightNumber}: ${flight.origin} → ${flight.destination}</div>
                    <div class="flight-status status-${flight.status.toLowerCase()}">${flight.status}</div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 15px 0;">
                    <div>
                        <strong>Departure:</strong><br>
                        ${flight.departureDate} at ${flight.departureTime}
                    </div>
                    <div>
                        <strong>Arrival:</strong><br>
                        ${flight.arrivalDate} at ${flight.arrivalTime}
                    </div>
                    <div>
                        <strong>Aircraft:</strong><br>
                        ${flight.aircraft}
                    </div>
                    <div>
                        <strong>Price:</strong><br>
                        <span style="font-size: 1.2em; color: #667eea; font-weight: bold;">${flight.price}</span>
                    </div>
                </div>
                <button class="btn" onclick="bookFlight(${flight.id})">Book This Flight</button>
            </div>
        `).join('');
        
        resultsList.innerHTML = html;
    }
    
    container.style.display = 'block';
}

function bookFlight(flightId) {
    // Switch to bookings tab and pre-fill flight
    showSection('bookings');
    document.querySelector('.nav-tab[onclick*="bookings"]').classList.add('active');
    document.getElementById('bookingFlight').value = flightId;
    showAlert('Flight selected. Please complete the booking form.', 'success');
}

// Utility Functions
function updateFlightDropdowns() {
    const select = document.getElementById('bookingFlight');
    const html = '<option value="">Select Flight</option>' + 
        flights.map(flight => 
            `<option value="${flight.id}">${flight.flightNumber} - ${flight.origin} to ${flight.destination} (${flight.departureDate})</option>`
        ).join('');
    select.innerHTML = html;
}

function updateAircraftDropdowns() {
    const select = document.getElementById('flightAircraft');
    const activeAircraft = aircraft.filter(a => a.status === 'Active');
    const html = '<option value="">Select Aircraft</option>' + 
        activeAircraft.map(plane => 
            `<option value="${plane.registration}">${plane.registration} - ${plane.model}</option>`
        ).join('');
    select.innerHTML = html;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    alertContainer.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Placeholder edit functions (for demo)
function editFlight(id) {
    showAlert('Edit functionality would be implemented in a full application.', 'success');
}

function editBooking(id) {
    showAlert('Edit functionality would be implemented in a full application.', 'success');
}

function editPassenger(id) {
    showAlert('Edit functionality would be implemented in a full application.', 'success');
}

function editAircraft(id) {
    showAlert('Edit functionality would be implemented in a full application.', 'success');
}

// Dashboard counter animation
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    let current = 0;
    const increment = Math.max(1, Math.floor(targetValue / 20));
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
            current = targetValue;
            clearInterval(timer);
        }
        element.textContent = current;
    }, 50);
}

function animateDashboardCounters() {
    animateCounter('totalFlights', flights.length);
    animateCounter('totalBookings', bookings.length);
    animateCounter('totalPassengers', passengers.length);
    animateCounter('totalAircraft', aircraft.filter(a => a.status === 'Active').length);
}

// Demo and enhancements
function addDemoButton() {
    const header = document.querySelector('.header');
    const demoButton = document.createElement('button');
    demoButton.className = 'btn btn-success';
    demoButton.innerHTML = '🚀 Try Interactive Demo';
    demoButton.style.marginTop = '15px';
    demoButton.onclick = runInteractiveDemo;
    header.appendChild(demoButton);
}

function runInteractiveDemo() {
    let step = 0;
    const demoSteps = [
        () => {
            showAlert('🎯 Demo Step 1: Let\'s add a new flight!', 'success');
            showSection('flights');
        },
        () => {
            showAlert('✍️ Demo Step 2: Watch me fill out the flight form automatically!', 'success');
            autoFillFlightForm();
        },
        () => {
            showAlert('➕ Demo Step 3: Adding the flight to our system!', 'success');
            addFlight();
        },
        () => {
            showAlert('🔍 Demo Step 4: Now let\'s search for flights!', 'success');
            showSection('search');
        },
        () => {
            showAlert('🎯 Demo Step 5: Auto-searching flights from New York!', 'success');
            autoSearch();
        },
        () => {
            showAlert('📊 Demo Step 6: Check the updated dashboard!', 'success');
            showSection('dashboard');
            updateDashboard();
        },
        () => {
            showAlert('🎉 Demo Complete! Now you can interact with all features yourself. Try adding bookings, passengers, and aircraft!', 'success');
        }
    ];
    
    if (step < demoSteps.length) {
        demoSteps[step]();
        step++;
        if (step < demoSteps.length) {
            setTimeout(runInteractiveDemo, 3000);
        }
    }
}

function autoFillFlightForm() {
    document.getElementById('flightNumber').value = 'SL999';
    document.getElementById('flightOrigin').value = 'Atlanta';
    document.getElementById('flightDestination').value = 'Phoenix';
    document.getElementById('flightDepartureDate').value = '2025-08-20';
    document.getElementById('flightDepartureTime').value = '10:30';
    document.getElementById('flightArrivalDate').value = '2025-08-20';
    document.getElementById('flightArrivalTime').value = '12:15';
    document.getElementById('flightPrice').value = '225.50';
    document.getElementById('flightAircraft').value = 'N12345';
    document.getElementById('flightStatus').value = 'Scheduled';
    
    // Add visual feedback
    document.querySelectorAll('#flights input, #flights select').forEach(input => {
        input.style.backgroundColor = '#e8f5e8';
        setTimeout(() => {
            input.style.backgroundColor = '';
        }, 1500);
    });
}

function autoSearch() {
    document.getElementById('searchOrigin').value = 'New York';
    document.getElementById('searchDestination').value = '';
    document.getElementById('searchDate').value = '2025-08-15';
    
    // Visual feedback
    document.getElementById('searchOrigin').style.backgroundColor = '#e8f5e8';
    setTimeout(() => {
        document.getElementById('searchOrigin').style.backgroundColor = '';
        searchFlights();
    }, 1000);
}

// Real-time validation
function addRealTimeValidation() {
    // Flight form validation
    document.getElementById('flightNumber')?.addEventListener('input', function(e) {
        const value = e.target.value.toUpperCase();
        e.target.value = value;
        if (flights.some(f => f.flightNumber === value)) {
            e.target.style.borderColor = '#dc3545';
            showAlert('Flight number already exists!', 'error');
        } else {
            e.target.style.borderColor = '#28a745';
        }
    });
    
    // Email validation in real-time
    document.getElementById('bookingEmail')?.addEventListener('input', function(e) {
        if (isValidEmail(e.target.value)) {
            e.target.style.borderColor = '#28a745';
        } else {
            e.target.style.borderColor = '#dc3545';
        }
    });
    
    document.getElementById('passengerEmail')?.addEventListener('input', function(e) {
        if (isValidEmail(e.target.value)) {
            e.target.style.borderColor = '#28a745';
        } else {
            e.target.style.borderColor = '#dc3545';
        }
    });
}

// Interactive effects
function addInteractiveEffects() {
    // Button click animation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
}

// Live search functionality
function addLiveSearch() {
    let searchTimeout;
    
    ['searchOrigin', 'searchDestination'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (this.value.length > 2) {
                    searchFlights();
                }
            }, 500);
        });
    });
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();

    // Set default dates for better UX
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    // Set default departure date to tomorrow
    const departureDateField = document.getElementById('flightDepartureDate');
    if (departureDateField) {
        departureDateField.value = tomorrowStr;
    }

    const arrivalDateField = document.getElementById('flightArrivalDate');
    if (arrivalDateField) {
        arrivalDateField.value = tomorrowStr;
    }

    const searchDateField = document.getElementById('searchDate');
    if (searchDateField) {
        searchDateField.value = today;
    }

    // Add welcome message
    setTimeout(() => {
        showAlert('🎉 Welcome to SkyLine Airlines! Try these interactive features: Click tabs, add flights, create bookings, search flights!', 'success');
    }, 1000);

    addDemoButton();
    addRealTimeValidation();
    addInteractiveEffects();
    addLiveSearch();
});
