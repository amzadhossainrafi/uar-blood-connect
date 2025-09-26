// Complete Bangladesh Districts and Upazilas Data
const bangladeshData = {
    districts: [
        { id: 1, name: "Barguna", bn_name: "বরগুনা" },
        { id: 2, name: "Barishal", bn_name: "বরিশাল" },
        { id: 3, name: "Bhola", bn_name: "ভোলা" },
        { id: 4, name: "Jhalokati", bn_name: "ঝালকাঠি" },
        { id: 5, name: "Patuakhali", bn_name: "পটুয়াখালী" },
        { id: 6, name: "Pirojpur", bn_name: "পিরোজপুর" },
        { id: 7, name: "Bandarban", bn_name: "বান্দরবান" },
        { id: 8, name: "Brahmanbaria", bn_name: "ব্রাহ্মণবাড়িয়া" },
        { id: 9, name: "Chandpur", bn_name: "চাঁদপুর" },
        { id: 10, name: "Chattogram", bn_name: "চট্টগ্রাম" },
        { id: 11, name: "Cumilla", bn_name: "কুমিল্লা" },
        { id: 12, name: "Cox's Bazar", bn_name: "কক্সবাজার" },
        { id: 13, name: "Feni", bn_name: "ফেনী" },
        { id: 14, name: "Khagrachhari", bn_name: "খাগড়াছড়ি" },
        { id: 15, name: "Lakshmipur", bn_name: "লক্ষ্মীপুর" },
        { id: 16, name: "Noakhali", bn_name: "নোয়াখালী" },
        { id: 17, name: "Rangamati", bn_name: "রাঙ্গামাটি" },
        { id: 18, name: "Dhaka", bn_name: "ঢাকা" },
        { id: 19, name: "Faridpur", bn_name: "ফরিদপুর" },
        { id: 20, name: "Gazipur", bn_name: "গাজীপুর" },
        { id: 21, name: "Gopalganj", bn_name: "গোপালগঞ্জ" },
        { id: 22, name: "Kishoreganj", bn_name: "কিশোরগঞ্জ" },
        { id: 23, name: "Madaripur", bn_name: "মাদারীপুর" },
        { id: 24, name: "Manikganj", bn_name: "মানিকগঞ্জ" },
        { id: 25, name: "Munshiganj", bn_name: "মুন্সিগঞ্জ" },
        { id: 26, name: "Narayanganj", bn_name: "নারায়ণগঞ্জ" },
        { id: 27, name: "Narsingdi", bn_name: "নরসিংদী" },
        { id: 28, name: "Rajbari", bn_name: "রাজবাড়ী" },
        { id: 29, name: "Shariatpur", bn_name: "শরীয়তপুর" },
        { id: 30, name: "Tangail", bn_name: "টাঙ্গাইল" },
        { id: 31, name: "Bagerhat", bn_name: "বাগেরহাট" },
        { id: 32, name: "Chuadanga", bn_name: "চুয়াডাঙ্গা" },
        { id: 33, name: "Jashore", bn_name: "যশোর" },
        { id: 34, name: "Jhenaidah", bn_name: "ঝিনাইদহ" },
        { id: 35, name: "Khulna", bn_name: "খুলনা" },
        { id: 36, name: "Kushtia", bn_name: "কুষ্টিয়া" },
        { id: 37, name: "Magura", bn_name: "মাগুরা" },
        { id: 38, name: "Meherpur", bn_name: "মেহেরপুর" },
        { id: 39, name: "Narail", bn_name: "নড়াইল" },
        { id: 40, name: "Satkhira", bn_name: "সাতক্ষীরা" },
        { id: 41, name: "Jamalpur", bn_name: "জামালপুর" },
        { id: 42, name: "Mymensingh", bn_name: "ময়মনসিংহ" },
        { id: 43, name: "Netrokona", bn_name: "নেত্রকোণা" },
        { id: 44, name: "Sherpur", bn_name: "শেরপুর" },
        { id: 45, name: "Bogura", bn_name: "বগুড়া" },
        { id: 46, name: "Joypurhat", bn_name: "জয়পুরহাট" },
        { id: 47, name: "Naogaon", bn_name: "নওগাঁ" },
        { id: 48, name: "Natore", bn_name: "নাটোর" },
        { id: 49, name: "Chapainawabganj", bn_name: "চাঁপাইনবাবগঞ্জ" },
        { id: 50, name: "Pabna", bn_name: "পাবনা" },
        { id: 51, name: "Rajshahi", bn_name: "রাজশাহী" },
        { id: 52, name: "Sirajganj", bn_name: "সিরাজগঞ্জ" },
        { id: 53, name: "Dinajpur", bn_name: "দিনাজপুর" },
        { id: 54, name: "Gaibandha", bn_name: "গাইবান্ধা" },
        { id: 55, name: "Kurigram", bn_name: "কুড়িগ্রাম" },
        { id: 56, name: "Lalmonirhat", bn_name: "লালমনিরহাট" },
        { id: 57, name: "Nilphamari", bn_name: "নীলফামারী" },
        { id: 58, name: "Panchagarh", bn_name: "পঞ্চগড়" },
        { id: 59, name: "Rangpur", bn_name: "রংপুর" },
        { id: 60, name: "Thakurgaon", bn_name: "ঠাকুরগাঁও" },
        { id: 61, name: "Habiganj", bn_name: "হবিগঞ্জ" },
        { id: 62, name: "Moulvibazar", bn_name: "মৌলভীবাজার" },
        { id: 63, name: "Sunamganj", bn_name: "সুনামগঞ্জ" },
        { id: 64, name: "Sylhet", bn_name: "সিলেট" }
    ],
    
    upazilas: [
        // Barishal Division - Barguna District (1)
        { id: 1, district_id: 1, name: "Amtali", bn_name: "আমতলী" },
        { id: 2, district_id: 1, name: "Bamna", bn_name: "বামনা" },
        { id: 3, district_id: 1, name: "Barguna Sadar", bn_name: "বরগুনা সদর" },
        { id: 4, district_id: 1, name: "Betagi", bn_name: "বেতাগী" },
        { id: 5, district_id: 1, name: "Patharghata", bn_name: "পাথরঘাটা" },
        { id: 6, district_id: 1, name: "Taltali", bn_name: "তালতলী" },

        // Barishal Division - Barishal District (2)
        { id: 7, district_id: 2, name: "Agailjhara", bn_name: "আগাইলঝরা" },
        { id: 8, district_id: 2, name: "Babuganj", bn_name: "বাবুগঞ্জ" },
        { id: 9, district_id: 2, name: "Bakerganj", bn_name: "বাকেরগঞ্জ" },
        { id: 10, district_id: 2, name: "Banaripara", bn_name: "বানারীপাড়া" },
        { id: 11, district_id: 2, name: "Gaurnadi", bn_name: "গৌরনদী" },
        { id: 12, district_id: 2, name: "Hizla", bn_name: "হিজলা" },
        { id: 13, district_id: 2, name: "Barishal Sadar", bn_name: "বরিশাল সদর" },
        { id: 14, district_id: 2, name: "Mehendiganj", bn_name: "মেহেন্দিগঞ্জ" },
        { id: 15, district_id: 2, name: "Muladi", bn_name: "মুলাদী" },
        { id: 16, district_id: 2, name: "Wazirpur", bn_name: "ওয়াজিরপুর" },

        // Barishal Division - Bhola District (3)
        { id: 17, district_id: 3, name: "Bhola Sadar", bn_name: "ভোলা সদর" },
        { id: 18, district_id: 3, name: "Burhanuddin", bn_name: "বুরহানউদ্দিন" },
        { id: 19, district_id: 3, name: "Char Fasson", bn_name: "চর ফ্যাশন" },
        { id: 20, district_id: 3, name: "Daulatkhan", bn_name: "দৌলতখান" },
        { id: 21, district_id: 3, name: "Lalmohan", bn_name: "লালমোহন" },
        { id: 22, district_id: 3, name: "Manpura", bn_name: "মনপুরা" },
        { id: 23, district_id: 3, name: "Tazumuddin", bn_name: "তাজুমুদ্দিন" },

        // Barishal Division - Jhalokati District (4)
        { id: 24, district_id: 4, name: "Jhalokati Sadar", bn_name: "ঝালকাঠি সদর" },
        { id: 25, district_id: 4, name: "Kathalia", bn_name: "কাঠালিয়া" },
        { id: 26, district_id: 4, name: "Nalchity", bn_name: "নলছিটি" },
        { id: 27, district_id: 4, name: "Rajapur", bn_name: "রাজাপুর" },

        // Barishal Division - Patuakhali District (5)
        { id: 28, district_id: 5, name: "Bauphal", bn_name: "বাউফল" },
        { id: 29, district_id: 5, name: "Dashmina", bn_name: "দশমিনা" },
        { id: 30, district_id: 5, name: "Galachipa", bn_name: "গলাচিপা" },
        { id: 31, district_id: 5, name: "Kalapara", bn_name: "কালাপারা" },
        { id: 32, district_id: 5, name: "Mirzaganj", bn_name: "মির্জাগঞ্জ" },
        { id: 33, district_id: 5, name: "Patuakhali Sadar", bn_name: "পটুয়াখালী সদর" },
        { id: 34, district_id: 5, name: "Rangabali", bn_name: "রাঙ্গাবালী" },
        { id: 35, district_id: 5, name: "Dumki", bn_name: "ডুমকি" },

        // Barishal Division - Pirojpur District (6)
        { id: 36, district_id: 6, name: "Bhandaria", bn_name: "ভ্যান্ডারিয়া" },
        { id: 37, district_id: 6, name: "Kawkhali", bn_name: "কাউখালী" },
        { id: 38, district_id: 6, name: "Mathbaria", bn_name: "মাঠবাড়িয়া" },
        { id: 39, district_id: 6, name: "Nazirpur", bn_name: "নাজিরপুর" },
        { id: 40, district_id: 6, name: "Pirojpur Sadar", bn_name: "পিরোজপুর সদর" },
        { id: 41, district_id: 6, name: "Nesarabad", bn_name: "নেসারাবাদ" },
        { id: 42, district_id: 6, name: "Zianagar", bn_name: "জিয়ানগর" },

        // Chattogram Division - Bandarban District (7)
        { id: 43, district_id: 7, name: "Ali Kadam", bn_name: "আলী কদম" },
        { id: 44, district_id: 7, name: "Bandarban Sadar", bn_name: "বান্দরবান সদর" },
        { id: 45, district_id: 7, name: "Lama", bn_name: "লামা" },
        { id: 46, district_id: 7, name: "Naikhongchhari", bn_name: "নাইক্ষ্যংছড়ি" },
        { id: 47, district_id: 7, name: "Rowangchhari", bn_name: "রোয়াংছড়ি" },
        { id: 48, district_id: 7, name: "Ruma", bn_name: "রুমা" },
        { id: 49, district_id: 7, name: "Thanchi", bn_name: "থানচি" },

        // Chattogram Division - Brahmanbaria District (8)
        { id: 50, district_id: 8, name: "Akhaura", bn_name: "আখাউড়া" },
        { id: 51, district_id: 8, name: "Bancharampur", bn_name: "বাঞ্ছারামপুর" },
        { id: 52, district_id: 8, name: "Brahmanbaria Sadar", bn_name: "ব্রাহ্মণবাড়িয়া সদর" },
        { id: 53, district_id: 8, name: "Kasba", bn_name: "কসবা" },
        { id: 54, district_id: 8, name: "Nabinagar", bn_name: "নবীনগর" },
        { id: 55, district_id: 8, name: "Nasirnagar", bn_name: "নাসিরনগর" },
        { id: 56, district_id: 8, name: "Sarail", bn_name: "সরাইল" },
        { id: 57, district_id: 8, name: "Ashuganj", bn_name: "আশুগঞ্জ" },
        { id: 58, district_id: 8, name: "Bijoynagar", bn_name: "বিজয়নগর" },

        // Chattogram Division - Chandpur District (9)
        { id: 59, district_id: 9, name: "Chandpur Sadar", bn_name: "চাঁদপুর সদর" },
        { id: 60, district_id: 9, name: "Faridganj", bn_name: "ফরিদগঞ্জ" },
        { id: 61, district_id: 9, name: "Haimchar", bn_name: "হাইমচর" },
        { id: 62, district_id: 9, name: "Haziganj", bn_name: "হাজীগঞ্জ" },
        { id: 63, district_id: 9, name: "Kachua", bn_name: "কচুয়া" },
        { id: 64, district_id: 9, name: "Matlab Dakshin", bn_name: "মতলব দক্ষিণ" },
        { id: 65, district_id: 9, name: "Matlab Uttar", bn_name: "মতলব উত্তর" },
        { id: 66, district_id: 9, name: "Shahrasti", bn_name: "শাহরাস্তি" },

        // Chattogram Division - Chattogram District (10)
        { id: 67, district_id: 10, name: "Anwara", bn_name: "আনোয়ারা" },
        { id: 68, district_id: 10, name: "Banshkhali", bn_name: "বাশখালী" },
        { id: 69, district_id: 10, name: "Boalkhali", bn_name: "বোয়ালখালী" },
        { id: 70, district_id: 10, name: "Chandanaish", bn_name: "চন্দনাইশ" },
        { id: 71, district_id: 10, name: "Fatikchhari", bn_name: "ফটিকছড়ি" },
        { id: 72, district_id: 10, name: "Hathazari", bn_name: "হাটহাজারী" },
        { id: 73, district_id: 10, name: "Lohagara", bn_name: "লোহাগাড়া" },
        { id: 74, district_id: 10, name: "Mirsharai", bn_name: "মীরসরাই" },
        { id: 75, district_id: 10, name: "Patiya", bn_name: "পটিয়া" },
        { id: 76, district_id: 10, name: "Rangunia", bn_name: "রাঙ্গুনিয়া" },
        { id: 77, district_id: 10, name: "Raozan", bn_name: "রাউজান" },
        { id: 78, district_id: 10, name: "Sandwip", bn_name: "সন্দ্বীপ" },
        { id: 79, district_id: 10, name: "Satkania", bn_name: "সাতকানিয়া" },
        { id: 80, district_id: 10, name: "Sitakunda", bn_name: "সীতাকুণ্ড" },
        { id: 81, district_id: 10, name: "Chattogram Port", bn_name: "চট্টগ্রাম বন্দর" },
        { id: 82, district_id: 10, name: "Chattogram Sadar", bn_name: "চট্টগ্রাম সদর" },

        // Chattogram Division - Cumilla District (11)
        { id: 83, district_id: 11, name: "Barura", bn_name: "বরুড়া" },
        { id: 84, district_id: 11, name: "Brahmanpara", bn_name: "ব্রাহ্মণপাড়া" },
        { id: 85, district_id: 11, name: "Burichang", bn_name: "বুড়িচং" },
        { id: 86, district_id: 11, name: "Chandina", bn_name: "চান্দিনা" },
        { id: 87, district_id: 11, name: "Chauddagram", bn_name: "চৌদ্দগ্রাম" },
        { id: 88, district_id: 11, name: "Cumilla Sadar", bn_name: "কুমিল্লা সদর" },
        { id: 89, district_id: 11, name: "Daudkandi", bn_name: "দাউদকান্দি" },
        { id: 90, district_id: 11, name: "Debidwar", bn_name: "দেবীদ্বার" },
        { id: 91, district_id: 11, name: "Homna", bn_name: "হোমনা" },
        { id: 92, district_id: 11, name: "Laksam", bn_name: "লাকসাম" },
        { id: 93, district_id: 11, name: "Monohorgonj", bn_name: "মনোহরগঞ্জ" },
        { id: 94, district_id: 11, name: "Meghna", bn_name: "মেঘনা" },
        { id: 95, district_id: 11, name: "Muradnagar", bn_name: "মুরাদনগর" },
        { id: 96, district_id: 11, name: "Nangalkot", bn_name: "নাঙ্গলকোট" },
        { id: 97, district_id: 11, name: "Titas", bn_name: "তিতাস" },

        // Chattogram Division - Cox's Bazar District (12)
        { id: 98, district_id: 12, name: "Chakaria", bn_name: "চকরিয়া" },
        { id: 99, district_id: 12, name: "Cox's Bazar Sadar", bn_name: "কক্সবাজার সদর" },
        { id: 100, district_id: 12, name: "Kutubdia", bn_name: "কুতুবদিয়া" },
        { id: 101, district_id: 12, name: "Maheshkhali", bn_name: "মহেশখালী" },
        { id: 102, district_id: 12, name: "Ramu", bn_name: "রামু" },
        { id: 103, district_id: 12, name: "Teknaf", bn_name: "টেকনাফ" },
        { id: 104, district_id: 12, name: "Ukhia", bn_name: "উখিয়া" },
        { id: 105, district_id: 12, name: "Pekua", bn_name: "পেকুয়া" },

        // Chattogram Division - Feni District (13)
        { id: 106, district_id: 13, name: "Chhagalnaiya", bn_name: "ছাগলনাইয়া" },
        { id: 107, district_id: 13, name: "Daganbhuiyan", bn_name: "দাগনভূইয়া" },
        { id: 108, district_id: 13, name: "Feni Sadar", bn_name: "ফেনী সদর" },
        { id: 109, district_id: 13, name: "Parshuram", bn_name: "পরশুরাম" },
        { id: 110, district_id: 13, name: "Sonagazi", bn_name: "সোনাগাজী" },
        { id: 111, district_id: 13, name: "Fulgazi", bn_name: "ফুলগাজী" },

        // Chattogram Division - Khagrachhari District (14)
        { id: 112, district_id: 14, name: "Dighinala", bn_name: "দিঘিনালা" },
        { id: 113, district_id: 14, name: "Khagrachhari Sadar", bn_name: "খাগড়াছড়ি সদর" },
        { id: 114, district_id: 14, name: "Lakshmichhari", bn_name: "লক্ষ্মীছড়ি" },
        { id: 115, district_id: 14, name: "Mahalchhari", bn_name: "মহালছড়ি" },
        { id: 116, district_id: 14, name: "Manikchhari", bn_name: "মানিকছড়ি" },
        { id: 117, district_id: 14, name: "Matiranga", bn_name: "মাটিরাঙ্গা" },
        { id: 118, district_id: 14, name: "Panchhari", bn_name: "পানছড়ি" },
        { id: 119, district_id: 14, name: "Ramgarh", bn_name: "রামগড়" },

        // Chattogram Division - Lakshmipur District (15)
        { id: 120, district_id: 15, name: "Lakshmipur Sadar", bn_name: "লক্ষ্মীপুর সদর" },
        { id: 121, district_id: 15, name: "Raipur", bn_name: "রায়পুর" },
        { id: 122, district_id: 15, name: "Ramganj", bn_name: "রামগঞ্জ" },
        { id: 123, district_id: 15, name: "Ramgati", bn_name: "রামগতি" },
        { id: 124, district_id: 15, name: "Komol Nagar", bn_name: "কমল নগর" },

        // Chattogram Division - Noakhali District (16)
        { id: 125, district_id: 16, name: "Begumganj", bn_name: "বেগমগঞ্জ" },
        { id: 126, district_id: 16, name: "Noakhali Sadar", bn_name: "নোয়াখালী সদর" },
        { id: 127, district_id: 16, name: "Chatkhil", bn_name: "চাটখিল" },
        { id: 128, district_id: 16, name: "Companiganj", bn_name: "কোম্পানীগঞ্জ" },
        { id: 129, district_id: 16, name: "Hatiya", bn_name: "হাতিয়া" },
        { id: 130, district_id: 16, name: "Senbagh", bn_name: "সেনবাগ" },
        { id: 131, district_id: 16, name: "Sonaimuri", bn_name: "সোনাইমুড়ি" },
        { id: 132, district_id: 16, name: "Subarnachar", bn_name: "সুবর্ণচর" },
        { id: 133, district_id: 16, name: "Kabirhat", bn_name: "কবিরহাট" },

        // Chattogram Division - Rangamati District (17)
        { id: 134, district_id: 17, name: "Rangamati Sadar", bn_name: "রাঙ্গামাটি সদর" },
        { id: 135, district_id: 17, name: "Belaichhari", bn_name: "বেলাইছড়ি" },
        { id: 136, district_id: 17, name: "Bagaichhari", bn_name: "বাঘাইছড়ি" },
        { id: 137, district_id: 17, name: "Barkal", bn_name: "বরকল" },
        { id: 138, district_id: 17, name: "Juraichhari", bn_name: "জুরাইছড়ি" },
        { id: 139, district_id: 17, name: "Rajasthali", bn_name: "রাজস্থলী" },
        { id: 140, district_id: 17, name: "Kaptai", bn_name: "কাপ্তাই" },
        { id: 141, district_id: 17, name: "Langadu", bn_name: "লংগadu" },
        { id: 142, district_id: 17, name: "Naniarchar", bn_name: "নানিয়archar" },
        { id: 143, district_id: 17, name: "Kaukhali", bn_name: "কাউখালী" },

        // Dhaka Division - Dhaka District (18)
        { id: 144, district_id: 18, name: "Dhamrai", bn_name: "ধামরাই" },
        { id: 145, district_id: 18, name: "Dohar", bn_name: "দোহার" },
        { id: 146, district_id: 18, name: "Keraniganj", bn_name: "কেরানীগঞ্জ" },
        { id: 147, district_id: 18, name: "Nawabganj", bn_name: "নবাবগঞ্জ" },
        { id: 148, district_id: 18, name: "Savar", bn_name: "সাভার" },
        { id: 149, district_id: 18, name: "Dhaka North", bn_name: "ঢাকা উত্তর" },
        { id: 150, district_id: 18, name: "Dhaka South", bn_name: "ঢাকা দক্ষিণ" },

        // Dhaka Division - Faridpur District (19)
        { id: 151, district_id: 19, name: "Alfadanga", bn_name: "আলফাডাঙ্গা" },
        { id: 152, district_id: 19, name: "Bhanga", bn_name: "ভাঙ্গা" },
        { id: 153, district_id: 19, name: "Boalmari", bn_name: "বোয়ালমারী" },
        { id: 154, district_id: 19, name: "Charbhadrasan", bn_name: "চরভদ্রাসন" },
        { id: 155, district_id: 19, name: "Faridpur Sadar", bn_name: "ফরিদপুর সদর" },
        { id: 156, district_id: 19, name: "Madhukhali", bn_name: "মধুখালী" },
        { id: 157, district_id: 19, name: "Nagarkanda", bn_name: "নগরকান্ডা" },
        { id: 158, district_id: 19, name: "Sadarpur", bn_name: "সদরপুর" },
        { id: 159, district_id: 19, name: "Saltha", bn_name: "সালথা" },

        // Dhaka Division - Gazipur District (20)
        { id: 160, district_id: 20, name: "Gazipur Sadar", bn_name: "গাজীপুর সদর" },
        { id: 161, district_id: 20, name: "Kaliakair", bn_name: "কালিয়াকৈর" },
        { id: 162, district_id: 20, name: "Kaliganj", bn_name: "কালীগঞ্জ" },
        { id: 163, district_id: 20, name: "Kapasia", bn_name: "কাপাসিয়া" },
        { id: 164, district_id: 20, name: "Sreepur", bn_name: "শ্রীপুর" },

        // Dhaka Division - Gopalganj District (21)
        { id: 165, district_id: 21, name: "Gopalganj Sadar", bn_name: "গোপালগঞ্জ সদর" },
        { id: 166, district_id: 21, name: "Kashiani", bn_name: "কাশিয়ানী" },
        { id: 167, district_id: 21, name: "Kotalipara", bn_name: "কোটালীপাড়া" },
        { id: 168, district_id: 21, name: "Muksudpur", bn_name: "মুকসুদপুর" },
        { id: 169, district_id: 21, name: "Tungipara", bn_name: "টুঙ্গিপাড়া" },

        // Dhaka Division - Kishoreganj District (22)
        { id: 170, district_id: 22, name: "Austagram", bn_name: "অষ্টগ্রাম" },
        { id: 171, district_id: 22, name: "Bajitpur", bn_name: "বাজিতপুর" },
        { id: 172, district_id: 22, name: "Bhairab", bn_name: "ভৈরব" },
        { id: 173, district_id: 22, name: "Hossainpur", bn_name: "হোসেনপুর" },
        { id: 174, district_id: 22, name: "Itna", bn_name: "ইটনা" },
        { id: 175, district_id: 22, name: "Karimganj", bn_name: "করিমগঞ্জ" },
        { id: 176, district_id: 22, name: "Katiadi", bn_name: "কতিয়াদী" },
        { id: 177, district_id: 22, name: "Kishoreganj Sadar", bn_name: "কিশোরগঞ্জ সদর" },
        { id: 178, district_id: 22, name: "Kuliarchar", bn_name: "কুলিয়archar" },
        { id: 179, district_id: 22, name: "Mithamain", bn_name: "মিঠামইন" },
        { id: 180, district_id: 22, name: "Nikli", bn_name: "নিকলী" },
        { id: 181, district_id: 22, name: "Pakundia", bn_name: "পাকুন্দিয়া" },
        { id: 182, district_id: 22, name: "Tarail", bn_name: "তাড়াইল" },

        // Dhaka Division - Madaripur District (23)
        { id: 183, district_id: 23, name: "Madaripur Sadar", bn_name: "মাদারীপুর সদর" },
        { id: 184, district_id: 23, name: "Kalkini", bn_name: "কালকিনি" },
        { id: 185, district_id: 23, name: "Rajoir", bn_name: "রাজইর" },
        { id: 186, district_id: 23, name: "Shibchar", bn_name: "শিবচর" },

        // Dhaka Division - Manikganj District (24)
        { id: 187, district_id: 24, name: "Manikganj Sadar", bn_name: "মানিকগঞ্জ সদর" },
        { id: 188, district_id: 24, name: "Singair", bn_name: "সিংগাইর" },
        { id: 189, district_id: 24, name: "Shibalaya", bn_name: "শিবালয়" },
        { id: 190, district_id: 24, name: "Saturia", bn_name: "সাটুরিয়া" },
        { id: 191, district_id: 24, name: "Harirampur", bn_name: "হরিরামপুর" },
        { id: 192, district_id: 24, name: "Ghior", bn_name: "ঘিওর" },
        { id: 193, district_id: 24, name: "Daulatpur", bn_name: "দৌলতপুর" },

        // Dhaka Division - Munshiganj District (25)
        { id: 194, district_id: 25, name: "Munshiganj Sadar", bn_name: "মুন্সিগঞ্জ সদর" },
        { id: 195, district_id: 25, name: "Sreenagar", bn_name: "শ্রীনগর" },
        { id: 196, district_id: 25, name: "Sirajdikhan", bn_name: "সিরাজদিখান" },
        { id: 197, district_id: 25, name: "Louhajang", bn_name: "লৌহজং" },
        { id: 198, district_id: 25, name: "Gajaria", bn_name: "গজারিয়া" },
        { id: 199, district_id: 25, name: "Tongibari", bn_name: "টংগীবাড়ি" },

        // Dhaka Division - Narayanganj District (26)
        { id: 200, district_id: 26, name: "Narayanganj Sadar", bn_name: "নারায়ণগঞ্জ সদর" },
        { id: 201, district_id: 26, name: "Sonargaon", bn_name: "সোনারগাঁও" },
        { id: 202, district_id: 26, name: "Bandar", bn_name: "বন্দর" },
        { id: 203, district_id: 26, name: "Araihazar", bn_name: "আড়াইহাজার" },
        { id: 204, district_id: 26, name: "Rupganj", bn_name: "রূপগঞ্জ" },

        // Dhaka Division - Narsingdi District (27)
        { id: 205, district_id: 27, name: "Narsingdi Sadar", bn_name: "নরসিংদী সদর" },
        { id: 206, district_id: 27, name: "Belabo", bn_name: "বেলাবো" },
        { id: 207, district_id: 27, name: "Monohardi", bn_name: "মনোহরদী" },
        { id: 208, district_id: 27, name: "Palash", bn_name: "পলাশ" },
        { id: 209, district_id: 27, name: "Raipura", bn_name: "রায়পুরা" },
        { id: 210, district_id: 27, name: "Shibpur", bn_name: "শিবপুর" },

        // Dhaka Division - Rajbari District (28)
        { id: 211, district_id: 28, name: "Rajbari Sadar", bn_name: "রাজবাড়ী সদর" },
        { id: 212, district_id: 28, name: "Goalanda", bn_name: "গোয়ালন্দ" },
        { id: 213, district_id: 28, name: "Pangsha", bn_name: "পাংশা" },
        { id: 214, district_id: 28, name: "Baliakandi", bn_name: "বালিয়াকান্দি" },
        { id: 215, district_id: 28, name: "Kalukhali", bn_name: "কালুখালী" },

        // Dhaka Division - Shariatpur District (29)
        { id: 216, district_id: 29, name: "Shariatpur Sadar", bn_name: "শরীয়তপুর সদর" },
        { id: 217, district_id: 29, name: "Naria", bn_name: "নড়িয়া" },
        { id: 218, district_id: 29, name: "Zajira", bn_name: "জাজিরা" },
        { id: 219, district_id: 29, name: "Gosairhat", bn_name: "গোসাইরহাট" },
        { id: 220, district_id: 29, name: "Bhedarganj", bn_name: "ভেদরগঞ্জ" },
        { id: 221, district_id: 29, name: "Damudya", bn_name: "ডামুড্যা" },

        // Dhaka Division - Tangail District (30)
        { id: 222, district_id: 30, name: "Tangail Sadar", bn_name: "টাঙ্গাইল সদর" },
        { id: 223, district_id: 30, name: "Sakhipur", bn_name: "সখিপুর" },
        { id: 224, district_id: 30, name: "Basail", bn_name: "বাসাইল" },
        { id: 225, district_id: 30, name: "Madhupur", bn_name: "মধুপুর" },
        { id: 226, district_id: 30, name: "Ghatail", bn_name: "ঘাটাইল" },
        { id: 227, district_id: 30, name: "Kalihati", bn_name: "কালিহাতী" },
        { id: 228, district_id: 30, name: "Nagarpur", bn_name: "নাগরপুর" },
        { id: 229, district_id: 30, name: "Mirzapur", bn_name: "মির্জাপুর" },
        { id: 230, district_id: 30, name: "Gopalpur", bn_name: "গোপালপুর" },
        { id: 231, district_id: 30, name: "Delduar", bn_name: "দেলদুয়ার" },
        { id: 232, district_id: 30, name: "Bhuapur", bn_name: "ভুয়াপুর" },
        { id: 233, district_id: 30, name: "Dhanbari", bn_name: "ধানবাড়ী" },

        // Khulna Division - Bagerhat District (31)
        { id: 234, district_id: 31, name: "Bagerhat Sadar", bn_name: "বাগেরহাট সদর" },
        { id: 235, district_id: 31, name: "Chitalmari", bn_name: "চিতলমারী" },
        { id: 236, district_id: 31, name: "Fakirhat", bn_name: "ফকিরহাট" },
        { id: 237, district_id: 31, name: "Kachua", bn_name: "কচুয়া" },
        { id: 238, district_id: 31, name: "Mollahat", bn_name: "মোল্লাহাট" },
        { id: 239, district_id: 31, name: "Mongla", bn_name: "মোংলা" },
        { id: 240, district_id: 31, name: "Morrelganj", bn_name: "মোরেলগঞ্জ" },
        { id: 241, district_id: 31, name: "Rampal", bn_name: "রামপাল" },
        { id: 242, district_id: 31, name: "Sarankhola", bn_name: "শরণখোলা" },

        // Khulna Division - Chuadanga District (32)
        { id: 243, district_id: 32, name: "Chuadanga Sadar", bn_name: "চুয়াডাঙ্গা সদর" },
        { id: 244, district_id: 32, name: "Alamdanga", bn_name: "আলমডাঙ্গা" },
        { id: 245, district_id: 32, name: "Damurhuda", bn_name: "দামুড়হুদা" },
        { id: 246, district_id: 32, name: "Jibannagar", bn_name: "জীবননগর" },

        // Khulna Division - Jashore District (33)
        { id: 247, district_id: 33, name: "Jashore Sadar", bn_name: "যশোর সদর" },
        { id: 248, district_id: 33, name: "Abhaynagar", bn_name: "অভয়নগর" },
        { id: 249, district_id: 33, name: "Bagherpara", bn_name: "বাঘারপাড়া" },
        { id: 250, district_id: 33, name: "Chaugachha", bn_name: "চৌগাছা" },
        { id: 251, district_id: 33, name: "Jhikargacha", bn_name: "ঝিকরগাছা" },
        { id: 252, district_id: 33, name: "Keshabpur", bn_name: "কেশবপুর" },
        { id: 253, district_id: 33, name: "Manirampur", bn_name: "মনিরামপুর" },
        { id: 254, district_id: 33, name: "Sharsha", bn_name: "শার্শা" },

        // Khulna Division - Jhenaidah District (34)
        { id: 255, district_id: 34, name: "Jhenaidah Sadar", bn_name: "ঝিনাইদহ সদর" },
        { id: 256, district_id: 34, name: "Maheshpur", bn_name: "মহেশপুর" },
        { id: 257, district_id: 34, name: "Kaliganj", bn_name: "কালীগঞ্জ" },
        { id: 258, district_id: 34, name: "Kotchandpur", bn_name: "কোটচাঁদপুর" },
        { id: 259, district_id: 34, name: "Shailkupa", bn_name: "শৈলকুপা" },
        { id: 260, district_id: 34, name: "Harinakunda", bn_name: "হরিণাকুন্ডু" },

        // Khulna Division - Khulna District (35)
        { id: 261, district_id: 35, name: "Khulna Sadar", bn_name: "খুলনা সদর" },
        { id: 262, district_id: 35, name: "Sonadanga", bn_name: "সোনাডাঙ্গা" },
        { id: 263, district_id: 35, name: "Batiaghata", bn_name: "বাটিয়াঘাটা" },
        { id: 264, district_id: 35, name: "Dacope", bn_name: "ডাকোপ" },
        { id: 265, district_id: 35, name: "Dumuria", bn_name: "ডুমুরিয়া" },
        { id: 266, district_id: 35, name: "Dighalia", bn_name: "দিঘলিয়া" },
        { id: 267, district_id: 35, name: "Koyra", bn_name: "কয়রা" },
        { id: 268, district_id: 35, name: "Paikgacha", bn_name: "পাইকগাছা" },
        { id: 269, district_id: 35, name: "Phultala", bn_name: "ফুলতলা" },
        { id: 270, district_id: 35, name: "Rupsa", bn_name: "রূপসা" },
        { id: 271, district_id: 35, name: "Terokhada", bn_name: "তেরখাদা" },

        // Khulna Division - Kushtia District (36)
        { id: 272, district_id: 36, name: "Kushtia Sadar", bn_name: "কুষ্টিয়া সদর" },
        { id: 273, district_id: 36, name: "Kumarkhali", bn_name: "কুমারখালী" },
        { id: 274, district_id: 36, name: "Khoksa", bn_name: "খোকসা" },
        { id: 275, district_id: 36, name: "Mirpur", bn_name: "মিরপুর" },
        { id: 276, district_id: 36, name: "Daulatpur", bn_name: "দৌলতপুর" },
        { id: 277, district_id: 36, name: "Bheramara", bn_name: "ভেড়ামারা" },

        // Khulna Division - Magura District (37)
        { id: 278, district_id: 37, name: "Magura Sadar", bn_name: "মাগুরা সদর" },
        { id: 279, district_id: 37, name: "Mohammadpur", bn_name: "মোহাম্মদপুর" },
        { id: 280, district_id: 37, name: "Shalikha", bn_name: "শালিখা" },
        { id: 281, district_id: 37, name: "Sreepur", bn_name: "শ্রীপুর" },

        // Khulna Division - Meherpur District (38)
        { id: 282, district_id: 38, name: "Meherpur Sadar", bn_name: "মেহেরপুর সদর" },
        { id: 283, district_id: 38, name: "Gangni", bn_name: "গাংনী" },
        { id: 284, district_id: 38, name: "Mujibnagar", bn_name: "মুজিবনগর" },

        // Khulna Division - Narail District (39)
        { id: 285, district_id: 39, name: "Narail Sadar", bn_name: "নড়াইল সদর" },
        { id: 286, district_id: 39, name: "Lohagara", bn_name: "লোহাগাড়া" },
        { id: 287, district_id: 39, name: "Kalia", bn_name: "কালিয়া" },

        // Khulna Division - Satkhira District (40)
        { id: 288, district_id: 40, name: "Satkhira Sadar", bn_name: "সাতক্ষীরা সদর" },
        { id: 289, district_id: 40, name: "Assasuni", bn_name: "আssasuni" },
        { id: 290, district_id: 40, name: "Debhata", bn_name: "দেবহাটা" },
        { id: 291, district_id: 40, name: "Kalaroa", bn_name: "কলারোয়া" },
        { id: 292, district_id: 40, name: "Kaliganj", bn_name: "কালীগঞ্জ" },
        { id: 293, district_id: 40, name: "Shyamnagar", bn_name: "শ্যামনগর" },
        { id: 294, district_id: 40, name: "Tala", bn_name: "তালা" },

        // Mymensingh Division - Jamalpur District (41)
        { id: 295, district_id: 41, name: "Jamalpur Sadar", bn_name: "জামালপুর সদর" },
        { id: 296, district_id: 41, name: "Baksiganj", bn_name: "বকসিগঞ্জ" },
        { id: 297, district_id: 41, name: "Dewanganj", bn_name: "দেওয়ানগঞ্জ" },
        { id: 298, district_id: 41, name: "Islampur", bn_name: "ইসলামপুর" },
        { id: 299, district_id: 41, name: "Madarganj", bn_name: "মাদারগঞ্জ" },
        { id: 300, district_id: 41, name: "Melandaha", bn_name: "মেলানদাহা" },
        { id: 301, district_id: 41, name: "Sarishabari", bn_name: "সরিষাবাড়ী" },

        // Mymensingh Division - Mymensingh District (42)
        { id: 302, district_id: 42, name: "Mymensingh Sadar", bn_name: "ময়মনসিংহ সদর" },
        { id: 303, district_id: 42, name: "Bhaluka", bn_name: "ভালুকা" },
        { id: 304, district_id: 42, name: "Trishal", bn_name: "ত্রিশাল" },
        { id: 305, district_id: 42, name: "Haluaghat", bn_name: "হালুয়াঘাট" },
        { id: 306, district_id: 42, name: "Muktagacha", bn_name: "মুক্তাগাছা" },
        { id: 307, district_id: 42, name: "Dhobaura", bn_name: "ধোবাউরা" },
        { id: 308, district_id: 42, name: "Phulpur", bn_name: "ফুলপুর" },
        { id: 309, district_id: 42, name: "Gaffargaon", bn_name: "গফরগাঁও" },
        { id: 310, district_id: 42, name: "Gauripur", bn_name: "গৌরিপুর" },
        { id: 311, district_id: 42, name: "Ishwarganj", bn_name: "ঈশ্বরগঞ্জ" },
        { id: 312, district_id: 42, name: "Nandail", bn_name: "নান্দাইল" },
        { id: 313, district_id: 42, name: "Tarakanda", bn_name: "তারাকান্দা" },

        // Mymensingh Division - Netrokona District (43)
        { id: 314, district_id: 43, name: "Netrokona Sadar", bn_name: "নেত্রকোণা সদর" },
        { id: 315, district_id: 43, name: "Atpara", bn_name: "আটপাড়া" },
        { id: 316, district_id: 43, name: "Barhatta", bn_name: "বরহাট্টা" },
        { id: 317, district_id: 43, name: "Durgapur", bn_name: "দুর্গাপুর" },
        { id: 318, district_id: 43, name: "Khaliajuri", bn_name: "খালিয়াজুড়ি" },
        { id: 319, district_id: 43, name: "Kalmakanda", bn_name: "কলমাকান্দা" },
        { id: 320, district_id: 43, name: "Kendua", bn_name: "কেন্দুয়া" },
        { id: 321, district_id: 43, name: "Madan", bn_name: "মদন" },
        { id: 322, district_id: 43, name: "Mohanganj", bn_name: "মোহনগঞ্জ" },
        { id: 323, district_id: 43, name: "Purbadhala", bn_name: "পূর্বধলা" },

        // Mymensingh Division - Sherpur District (44)
        { id: 324, district_id: 44, name: "Sherpur Sadar", bn_name: "শেরপুর সদর" },
        { id: 325, district_id: 44, name: "Jhenaigati", bn_name: "ঝিনাইগাতী" },
        { id: 326, district_id: 44, name: "Nakla", bn_name: "নকলা" },
        { id: 327, district_id: 44, name: "Nalitabari", bn_name: "নালিতাবাড়ী" },
        { id: 328, district_id: 44, name: "Sreebardi", bn_name: "শ্রীবরদী" },

        // Rajshahi Division - Bogura District (45)
        { id: 329, district_id: 45, name: "Bogura Sadar", bn_name: "বগুড়া সদর" },
        { id: 330, district_id: 45, name: "Adamdighi", bn_name: "আদমদিঘী" },
        { id: 331, district_id: 45, name: "Dhunat", bn_name: "ধুনট" },
        { id: 332, district_id: 45, name: "Dhupchanchia", bn_name: "দুপচাঁচিয়া" },
        { id: 333, district_id: 45, name: "Gabtali", bn_name: "গাবতলী" },
        { id: 334, district_id: 45, name: "Kahaloo", bn_name: "কাহালু" },
        { id: 335, district_id: 45, name: "Nandigram", bn_name: "নন্দীগ্রাম" },
        { id: 336, district_id: 45, name: "Sariakandi", bn_name: "সারিয়াকান্দি" },
        { id: 337, district_id: 45, name: "Shajahanpur", bn_name: "শাজাহানপুর" },
        { id: 338, district_id: 45, name: "Sherpur", bn_name: "শেরপুর" },
        { id: 339, district_id: 45, name: "Shibganj", bn_name: "শিবগঞ্জ" },
        { id: 340, district_id: 45, name: "Sonatola", bn_name: "সোনাতলা" },

        // Rajshahi Division - Joypurhat District (46)
        { id: 341, district_id: 46, name: "Joypurhat Sadar", bn_name: "জয়পুরহাট সদর" },
        { id: 342, district_id: 46, name: "Akkelpur", bn_name: "আক্কেলপুর" },
        { id: 343, district_id: 46, name: "Kalai", bn_name: "কালাই" },
        { id: 344, district_id: 46, name: "Khetlal", bn_name: "ক্ষেতলাল" },
        { id: 345, district_id: 46, name: "Panchbibi", bn_name: "পাঁচবিবি" },

        // Rajshahi Division - Naogaon District (47)
        { id: 346, district_id: 47, name: "Naogaon Sadar", bn_name: "নওগাঁ সদর" },
        { id: 347, district_id: 47, name: "Atrai", bn_name: "আত্রাই" },
        { id: 348, district_id: 47, name: "Badalgachi", bn_name: "বদলগাছী" },
        { id: 349, district_id: 47, name: "Dhamoirhat", bn_name: "ধামইরহাট" },
        { id: 350, district_id: 47, name: "Manda", bn_name: "মান্দা" },
        { id: 351, district_id: 47, name: "Mahadebpur", bn_name: "মহাদেবপুর" },
        { id: 352, district_id: 47, name: "Niamatpur", bn_name: "নিয়ামতপুর" },
        { id: 353, district_id: 47, name: "Patnitala", bn_name: "পত্নীতলা" },
        { id: 354, district_id: 47, name: "Porsha", bn_name: "পোরশা" },
        { id: 355, district_id: 47, name: "Raninagar", bn_name: "রাণীনগর" },
        { id: 356, district_id: 47, name: "Sapahar", bn_name: "সাপাহার" },

        // Rajshahi Division - Natore District (48)
        { id: 357, district_id: 48, name: "Natore Sadar", bn_name: "নাটোর সদর" },
        { id: 358, district_id: 48, name: "Bagatipara", bn_name: "বাগাতিপাড়া" },
        { id: 359, district_id: 48, name: "Baraigram", bn_name: "বড়াইগ্রাম" },
        { id: 360, district_id: 48, name: "Gurudaspur", bn_name: "গুরুদাসপুর" },
        { id: 361, district_id: 48, name: "Lalpur", bn_name: "লালপুর" },
        { id: 362, district_id: 48, name: "Naldanga", bn_name: "নলডাঙ্গা" },
        { id: 363, district_id: 48, name: "Singra", bn_name: "সিংড়া" },

        // Rajshahi Division - Chapainawabganj District (49)
        { id: 364, district_id: 49, name: "Chapainawabganj Sadar", bn_name: "চাঁপাইনবাবগঞ্জ সদর" },
        { id: 365, district_id: 49, name: "Bholahat", bn_name: "ভোলাহাট" },
        { id: 366, district_id: 49, name: "Gomastapur", bn_name: "গোমস্তাপুর" },
        { id: 367, district_id: 49, name: "Nachole", bn_name: "নাচোল" },
        { id: 368, district_id: 49, name: "Shibganj", bn_name: "শিবগঞ্জ" },

        // Rajshahi Division - Pabna District (50)
        { id: 369, district_id: 50, name: "Pabna Sadar", bn_name: "পাবনা সদর" },
        { id: 370, district_id: 50, name: "Atgharia", bn_name: "আটঘরিয়া" },
        { id: 371, district_id: 50, name: "Bera", bn_name: "বেড়া" },
        { id: 372, district_id: 50, name: "Bhangura", bn_name: "ভাঙ্গুরা" },
        { id: 373, district_id: 50, name: "Chatmohar", bn_name: "চাটমোহর" },
        { id: 374, district_id: 50, name: "Faridpur", bn_name: "ফরিদপুর" },
        { id: 375, district_id: 50, name: "Ishwardi", bn_name: "ঈশ্বরদী" },
        { id: 376, district_id: 50, name: "Santhia", bn_name: "সাঁথিয়া" },
        { id: 377, district_id: 50, name: "Sujanagar", bn_name: "সুজানগর" },

        // Rajshahi Division - Rajshahi District (51)
        { id: 378, district_id: 51, name: "Rajshahi Sadar", bn_name: "রাজশাহী সদর" },
        { id: 379, district_id: 51, name: "Bagha", bn_name: "বাঘা" },
        { id: 380, district_id: 51, name: "Bagmara", bn_name: "বাগমারা" },
        { id: 381, district_id: 51, name: "Charghat", bn_name: "চারঘাট" },
        { id: 382, district_id: 51, name: "Durgapur", bn_name: "দুর্গাপুর" },
        { id: 383, district_id: 51, name: "Godagari", bn_name: "গোদাগাড়ী" },
        { id: 384, district_id: 51, name: "Mohanpur", bn_name: "মোহনপুর" },
        { id: 385, district_id: 51, name: "Paba", bn_name: "পবা" },
        { id: 386, district_id: 51, name: "Puthia", bn_name: "পুঠিয়া" },
        { id: 387, district_id: 51, name: "Tanore", bn_name: "তানোর" },

        // Rajshahi Division - Sirajganj District (52)
        { id: 388, district_id: 52, name: "Sirajganj Sadar", bn_name: "সিরাজগঞ্জ সদর" },
        { id: 389, district_id: 52, name: "Belkuchi", bn_name: "বেলকুচি" },
        { id: 390, district_id: 52, name: "Chauhali", bn_name: "চৌহালি" },
        { id: 391, district_id: 52, name: "Kamarkhanda", bn_name: "কামারখান্দা" },
        { id: 392, district_id: 52, name: "Kazipur", bn_name: "কাজীপুর" },
        { id: 393, district_id: 52, name: "Raiganj", bn_name: "রায়গঞ্জ" },
        { id: 394, district_id: 52, name: "Shahjadpur", bn_name: "শাহজাদপুর" },
        { id: 395, district_id: 52, name: "Tarash", bn_name: "তাড়াশ" },
        { id: 396, district_id: 52, name: "Ullahpara", bn_name: "উল্লাপাড়া" },

        // Rangpur Division - Dinajpur District (53)
        { id: 397, district_id: 53, name: "Dinajpur Sadar", bn_name: "দিনাজপুর সদর" },
        { id: 398, district_id: 53, name: "Birampur", bn_name: "বিরামপুর" },
        { id: 399, district_id: 53, name: "Birganj", bn_name: "বীরগঞ্জ" },
        { id: 400, district_id: 53, name: "Biral", bn_name: "বিরল" },
        { id: 401, district_id: 53, name: "Bochaganj", bn_name: "বোচাগঞ্জ" },
        { id: 402, district_id: 53, name: "Chirirbandar", bn_name: "চিরিরবন্দর" },
        { id: 403, district_id: 53, name: "Phulbari", bn_name: "ফুলবাড়ী" },
        { id: 404, district_id: 53, name: "Ghoraghat", bn_name: "ঘোড়াঘাট" },
        { id: 405, district_id: 53, name: "Hakimpur", bn_name: "হাকিমপুর" },
        { id: 406, district_id: 53, name: "Kaharole", bn_name: "কাহারোল" },
        { id: 407, district_id: 53, name: "Khansama", bn_name: "খানসামা" },
        { id: 408, district_id: 53, name: "Nawabganj", bn_name: "নবাবগঞ্জ" },
        { id: 409, district_id: 53, name: "Parbatipur", bn_name: "পার্বতীপুর" },

        // Rangpur Division - Gaibandha District (54)
        { id: 410, district_id: 54, name: "Gaibandha Sadar", bn_name: "গাইবান্ধা সদর" },
        { id: 411, district_id: 54, name: "Fulchhari", bn_name: "ফুলছড়ি" },
        { id: 412, district_id: 54, name: "Gobindaganj", bn_name: "গোবিন্দগঞ্জ" },
        { id: 413, district_id: 54, name: "Palashbari", bn_name: "পলাশবাড়ী" },
        { id: 414, district_id: 54, name: "Sadullapur", bn_name: "সাদুল্লাপুর" },
        { id: 415, district_id: 54, name: "Saghata", bn_name: "সাঘাটা" },
        { id: 416, district_id: 54, name: "Sundarganj", bn_name: "সুন্দরগঞ্জ" },

        // Rangpur Division - Kurigram District (55)
        { id: 417, district_id: 55, name: "Kurigram Sadar", bn_name: "কুড়িগ্রাম সদর" },
        { id: 418, district_id: 55, name: "Bhurungamari", bn_name: "ভুরুঙ্গামারী" },
        { id: 419, district_id: 55, name: "Char Rajibpur", bn_name: "চর রাজিবপুর" },
        { id: 420, district_id: 55, name: "Chilmari", bn_name: "চিলমারী" },
        { id: 421, district_id: 55, name: "Phulbari", bn_name: "ফুলবাড়ী" },
        { id: 422, district_id: 55, name: "Nageshwari", bn_name: "নাগেশ্বরী" },
        { id: 423, district_id: 55, name: "Rajarhat", bn_name: "রাজারহাট" },
        { id: 424, district_id: 55, name: "Raomari", bn_name: "রৌমারী" },
        { id: 425, district_id: 55, name: "Ulipur", bn_name: "উলিপুর" },

        // Rangpur Division - Lalmonirhat District (56)
        { id: 426, district_id: 56, name: "Lalmonirhat Sadar", bn_name: "লালমনিরহাট সদর" },
        { id: 427, district_id: 56, name: "Aditmari", bn_name: "আদিতমারী" },
        { id: 428, district_id: 56, name: "Kaliganj", bn_name: "কালীগঞ্জ" },
        { id: 429, district_id: 56, name: "Hatibandha", bn_name: "হাতিবান্ধা" },
        { id: 430, district_id: 56, name: "Patgram", bn_name: "পাটগ্রাম" },

        // Rangpur Division - Nilphamari District (57)
        { id: 431, district_id: 57, name: "Nilphamari Sadar", bn_name: "নীলফামারী সদর" },
        { id: 432, district_id: 57, name: "Dimla", bn_name: "ডিমলা" },
        { id: 433, district_id: 57, name: "Domar", bn_name: "ডোমার" },
        { id: 434, district_id: 57, name: "Jaldhaka", bn_name: "জলঢাকা" },
        { id: 435, district_id: 57, name: "Kishoreganj", bn_name: "কিশোরগঞ্জ" },
        { id: 436, district_id: 57, name: "Saidpur", bn_name: "সৈয়দপুর" },

        // Rangpur Division - Panchagarh District (58)
        { id: 437, district_id: 58, name: "Panchagarh Sadar", bn_name: "পঞ্চগড় সদর" },
        { id: 438, district_id: 58, name: "Atwari", bn_name: "আটwari" },
        { id: 439, district_id: 58, name: "Boda", bn_name: "বোদা" },
        { id: 440, district_id: 58, name: "Debiganj", bn_name: "দেবীগঞ্জ" },
        { id: 441, district_id: 58, name: "Tetulia", bn_name: "তেতুলিয়া" },

        // Rangpur Division - Rangpur District (59)
        { id: 442, district_id: 59, name: "Rangpur Sadar", bn_name: "রংপুর সদর" },
        { id: 443, district_id: 59, name: "Badarganj", bn_name: "বদরগঞ্জ" },
        { id: 444, district_id: 59, name: "Gangachara", bn_name: "গংগাচড়া" },
        { id: 445, district_id: 59, name: "Kaunia", bn_name: "কাউনিয়া" },
        { id: 446, district_id: 59, name: "Mithapukur", bn_name: "মিঠাপুকুর" },
        { id: 447, district_id: 59, name: "Pirgachha", bn_name: "পীরগাছা" },
        { id: 448, district_id: 59, name: "Pirganj", bn_name: "পীরগঞ্জ" },
        { id: 449, district_id: 59, name: "Taraganj", bn_name: "তারাগঞ্জ" },

        // Rangpur Division - Thakurgaon District (60)
        { id: 450, district_id: 60, name: "Thakurgaon Sadar", bn_name: "ঠাকুরগাঁও সদর" },
        { id: 451, district_id: 60, name: "Baliadangi", bn_name: "বালিয়াডাঙ্গী" },
        { id: 452, district_id: 60, name: "Haripur", bn_name: "হরিপুর" },
        { id: 453, district_id: 60, name: "Pirganj", bn_name: "পীরগঞ্জ" },
        { id: 454, district_id: 60, name: "Ranisankail", bn_name: "রাণীসংকইল" },

        // Sylhet Division - Habiganj District (61)
        { id: 455, district_id: 61, name: "Habiganj Sadar", bn_name: "হবিগঞ্জ সদর" },
        { id: 456, district_id: 61, name: "Ajmiriganj", bn_name: "আজমিরিগঞ্জ" },
        { id: 457, district_id: 61, name: "Baniachong", bn_name: "বানিয়াচং" },
        { id: 458, district_id: 61, name: "Bahubal", bn_name: "বাহুবল" },
        { id: 459, district_id: 61, name: "Chunarughat", bn_name: "চুনারুঘাট" },
        { id: 460, district_id: 61, name: "Lakhai", bn_name: "লাখাই" },
        { id: 461, district_id: 61, name: "Madhabpur", bn_name: "মাধবপুর" },
        { id: 462, district_id: 61, name: "Nabiganj", bn_name: "নবীগঞ্জ" },

        // Sylhet Division - Moulvibazar District (62)
        { id: 463, district_id: 62, name: "Moulvibazar Sadar", bn_name: "মৌলভীবাজার সদর" },
        { id: 464, district_id: 62, name: "Barlekha", bn_name: "বড়lekha" },
        { id: 465, district_id: 62, name: "Juri", bn_name: "জুড়ী" },
        { id: 466, district_id: 62, name: "Kamalganj", bn_name: "কমলগঞ্জ" },
        { id: 467, district_id: 62, name: "Kulaura", bn_name: "কুলাউরা" },
        { id: 468, district_id: 62, name: "Rajnagar", bn_name: "রাজনগর" },
        { id: 469, district_id: 62, name: "Sreemangal", bn_name: "শ্রীমঙ্গল" },

        // Sylhet Division - Sunamganj District (63)
        { id: 470, district_id: 63, name: "Sunamganj Sadar", bn_name: "সুনামগঞ্জ সদর" },
        { id: 471, district_id: 63, name: "Bishwamvarpur", bn_name: "বিশ্বম্বারপুর" },
        { id: 472, district_id: 63, name: "Chhatak", bn_name: "ছাতক" },
        { id: 473, district_id: 63, name: "Derai", bn_name: "দিরাই" },
        { id: 474, district_id: 63, name: "Dharampasha", bn_name: "ধরমপাশা" },
        { id: 475, district_id: 63, name: "Dowarabazar", bn_name: "দোয়ারাবাজার" },
        { id: 476, district_id: 63, name: "Jagannathpur", bn_name: "জগন্নাথপুর" },
        { id: 477, district_id: 63, name: "Jamalganj", bn_name: "জামালগঞ্জ" },
        { id: 478, district_id: 63, name: "Sullah", bn_name: "সুল্লা" },
        { id: 479, district_id: 63, name: "Tahirpur", bn_name: "তাহিরপুর" },

        // Sylhet Division - Sylhet District (64)
        { id: 480, district_id: 64, name: "Sylhet Sadar", bn_name: "সিলেট সদর" },
        { id: 481, district_id: 64, name: "Beanibazar", bn_name: "বিয়ানীবাজার" },
        { id: 482, district_id: 64, name: "Bishwanath", bn_name: "বিশ্বনাথ" },
        { id: 483, district_id: 64, name: "Companiganj", bn_name: "কোম্পানীগঞ্জ" },
        { id: 484, district_id: 64, name: "Dakshin Surma", bn_name: "দক্ষিণ সুরমা" },
        { id: 485, district_id: 64, name: "Fenchuganj", bn_name: "ফেঞ্চুগঞ্জ" },
        { id: 486, district_id: 64, name: "Golapganj", bn_name: "গোলাপগঞ্জ" },
        { id: 487, district_id: 64, name: "Gowainghat", bn_name: "গোয়াইনঘাট" },
        { id: 488, district_id: 64, name: "Jaintiapur", bn_name: "জৈন্তাপুর" },
        { id: 489, district_id: 64, name: "Kanaighat", bn_name: "কানাইঘাট" },
        { id: 490, district_id: 64, name: "Osmani Nagar", bn_name: "ওসমানী নগর" },
        { id: 491, district_id: 64, name: "Zakiganj", bn_name: "জকিগঞ্জ" },
        { id: 492, district_id: 64, name: "South Surma", bn_name: "দক্ষিণ সুরমা" },
        { id: 493, district_id: 64, name: "Balaganj", bn_name: "বালাগঞ্জ" },
        { id: 494, district_id: 64, name: "Jointapur", bn_name: "জৈন্তাপুর" },
        { id: 495, district_id: 64, name: "Bishwanath", bn_name: "বিশ্বনাথ" }
    ]
};

// Function to get districts
function getDistricts() {
    return bangladeshData.districts;
}

// Function to get upazilas by district ID
function getUpazilasByDistrict(districtId) {
    return bangladeshData.upazilas.filter(upazila => upazila.district_id === parseInt(districtId));
}

// Function to get district by ID
function getDistrictById(districtId) {
    return bangladeshData.districts.find(district => district.id === parseInt(districtId));
}

// Function to get upazila by ID
function getUpazilaById(upazilaId) {
    return bangladeshData.upazilas.find(upazila => upazila.id === parseInt(upazilaId));
}

// Function to get district by name
function getDistrictByName(districtName) {
    return bangladeshData.districts.find(district => district.name === districtName);
}

// Function to get total upazila count
function getTotalUpazilas() {
    return bangladeshData.upazilas.length;
}

// Function to get upazilas by district name
function getUpazilasByDistrictName(districtName) {
    const district = getDistrictByName(districtName);
    if (district) {
        return getUpazilasByDistrict(district.id);
    }
    return [];
}