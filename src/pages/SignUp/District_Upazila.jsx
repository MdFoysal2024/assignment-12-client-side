import React from 'react';
import SignUp from './SignUp';

const District_Upazila = () => {



    const upazilas = [
        'Ajmiriganj', 'Atpara', 'Austagram', 'Babuganj', 'Bagerhat Sadar', 'Bajitpur', 'Bakerganj', 'Banaripara', 'Keranigonj', ' Indurkani', 'Kolabagan', 'Shahabag', 'Banani',
        'Bandarban Sadar', 'Banglabandha', 'Barguna Sadar', 'Barhatta', 'Barisal Sadar', 'Basail', 'Belabo', 'Belkuchi',
        'Benapole', 'Bhandaria', 'Bheramara', 'Bhola Sadar', 'Bhuapur', 'Bijoynagar', 'Birampur', 'Birganj',
        'Bishwanath', 'Boalkhali', 'Bogra Sadar', 'Chakaria', 'Chandanaish', 'Chandpur Sadar', 'Chapai Nawabganj Sadar',
        'Chhatak', 'Chuadanga Sadar', 'Comilla Sadar', 'Cox’s Bazar Sadar', 'Daulatpur', 'Debhata', 'Debidwar',
        'Dinajpur Sadar', 'Dohar', 'Dumki', 'Dumuria', 'Faridganj', 'Faridpur Sadar', 'Fatikchhari', 'Feni Sadar',
        'Gaibandha Sadar', 'Gopalganj Sadar', 'Gosairhat', 'Habiganj Sadar', 'Haluaghat', 'Ishwardi', 'Jamalpur Sadar',
        'Jessore Sadar', 'Jhalokati Sadar', 'Jhenaidah Sadar', 'Kalia', 'Kamalganj', 'Kapasia', 'Karimganj',
        'Khagrachari Sadar', 'Kishoreganj Sadar', 'Kotalipara', 'Kurigram Sadar', 'Kushtia Sadar', 'Lakshmipur Sadar',
        'Lalmonirhat Sadar', 'Madaripur Sadar', 'Manikganj Sadar', 'Meherpur Sadar', 'Mirpur', 'Mithapukur', 'Moulvibazar Sadar',
        'Munshiganj Sadar', 'Mymensingh Sadar', 'Naogaon Sadar', 'Narsingdi Sadar', 'Natore Sadar', 'Netrokona Sadar',
        'Nilphamari Sadar', 'Noakhali Sadar', 'Pabna Sadar', 'Panchagarh Sadar', 'Patuakhali Sadar', 'Pirojpur Sadar',
        'Rajbari Sadar', 'Rajshahi Sadar', 'Rangamati Sadar', 'Rangpur Sadar', 'Satkhira Sadar', 'Shariatpur Sadar',
        'Sherpur Sadar', 'Sirajganj Sadar', 'Sunamganj Sadar', 'Sylhet Sadar', 'Tangail Sadar', 'Thakurgaon Sadar',
        'Ullahpara', 'Akhaura', 'Anwara', 'Baliadangi', 'Baliakandi', 'Bamna', 'Bancharampur', 'Banglabazar', 'Banshkhali',
        'Betagi', 'Bhanga', 'Bholahat', 'Chandraganj', 'Char Fasson', 'Chatkhil', 'Chaugachha', 'Chirirbandar', 'Dakop',
        'Damudya', 'Dashmina', 'Dhamrai', 'Dhanbari', 'Dhunat', 'Dighinala', 'Gangni', 'Ghoraghat', 'Gobindaganj',
        'Gomastapur', 'Hathazari', 'Homna', 'Hossainpur', 'Ishwarganj', 'Itna', 'Jaintiapur', 'Jaldhaka', 'Kalai',
        'Kalapara', 'Kamalapur', 'Kamarkhanda', 'Kanaighat', 'Kawnia', 'Kazipur', 'Kendua', 'Keraniganj', 'Khaliajuri',
        'Khetlal', 'Khoksa', 'Kotalipara', 'Kutubdia', 'Lalmohan', 'Langadu', 'Lohagara', 'Madan', 'Magura Sadar',
        'Maheshkhali', 'Maheshpur', 'Mathbaria', 'Matiranga', 'Mirsharai', 'Mohalchhari', 'Moheshkhali', 'Muksudpur',
        'Nabiganj', 'Nagarpur', 'Nalitabari', 'Nandail', 'Naniarchar', 'Nawabganj', 'Nesarabad', 'Niamatpur',
        'Nikhli', 'Parbatipur', 'Patharghata', 'Pekua', 'Porsha', 'Raninagar', 'Ruma', 'Rupganj', 'Rupsha', 'Sadullapur',
        'Saidpur', 'Shahjadpur', 'Shibganj', 'Shyamnagar', 'Sonatola', 'South Surma', 'Subarnachar', 'Sujanagar', 'Tahirpur',
        'Tarail', 'Tarash', 'Teknaf', 'Tentulia', 'Titas', 'Tongibari', 'Zajira'
    ];

    const districts = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barishal",
        "Bhola",
        "Bogura",
        "Brahmanbaria",
        "Chandpur",
        "Chattogram",
        "Chuadanga",
        "Cox's Bazar",
        "Cumilla",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jashore",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];

    return (
        <div>

            <SignUp districts={districts} upazilas={upazilas}>

            </SignUp>

        </div>
    );
};

export default District_Upazila;