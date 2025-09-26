// Add these variables at the top
let currentFilters = {
    bloodGroup: '',
    district: '',
    upazila: '',
    availability: 'all',
    search: ''
};

// Add these event listeners in DOMContentLoaded
document.getElementById('applyFilters').addEventListener('click', applyFilters);
document.getElementById('clearFilters').addEventListener('click', clearFilters);
document.getElementById('filterSearch').addEventListener('input', debounce(applyFilters, 300));

// Initialize admin filters
initializeAdminFilters();

function initializeAdminFilters() {
    const districts = getDistricts();
    const districtSelect = document.getElementById('filterDistrict');
    
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district.name;
        option.textContent = `${district.name} - ${district.bn_name}`;
        districtSelect.appendChild(option);
    });
    
    document.getElementById('filterDistrict').addEventListener('change', function() {
        updateAdminUpazilas(this.value);
    });
}

function updateAdminUpazilas(districtName) {
    const upazilaSelect = document.getElementById('filterUpazila');
    upazilaSelect.innerHTML = '<option value="">All Upazilas</option>';
    
    if (!districtName) return;
    
    const district = bangladeshData.districts.find(d => d.name === districtName);
    if (district) {
        const upazilas = getUpazilasByDistrict(district.id);
        upazilas.forEach(upazila => {
            const option = document.createElement('option');
            option.value = upazila.name;
            option.textContent = `${upazila.name} - ${upazila.bn_name}`;
            upazilaSelect.appendChild(option);
        });
    }
}

function applyFilters() {
    currentFilters = {
        bloodGroup: document.getElementById('filterBloodGroup').value,
        district: document.getElementById('filterDistrict').value,
        upazila: document.getElementById('filterUpazila').value,
        availability: document.getElementById('filterAvailability').value,
        search: document.getElementById('filterSearch').value.toLowerCase()
    };
    
    loadAdminData();
}

