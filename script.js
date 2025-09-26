// Initialize donors data in localStorage if not exists
function initializeDonors() {
    if (!localStorage.getItem('donors')) {
        const sampleDonors = [
            {
                id: 1,
                name: "John Doe",
                age: 28,
                bloodGroup: "A+",
                phone: "+8801712345678",
                email: "john.doe@email.com",
                district: "Dhaka",
                district_bn: "ঢাকা",
                upazila: "Dhaka North",
                upazila_bn: "ঢাকা উত্তর",
                address: "House 12, Road 5, Gulshan",
                available: true,
                lastDonation: "2024-01-15",
                registrationDate: "2024-01-01"
            },
            {
                id: 2,
                name: "Jane Smith",
                age: 32,
                bloodGroup: "O-",
                phone: "+8801812345678",
                email: "jane.smith@email.com",
                district: "Chattogram",
                district_bn: "চট্টগ্রাম",
                upazila: "Chattogram Sadar",
                upazila_bn: "চট্টগ্রাম সদর",
                address: "House 25, Road 7, Agrabad",
                available: true,
                lastDonation: "2024-02-20",
                registrationDate: "2024-01-15"
            }
        ];
        localStorage.setItem('donors', JSON.stringify(sampleDonors));
    }
}

// Update statistics on home page
function updateStatistics() {
    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    const totalDonors = donors.length;
    const availableDonors = donors.filter(donor => donor.available).length;
    
    document.getElementById('totalDonors').textContent = totalDonors;
    document.getElementById('availableDonors').textContent = availableDonors;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDonors();
    updateStatistics();
});