document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultsSection = document.getElementById('resultsSection');
    const noResults = document.getElementById('noResults');
    const donorsList = document.getElementById('donorsList');
    const resultsCount = document.getElementById('resultsCount');
    const searchDistrict = document.getElementById('searchDistrict');
    const searchUpazila = document.getElementById('searchUpazila');

    // Initialize districts dropdown
    initializeSearchDistricts();
    
    // Add event listener for district change
    searchDistrict.addEventListener('change', function() {
        updateSearchUpazilas(this.value);
    });

    searchBtn.addEventListener('click', function() {
        const bloodGroup = document.getElementById('searchBloodGroup').value;
        const districtId = searchDistrict.value;
        const upazilaId = searchUpazila.value;
        const availability = document.getElementById('searchAvailability').value;
        
        if (!bloodGroup) {
            alert('Please select a blood group');
            return;
        }

        const results = searchDonors(bloodGroup, districtId, upazilaId, availability);
        displayResults(results);
    });

    resetBtn.addEventListener('click', function() {
        document.getElementById('searchBloodGroup').value = '';
        searchDistrict.value = '';
        searchUpazila.value = '';
        document.getElementById('searchAvailability').value = 'available';
        updateSearchUpazilas('');
        resultsSection.style.display = 'none';
        noResults.style.display = 'none';
    });

    function initializeSearchDistricts() {
        const districts = getDistricts();
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.id;
            option.textContent = `${district.name} - ${district.bn_name}`;
            searchDistrict.appendChild(option);
        });
    }

    function updateSearchUpazilas(districtId) {
        searchUpazila.innerHTML = '<option value="">Any Upazila</option>';
        
        if (!districtId) return;
        
        const upazilas = getUpazilasByDistrict(parseInt(districtId));
        upazilas.forEach(upazila => {
            const option = document.createElement('option');
            option.value = upazila.id;
            option.textContent = `${upazila.name} - ${upazila.bn_name}`;
            searchUpazila.appendChild(option);
        });
    }

    function searchDonors(bloodGroup, districtId, upazilaId, availability) {
        const donors = JSON.parse(localStorage.getItem('donors')) || [];
        
        return donors.filter(donor => {
            const bloodMatch = donor.bloodGroup === bloodGroup;
            const districtMatch = !districtId || donor.district === getDistrictById(parseInt(districtId)).name;
            const upazilaMatch = !upazilaId || donor.upazila === getUpazilaById(parseInt(upazilaId)).name;
            
            let availabilityMatch = true;
            if (availability === 'available') {
                availabilityMatch = donor.available === true;
            } else if (availability === 'unavailable') {
                availabilityMatch = donor.available === false;
            }
            
            return bloodMatch && districtMatch && upazilaMatch && availabilityMatch;
        });
    }

    function displayResults(results) {
        if (results.length === 0) {
            resultsSection.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        resultsSection.style.display = 'block';
        noResults.style.display = 'none';
        
        resultsCount.textContent = `Found ${results.length} donor(s) matching your criteria`;
        
        donorsList.innerHTML = results.map(donor => `
            <div class="donor-card">
                <div class="donor-header">
                    <div class="donor-name">${donor.name}</div>
                    <div class="blood-group">${donor.bloodGroup}</div>
                </div>
                
                <div class="donor-details">
                    <div class="donor-detail">
                        <i>📞</i>
                        <span>${donor.phone}</span>
                    </div>
                    <div class="donor-detail">
                        <i>📍</i>
                        <span>${donor.upazila}, ${donor.district}</span>
                    </div>
                    <div class="donor-detail">
                        <i>🎂</i>
                        <span>${donor.age} years</span>
                    </div>
                    ${donor.email ? `
                    <div class="donor-detail">
                        <i>📧</i>
                        <span>${donor.email}</span>
                    </div>
                    ` : ''}
                    ${donor.address ? `
                    <div class="donor-detail full-width">
                        <i>🏠</i>
                        <span>${donor.address}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="donor-availability">
                    <span class="availability ${donor.available ? 'available' : 'unavailable'}">
                        ${donor.available ? 'Available for Donation' : 'Currently Unavailable'}
                    </span>
                    ${donor.lastDonation ? `
                    <span class="last-donation">Last donation: ${donor.lastDonation}</span>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
});