function clearFilters() {
    document.getElementById('filterBloodGroup').value = '';
    document.getElementById('filterDistrict').value = '';
    document.getElementById('filterUpazila').value = '';
    document.getElementById('filterAvailability').value = 'all';
    document.getElementById('filterSearch').value = '';
    
    currentFilters = {
        bloodGroup: '',
        district: '',
        upazila: '',
        availability: 'all',
        search: ''
    };
    
    loadAdminData();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Update loadAdminData function to include filtering
function loadAdminData() {
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    
    // Apply filters
    donors = donors.filter(donor => {
        const bloodMatch = !currentFilters.bloodGroup || donor.bloodGroup === currentFilters.bloodGroup;
        const districtMatch = !currentFilters.district || donor.district === currentFilters.district;
        const upazilaMatch = !currentFilters.upazila || donor.upazila === currentFilters.upazila;
        
        let availabilityMatch = true;
        if (currentFilters.availability === 'available') {
            availabilityMatch = donor.available === true;
        } else if (currentFilters.availability === 'unavailable') {
            availabilityMatch = donor.available === false;
        }
        
        const searchMatch = !currentFilters.search || 
            donor.name.toLowerCase().includes(currentFilters.search) ||
            donor.phone.includes(currentFilters.search) ||
            (donor.email && donor.email.toLowerCase().includes(currentFilters.search));
        
        return bloodMatch && districtMatch && upazilaMatch && availabilityMatch && searchMatch;
    });
    
    // Rest of the loadAdminData function remains the same...
    document.getElementById('totalDonorsAdmin').textContent = donors.length;
    document.getElementById('availableDonorsAdmin').textContent = donors.filter(d => d.available).length;
    
    const bloodGroups = new Set(donors.map(d => d.bloodGroup));
    document.getElementById('bloodGroupsCount').textContent = bloodGroups.size;

    // Populate table
    donorsTableBody.innerHTML = donors.map(donor => `
        <tr>
            <td>${donor.name}</td>
            <td>${donor.age}</td>
            <td><strong>${donor.bloodGroup}</strong></td>
            <td>${donor.district}<br><small>${donor.upazila}</small></td>
            <td>${donor.phone}</td>
            <td>${donor.email || 'N/A'}</td>
            <td>
                <span class="availability-badge ${donor.available ? 'available' : 'unavailable'}">
                    ${donor.available ? 'Available' : 'Not Available'}
                </span>
            </td>
            <td>${donor.lastDonation || 'N/A'}</td>
            <td>
                <button class="action-btn edit-btn" onclick="toggleAvailability(${donor.id})">
                    ${donor.available ? 'Mark Unavailable' : 'Mark Available'}
                </button>
                <button class="action-btn delete-btn" onclick="deleteDonor(${donor.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}



// Admin Authentication Check
function checkAdminAuth() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    const loginTime = sessionStorage.getItem('loginTime');
    const currentTime = new Date().getTime();
    const sessionDuration = 2 * 60 * 60 * 1000; // 2 hours session

    if (!isLoggedIn || (currentTime - loginTime > sessionDuration)) {
        sessionStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('loginTime');
        window.location.href = 'admin-login.html';
        return false;
    }
    return true;
}

// Session Timer
function updateSessionTimer() {
    const loginTime = parseInt(sessionStorage.getItem('loginTime'));
    const currentTime = new Date().getTime();
    const duration = Math.floor((currentTime - loginTime) / 60000); // minutes
    
    const sessionDurationElement = document.getElementById('sessionDuration');
    if (sessionDurationElement) {
        sessionDurationElement.textContent = `${duration}m`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication first
    if (!checkAdminAuth()) {
        return;
    }

    // Update login time display
    const loginTime = new Date(parseInt(sessionStorage.getItem('loginTime')));
    document.getElementById('loginTime').textContent = `Logged in: ${loginTime.toLocaleString()}`;

    // Update session timer every minute
    updateSessionTimer();
    setInterval(updateSessionTimer, 60000);

    const refreshBtn = document.getElementById('refreshBtn');
    const exportBtn = document.getElementById('exportBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const changePasswordForm = document.getElementById('changePasswordForm');
    const donorsTableBody = document.getElementById('donorsTableBody');

    // Load data when page loads
    loadAdminData();

    refreshBtn.addEventListener('click', loadAdminData);

    exportBtn.addEventListener('click', function() {
        const donors = JSON.parse(localStorage.getItem('donors')) || [];
        if (donors.length === 0) {
            alert('No data to export');
            return;
        }

        const csv = convertToCSV(donors);
        downloadCSV(csv, 'blood-donors.csv');
    });

    clearAllBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all donor data? This action cannot be undone.')) {
            localStorage.removeItem('donors');
            loadAdminData();
            alert('All donor data has been cleared.');
        }
    });

    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sessionStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('loginTime');
        window.location.href = 'admin-login.html';
    });

    changePasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        changePassword();
    });

    function loadAdminData() {
        const donors = JSON.parse(localStorage.getItem('donors')) || [];
        
        // Update statistics
        document.getElementById('totalDonorsAdmin').textContent = donors.length;
        document.getElementById('availableDonorsAdmin').textContent = donors.filter(d => d.available).length;
        
        const bloodGroups = new Set(donors.map(d => d.bloodGroup));
        document.getElementById('bloodGroupsCount').textContent = bloodGroups.size;

        // Populate table
        donorsTableBody.innerHTML = donors.map(donor => `
            <tr>
                <td>${donor.name}</td>
                <td>${donor.age}</td>
                <td><strong>${donor.bloodGroup}</strong></td>
                <td>${donor.location}</td>
                <td>${donor.phone}</td>
                <td>${donor.email || 'N/A'}</td>
                <td>
                    <span class="availability-badge ${donor.available ? 'available' : 'unavailable'}">
                        ${donor.available ? 'Available' : 'Not Available'}
                    </span>
                </td>
                <td>${donor.lastDonation || 'N/A'}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="toggleAvailability(${donor.id})">
                        ${donor.available ? 'Mark Unavailable' : 'Mark Available'}
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteDonor(${donor.id})">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    function changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const messageElement = document.getElementById('passwordMessage');

        // Reset message
        messageElement.className = 'message';
        messageElement.textContent = '';

        // Validate
        if (newPassword !== confirmPassword) {
            messageElement.className = 'message error';
            messageElement.textContent = 'New passwords do not match!';
            return;
        }

        if (newPassword.length < 6) {
            messageElement.className = 'message error';
            messageElement.textContent = 'Password must be at least 6 characters long!';
            return;
        }

        const storedCredentials = JSON.parse(localStorage.getItem('adminCredentials'));
        
        if (storedCredentials.password !== currentPassword) {
            messageElement.className = 'message error';
            messageElement.textContent = 'Current password is incorrect!';
            return;
        }

        // Update password
        storedCredentials.password = newPassword;
        localStorage.setItem('adminCredentials', JSON.stringify(storedCredentials));

        messageElement.className = 'message success';
        messageElement.textContent = 'Password changed successfully!';

        // Clear form
        changePasswordForm.reset();

        setTimeout(() => {
            messageElement.textContent = '';
        }, 3000);
    }

    function convertToCSV(donors) {
        const headers = ['Name', 'Age', 'Blood Group', 'Phone', 'Email', 'Location', 'Availability', 'Last Donation'];
        const rows = donors.map(donor => [
            donor.name,
            donor.age,
            donor.bloodGroup,
            donor.phone,
            donor.email || 'N/A',
            donor.location,
            donor.available ? 'Available' : 'Not Available',
            donor.lastDonation || 'N/A'
        ]);

        return [headers, ...rows].map(row => 
            row.map(field => `"${field}"`).join(',')
        ).join('\n');
    }

    function downloadCSV(csv, filename) {
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Make functions global for onclick handlers
    window.toggleAvailability = function(donorId) {
        let donors = JSON.parse(localStorage.getItem('donors')) || [];
        donors = donors.map(donor => {
            if (donor.id === donorId) {
                return { ...donor, available: !donor.available };
            }
            return donor;
        });
        localStorage.setItem('donors', JSON.stringify(donors));
        loadAdminData();
    };

    window.deleteDonor = function(donorId) {
        if (confirm('Are you sure you want to delete this donor?')) {
            let donors = JSON.parse(localStorage.getItem('donors')) || [];
            donors = donors.filter(donor => donor.id !== donorId);
            localStorage.setItem('donors', JSON.stringify(donors));
            loadAdminData();
        }
    };
});


// Add these event listeners in DOMContentLoaded section
document.getElementById('downloadTemplate').addEventListener('click', downloadCSVTemplate);
document.getElementById('importCSV').addEventListener('click', importCSVData);
document.getElementById('syncGoogleSheets').addEventListener('click', syncGoogleSheets);

// CSV Template Download
function downloadCSVTemplate() {
    const template = [
        ['name', 'age', 'bloodGroup', 'phone', 'email', 'district', 'upazila', 'address', 'lastDonation', 'available'],
        ['John Doe', '28', 'A+', '+8801712345678', 'john@email.com', 'Dhaka', 'Dhaka North', 'House 12, Road 5', '2024-01-15', 'true'],
        ['Jane Smith', '32', 'O-', '+8801812345678', 'jane@email.com', 'Chattogram', 'Chattogram Sadar', 'House 25, Road 7', '2024-02-20', 'true']
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blood_donors_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// CSV Import Functionality
function importCSVData() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a CSV file first');
        return;
    }

    const progressContainer = document.getElementById('csvProgress');
    const progressFill = document.getElementById('csvProgressFill');
    const progressText = document.getElementById('csvProgressText');
    
    progressContainer.style.display = 'flex';
    progressFill.style.width = '0%';
    progressText.textContent = '0%';

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const csvData = e.target.result;
            const results = parseCSVData(csvData);
            displayImportResults(results);
            loadAdminData(); // Refresh the table
            
            // Reset progress
            setTimeout(() => {
                progressContainer.style.display = 'none';
                fileInput.value = '';
            }, 2000);
            
        } catch (error) {
            alert('Error importing CSV: ' + error.message);
            progressContainer.style.display = 'none';
        }
    };
    
    reader.onprogress = function(e) {
        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            progressFill.style.width = percentComplete + '%';
            progressText.textContent = Math.round(percentComplete) + '%';
        }
    };
    
    reader.readAsText(file);
}

