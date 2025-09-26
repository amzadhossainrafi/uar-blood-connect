document.addEventListener('DOMContentLoaded', function() {
    const donorForm = document.getElementById('donorForm');
    const successMessage = document.getElementById('successMessage');
    const districtSelect = document.getElementById('district');
    const upazilaSelect = document.getElementById('upazila');

    console.log('Register page loaded'); // Debug log

    // Initialize districts dropdown
    initializeDistricts();
    
    // Add event listener for district change
    districtSelect.addEventListener('change', function() {
        console.log('District changed to:', this.value); // Debug log
        updateUpazilas(this.value);
    });

    donorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted'); // Debug log
        
        // Get form data
        const formData = new FormData(donorForm);
        const districtId = parseInt(districtSelect.value);
        const upazilaId = parseInt(upazilaSelect.value);
        
        console.log('District ID:', districtId, 'Upazila ID:', upazilaId); // Debug log
        
        const district = getDistrictById(districtId);
        const upazila = getUpazilaById(upazilaId);
        
        console.log('District:', district, 'Upazila:', upazila); // Debug log
        
        if (!district || !upazila) {
            alert('Please select both district and upazila');
            return;
        }

        const donor = {
            id: Date.now(),
            name: formData.get('name'),
            age: parseInt(formData.get('age')),
            bloodGroup: formData.get('bloodGroup'),
            phone: formData.get('phone'),
            email: formData.get('email') || '',
            district: district.name,
            district_bn: district.bn_name,
            upazila: upazila.name,
            upazila_bn: upazila.bn_name,
            address: formData.get('address') || '',
            lastDonation: formData.get('lastDonation') || '',
            available: formData.get('available') === 'on',
            registrationDate: new Date().toISOString().split('T')[0]
        };

        console.log('Donor data:', donor); // Debug log

        // Save donor to localStorage
        saveDonor(donor);
        
        // Show success message and hide form
        donorForm.style.display = 'none';
        successMessage.style.display = 'block';
    });

    function initializeDistricts() {
        console.log('Initializing districts...'); // Debug log
        const districts = getDistricts();
        console.log('Districts found:', districts.length); // Debug log
        
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.id;
            option.textContent = `${district.name} - ${district.bn_name}`;
            districtSelect.appendChild(option);
        });
        
        console.log('Districts dropdown populated'); // Debug log
    }

    function updateUpazilas(districtId) {
        console.log('Updating upazilas for district:', districtId); // Debug log
        upazilaSelect.innerHTML = '<option value="">Select Upazila</option>';
        
        if (!districtId) {
            console.log('No district selected'); // Debug log
            return;
        }
        
        const upazilas = getUpazilasByDistrict(parseInt(districtId));
        console.log('Upazilas found:', upazilas.length); // Debug log
        
        upazilas.forEach(upazila => {
            const option = document.createElement('option');
            option.value = upazila.id;
            option.textContent = `${upazila.name} - ${upazila.bn_name}`;
            upazilaSelect.appendChild(option);
        });
        
        console.log('Upazilas dropdown populated'); // Debug log
    }

    function saveDonor(donor) {
        let donors = JSON.parse(localStorage.getItem('donors')) || [];
        donors.push(donor);
        localStorage.setItem('donors', JSON.stringify(donors));
        console.log('Donor saved to localStorage'); // Debug log
    }
});