// Google Sheets Sync Functionality
function syncGoogleSheets() {
    const sheetsUrl = document.getElementById('googleSheetsUrl').value;
    
    if (!sheetsUrl) {
        alert('Please enter a Google Sheets URL');
        return;
    }

    const progressContainer = document.getElementById('sheetsProgress');
    const progressFill = document.getElementById('sheetsProgressFill');
    const progressText = document.getElementById('sheetsProgressText');
    
    progressContainer.style.display = 'flex';
    progressFill.style.width = '0%';
    progressText.textContent = '0%';

    // Extract sheet ID from URL
    const sheetId = extractSheetId(sheetsUrl);
    if (!sheetId) {
        alert('Invalid Google Sheets URL');
        progressContainer.style.display = 'none';
        return;
    }

    // Update progress
    progressFill.style.width = '30%';
    progressText.textContent = '30%';

    // Fetch data from Google Sheets
    fetchGoogleSheetsData(sheetId)
        .then(csvData => {
            progressFill.style.width = '70%';
            progressText.textContent = '70%';
            
            const results = parseCSVData(csvData);
            displayImportResults(results);
            loadAdminData(); // Refresh the table
            
            progressFill.style.width = '100%';
            progressText.textContent = '100%';
            
            setTimeout(() => {
                progressContainer.style.display = 'none';
            }, 2000);
        })
        .catch(error => {
            alert('Error syncing with Google Sheets: ' + error.message);
            progressContainer.style.display = 'none';
        });
}

// Extract Google Sheets ID from URL
function extractSheetId(url) {
    const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : null;
}

// Fetch data from Google Sheets
async function fetchGoogleSheetsData(sheetId) {
    // Convert to CSV export URL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
    
    const response = await fetch(csvUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheets');
    }
    
    return await response.text();
}

// Parse CSV Data
function parseCSVData(csvData) {
    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(header => header.trim().toLowerCase());
    
    const results = {
        total: lines.length - 1,
        successful: 0,
        skipped: 0,
        errors: 0,
        errorDetails: []
    };
    
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    
    for (let i = 1; i < lines.length; i++) {
        try {
            const values = parseCSVLine(lines[i]);
            if (values.length !== headers.length) {
                results.errors++;
                results.errorDetails.push(`Line ${i + 1}: Column count mismatch`);
                continue;
            }
            
            const rowData = {};
            headers.forEach((header, index) => {
                rowData[header] = values[index] ? values[index].trim() : '';
            });
            
            // Validate required fields
            if (!rowData.name || !rowData.bloodgroup || !rowData.phone) {
                results.skipped++;
                results.errorDetails.push(`Line ${i + 1}: Missing required fields`);
                continue;
            }
            
            // Check if donor already exists (by phone)
            const existingDonor = donors.find(donor => donor.phone === rowData.phone);
            if (existingDonor) {
                results.skipped++;
                results.errorDetails.push(`Line ${i + 1}: Donor with phone ${rowData.phone} already exists`);
                continue;
            }
            
            // Create new donor object
            const newDonor = {
                id: Date.now() + i, // Unique ID
                name: rowData.name,
                age: parseInt(rowData.age) || 0,
                bloodGroup: rowData.bloodgroup,
                phone: rowData.phone,
                email: rowData.email || '',
                district: rowData.district || '',
                upazila: rowData.upazila || '',
                address: rowData.address || '',
                lastDonation: rowData.lastdonation || '',
                available: rowData.available === 'true' || rowData.available === '1',
                registrationDate: new Date().toISOString().split('T')[0]
            };
            
            donors.push(newDonor);
            results.successful++;
            
        } catch (error) {
            results.errors++;
            results.errorDetails.push(`Line ${i + 1}: ${error.message}`);
        }
    }
    
    // Save to localStorage
    localStorage.setItem('donors', JSON.stringify(donors));
    
    return results;
}

// Improved CSV line parsing (handles commas within quotes)
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    values.push(current); // Add last value
    return values.map(val => val.replace(/^"|"$/g, '').trim()); // Remove surrounding quotes
}

// Display Import Results
function displayImportResults(results) {
    const importResults = document.getElementById('importResults');
    const importStats = document.getElementById('importStats');
    
    importStats.innerHTML = `
        <div class="import-stats">
            <div class="stat-item success">
                <span class="stat-number">${results.successful}</span>
                <span class="stat-label">Successful</span>
            </div>
            <div class="stat-item warning">
                <span class="stat-number">${results.skipped}</span>
                <span class="stat-label">Skipped</span>
            </div>
            <div class="stat-item error">
                <span class="stat-number">${results.errors}</span>
                <span class="stat-label">Errors</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${results.total}</span>
                <span class="stat-label">Total Rows</span>
            </div>
        </div>
    `;
    
    if (results.errorDetails.length > 0) {
        importStats.innerHTML += `
            <h5>Error Details:</h5>
            <div class="error-list">
                ${results.errorDetails.map(error => `<div class="error-item">${error}</div>`).join('')}
            </div>
        `;
    }
    
    importResults.style.display = 'block';
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        importResults.style.display = 'none';
    }, 10000);
}

// Add file name display functionality
document.getElementById('csvFile').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
    let fileLabel = document.querySelector('.file-label');
    
    // Remove existing file name span if it exists
    const existingFileName = document.querySelector('.file-name');
    if (existingFileName) {
        existingFileName.remove();
    }
    
    // Add new file name span
    const fileNameSpan = document.createElement('span');
    fileNameSpan.className = 'file-name';
    fileNameSpan.textContent = fileName;
    fileLabel.parentNode.appendChild(fileNameSpan);
});