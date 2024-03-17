const countryList = [
  "Adilabad",
  "Anantapur",
  "Chittoor",
  "Kakinada",
  "Guntur",
  "Hyderabad",
  "Karimnagar",
  "Khammam",
  "Krishna",
  "Kurnool",
  "Mahbubnagar",
  "Medak",
  "Nalgonda",
  "Nizamabad",
  "Ongole",
  "Hyderabad",
  "Srikakulam",
  "Nellore",
  "Visakhapatnam",
  "Vizianagaram",
  "Warangal",
  "Eluru",
  "Kadapa",
  "Anjaw",
  "Changlang",
  "East Siang",
  "Kurung Kumey",
  "Lohit",
  "Lower Dibang Valley",
  "Lower Subansiri",
  "Papum Pare",
  "Tawang",
  "Tirap",
  "Dibang Valley",
  "Upper Siang",
  "Upper Subansiri",
  "West Kameng",
  "West Siang",
  "Baksa",
  "Barpeta",
  "Bongaigaon",
  "Cachar",
  "Chirang",
  "Darrang",
  "Dhemaji",
  "Dima Hasao",
  "Dhubri",
  "Dibrugarh",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Jorhat",
  "Kamrup",
  "Kamrup Metropolitan",
  "Karbi Anglong",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Marigaon",
  "Nagaon",
  "Nalbari",
  "Sibsagar",
  "Sonitpur",
  "Tinsukia",
  "Udalguri",
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran",
  "Chandigarh",
  "Bastar",
  "Bijapur",
  "Bilaspur",
  "Dantewada",
  "Dhamtari",
  "Durg",
  "Jashpur",
  "Janjgir-Champa",
  "Korba",
  "Koriya",
  "Kanker",
  "Kabirdham (Kawardha)",
  "Mahasamund",
  "Narayanpur",
  "Raigarh",
  "Rajnandgaon",
  "Raipur",
  "Surguja",
  "Central Delhi",
  "East Delhi",
  "New Delhi",
  "North Delhi",
  "North East Delhi",
  "North West Delhi",
  "South Delhi",
  "South West Delhi",
  "West Delhi",
  "Ahmedabad",
  "Amreli district",
  "Anand",
  "Banaskantha",
  "Bharuch",
  "Bhavnagar",
  "Dahod",
  "The Dangs",
  "Gandhinagar",
  "Jamnagar",
  "Junagadh",
  "Kutch",
  "Kheda",
  "Mehsana",
  "Narmada",
  "Navsari",
  "Patan",
  "Panchmahal",
  "Porbandar",
  "Rajkot",
  "Sabarkantha",
  "Surendranagar",
  "Surat",
  "Vyara",
  "Vadodara",
  "Valsad",
  "Ambala",
  "Bhiwani",
  "Faridabad",
  "Fatehabad",
  "Gurgaon",
  "Hissar",
  "Jhajjar",
  "Jind",
  "Karnal",
  "Kaithal",
  "Kurukshetra",
  "Mahendragarh",
  "Mewat",
  "Palwal",
  "Panchkula",
  "Panipat",
  "Rewari",
  "Rohtak",
  "Sirsa",
  "Sonipat",
  "Yamuna Nagar",
  "Bilaspur",
  "Chamba",
  "Hamirpur",
  "Kangra",
  "Kinnaur",
  "Kullu",
  "Lahaul and Spiti",
  "Mandi",
  "Shimla",
  "Sirmaur",
  "Solan",
  "Una",
  "Anantnag",
  "Badgam",
  "Bandipora",
  "Baramulla",
  "Doda",
  "Ganderbal",
  "Jammu",
  "Kargil",
  "Kathua",
  "Kishtwar",
  "Kupwara",
  "Kulgam",
  "Leh",
  "Poonch",
  "Pulwama",
  "Rajauri",
  "Ramban",
  "Reasi",
  "Samba",
  "Shopian",
  "Srinagar",
  "Udhampur",
  "Bokaro",
  "Chatra",
  "Deoghar",
  "Dhanbad",
  "Dumka",
  "East Singhbhum",
  "Garhwa",
  "Giridih",
  "Godda",
  "Gumla",
  "Hazaribag",
  "Jamtara",
  "Khunti",
  "Koderma",
  "Latehar",
  "Lohardaga",
  "Pakur",
  "Palamu",
  "Ramgarh",
  "Ranchi",
  "Sahibganj",
  "Seraikela Kharsawan",
  "Simdega",
  "West Singhbhum",
  "Bagalkot",
  "Bangalore Rural",
  "Bangalore Urban",
  "Belgaum",
  "Bellary",
  "Bidar",
  "Bijapur",
  "Chamarajnagar",
  "Chikkamagaluru",
  "Chikkaballapur",
  "Chitradurga",
  "Davanagere",
  "Dharwad",
  "Dakshina Kannada",
  "Gadag",
  "Gulbarga",
  "Hassan",
  "Haveri district",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysore",
  "Raichur",
  "Shimoga",
  "Tumkur",
  "Udupi",
  "Uttara Kannada",
  "Ramanagara",
  "Yadgir",
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thrissur",
  "Thiruvananthapuram",
  "Wayanad",
  "Alirajpur",
  "Anuppur",
  "Ashok Nagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Hoshangabad",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa (East Nimar)",
  "Khargone (West Nimar)",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narsinghpur",
  "Neemuch",
  "Panna",
  "Rewa",
  "Rajgarh",
  "Ratlam",
  "Raisen",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha",
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Bhandara",
  "Beed",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalgaon",
  "Jalna",
  "Kolhapur",
  "Latur",
  "Mumbai City",
  "Mumbai suburban",
  "Nandurbar",
  "Nanded",
  "Nagpur",
  "Nashik",
  "Osmanabad",
  "Parbhani",
  "Pune",
  "Raigad",
  "Ratnagiri",
  "Sindhudurg",
  "Sangli",
  "Solapur",
  "Satara",
  "Thane",
  "Wardha",
  "Washim",
  "Yavatmal",
  "Bishnupur",
  "Churachandpur",
  "Chandel",
  "Imphal East",
  "Senapati",
  "Tamenglong",
  "Thoubal",
  "Ukhrul",
  "Imphal West",
  "Angul",
  "Boudh (Bauda)",
  "Bhadrak",
  "Balangir",
  "Bargarh (Baragarh)",
  "Balasore",
  "Cuttack",
  "Debagarh (Deogarh)",
  "Dhenkanal",
  "Ganjam",
  "Gajapati",
  "Jharsuguda",
  "Jajpur",
  "Jagatsinghpur",
  "Khordha",
  "Kendujhar (Keonjhar)",
  "Kalahandi",
  "Kandhamal",
  "Koraput",
  "Kendrapara",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nuapada",
  "Nayagarh",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Subarnapur (Sonepur)",
  "Sundergarh",
  "Amritsar",
  "Barnala",
  "Bathinda",
  "Firozpur",
  "Faridkot",
  "Fatehgarh Sahib",
  "Fazilka",
  "Gurdaspur",
  "Hoshiarpur",
  "Jalandhar",
  "Kapurthala",
  "Ludhiana",
  "Mansa",
  "Moga",
  "Sri Muktsar Sahib",
  "Pathankot",
  "Patiala",
  "Rupnagar",
  "Mohali",
  "Sangrur",
  "Nawanshahr",
  "Tarn Taran",
  "Ajmer",
  "Alwar",
  "Bikaner",
  "Barmer",
  "Banswara",
  "Bharatpur",
  "Baran",
  "Bundi",
  "Bhilwara",
  "Churu",
  "Chittorgarh",
  "Dausa",
  "Dholpur",
  "Dungapur",
  "Ganganagar",
  "Hanumangarh",
  "Jhunjhunu",
  "Jalore",
  "Jodhpur",
  "Jaipur",
  "Jaisalmer",
  "Jhalawar",
  "Karauli",
  "Kota",
  "Nagaur",
  "Pali",
  "Pratapgarh",
  "Rajsamand",
  "Sikar",
  "Sawai Madhopur",
  "Sirohi",
  "Tonk",
  "Udaipur",
  "Ariyalur",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Madurai",
  "Nagapattinam",
  "Nilgiris",
  "Namakkal",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Salem",
  "Sivaganga",
  "Tirupur",
  "Tiruchirappalli",
  "Theni",
  "Tirunelveli",
  "Thanjavur",
  "Thoothukudi",
  "Tiruvallur",
  "Tiruvarur",
  "Tiruvannamalai",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Agra",
  "Allahabad",
  "Aligarh",
  "Ambedkar Nagar",
  "Auraiya",
  "Azamgarh",
  "Barabanki",
  "Budaun",
  "Bagpat",
  "Bahraich",
  "Bijnor",
  "Ballia",
  "Banda",
  "Balrampur",
  "Bareilly",
  "Basti",
  "Bulandshahr",
  "Chandauli",
  "Chhatrapati Shahuji Maharaj Nagar",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Kanshi Ram Nagar",
  "Etawah",
  "Firozabad",
  "Farrukhabad",
  "Fatehpur",
  "Faizabad",
  "Gautam Buddh Nagar",
  "Gonda",
  "Ghazipur",
  "Gorakhpur",
  "Ghaziabad",
  "Hamirpur",
  "Hardoi",
  "Mahamaya Nagar",
  "Jhansi",
  "Jalaun",
  "Jyotiba Phule Nagar",
  "Jaunpur district",
  "Ramabai Nagar (Kanpur Dehat)",
  "Kannauj",
  "Kanpur",
  "Kaushambi",
  "Kushinagar",
  "Lalitpur",
  "Lakhimpur Kheri",
  "Lucknow",
  "Mau",
  "Meerut",
  "Maharajganj",
  "Mahoba",
  "Mirzapur",
  "Moradabad",
  "Mainpuri",
  "Mathura",
  "Muzaffarnagar",
  "Panchsheel Nagar district (Hapur)",
  "Pilibhit",
  "Shamli",
  "Pratapgarh",
  "Rampur",
  "Raebareli",
  "Saharanpur",
  "Sitapur",
  "Shahjahanpur",
  "Sant Kabir Nagar",
  "Siddharthnagar",
  "Sonbhadra",
  "Sant Ravidas Nagar",
  "Sultanpur",
  "Shravasti",
  "Unnao",
  "Varanasi",
  "Almora",
  "Bageshwar",
  "Chamoli",
  "Champawat",
  "Dehradun",
  "Haridwar",
  "Nainital",
  "Pauri Garhwal",
  "Pithoragarh",
  "Rudraprayag",
  "Tehri Garhwal",
  "Udham Singh Nagar",
  "Uttarkashi",
  "Birbhum",
  "Bankura",
  "Bardhaman",
  "Darjeeling",
  "Dakshin Dinajpur",
  "Hooghly",
  "Howrah",
  "Jalpaiguri",
  "Cooch Behar",
  "Kolkata",
  "Maldah",
  "Paschim Medinipur",
  "Purba Medinipur",
  "Murshidabad",
  "Nadia",
  "North 24 Parganas",
  "South 24 Parganas",
  "Purulia",
  "Uttar Dinajpur",
];

let locatebtn = document.querySelector(".Auto-location-btn")

const InputHelper = document.querySelector(".input-helper");
const Input = document.querySelector(".input");
const InputCreater = document.createElement("div");
const tempInput = document.createElement("input");
const tempsuggetion1 = document.createElement("button");
tempsuggetion1.setAttribute("class", "tempbtn");
tempsuggetion1.setAttribute("id", "tempbtn1");
tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");
const tempsuggetion2 = document.createElement("button");
tempsuggetion2.setAttribute("class", "tempbtn");
tempsuggetion2.setAttribute("id", "tempbtn2");
const tempsuggetion3 = document.createElement("button");
tempsuggetion3.setAttribute("class", "tempbtn");
tempsuggetion3.setAttribute("id", "tempbtn3");
const tempsuggetion4 = document.createElement("button");
tempsuggetion4.setAttribute("id", "tempbtn4");
tempsuggetion4.setAttribute("class", "tempbtn");
const tempsuggetion5 = document.createElement("button");
tempsuggetion5.setAttribute("class", "tempbtn");
tempsuggetion5.setAttribute("id", "tempbtn5");
InputCreater.setAttribute("class", "inputcreator");
tempInput.setAttribute("class", "tempInput");
tempInput.setAttribute("keypress", "tempInput");



let temparray = [
  tempsuggetion1,
  tempsuggetion2,
  tempsuggetion3,
  tempsuggetion4,
  tempsuggetion5,
];

InputCreater.appendChild(tempInput);

for (let i = 0; i < 5; i++) {
  InputCreater.appendChild(temparray[i]);
}

function getinginput() {
  Input.style.visibility = "hidden";

  InputHelper.appendChild(InputCreater);
}

tempInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  } else {
    providesugestor(tempInput.value);
  }
});

function providesugestor(v) {

  let value = v.toLowerCase();

  let numofterm = 0;
  let valueNo = value.length;
  let Index = [];

  for (let i = 0; i < countryList.length; i++) {
    let tempt = countryList[i].slice(0, valueNo).toLowerCase();

    if (tempt == value) {
      Index[numofterm] = countryList[i];
      numofterm++;
    }
  }
  console.log(Index);

  sugestiongiver(Index);
  // let numberofkey = 0;
  // let numofkeyvalue = [];

  //   for (let i = 0; i < countryList.length; i++) {
  //     if (countryList[i].match(tempInput.value)) {
  //       numofkeyvalue[i] = countryList[i].match(tempInput.value)
  //     }
  //     numofkeyvalue[i] = countryList[i].match(tempInput.value)
  //     // if (countryList[i].charAt(0) == key.toUpperCase()) {
  //     //   numofkeyvalue[numberofkey] = i;
  //     //   numberofkey ++;
  //     // }
  //   }
  //   console.log(numofkeyvalue)
  //   // if(numberofkey > 5){
  //   //   for (let index = 0; index <5; index++) {
  //   //     let tempelmnt = document.querySelector(`#tempbtn${index}`)

  //   //     tempsuggetion1.textContent = `${countryList[numofkeyvalue[index]]}`;

  //   //   }
  //   // }
}

function sugestiongiver(Index) {
  console.log(InputHelper);
  if (Index.length >= 5) {
    tempsuggetion1.textContent = Index[0];
    tempsuggetion2.textContent = Index[1];
    tempsuggetion3.textContent = Index[2];
    tempsuggetion4.textContent = Index[3];
    tempsuggetion5.textContent = Index[4];
    tempsuggetion2.style.display = null;
    tempsuggetion3.style.display = null;
    tempsuggetion4.style.display = null;
    tempsuggetion5.style.display = null;
    tempsuggetion1.setAttribute("id", "tempbtn1");
    tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");
    InputCreater.style.height = "41.5vh";
  } else if (Index.length == 4) {
    tempsuggetion1.textContent = Index[0];
    tempsuggetion2.textContent = Index[1];
    tempsuggetion3.textContent = Index[2];
    tempsuggetion4.textContent = Index[3];
    tempsuggetion2.style.display = null;
    tempsuggetion3.style.display = null;
    tempsuggetion4.style.display = null;
    tempsuggetion5.style.display = "none";
    tempsuggetion1.setAttribute("id", "tempbtn1");
    tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");
    InputCreater.style.height = "calc(41.5vh - 6.5vh)";
  } else if (Index.length == 3) {
    tempsuggetion1.textContent = Index[0];
    tempsuggetion2.textContent = Index[1];
    tempsuggetion3.textContent = Index[2];
    tempsuggetion2.style.display = null;
    tempsuggetion3.style.display = null;
    tempsuggetion4.style.display = "none";
    tempsuggetion5.style.display = "none";
    tempsuggetion1.setAttribute("id", "tempbtn1");
    tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");
    InputCreater.style.height = "calc(41.5vh - 13vh)";
  } else if (Index.length == 2) {
    tempsuggetion1.textContent = Index[0];
    tempsuggetion2.textContent = Index[1];
    tempsuggetion2.style.display = null;
    tempsuggetion3.style.display = "none";
    tempsuggetion4.style.display = "none";
    tempsuggetion5.style.display = "none";
    tempsuggetion1.setAttribute("id", "tempbtn1");
    tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");

    InputCreater.style.height = "calc(41.5vh - 19.5vh)";
  } else if (Index.length == 1) {
    tempsuggetion1.textContent = Index[0];
    tempsuggetion2.style.display = "none";
    tempsuggetion3.style.display = "none";
    tempsuggetion4.style.display = "none";
    tempsuggetion5.style.display = "none";
    tempsuggetion1.setAttribute("id", "tempbtn1");
    tempsuggetion1.setAttribute("onclick", "fntempsugeestor(this.id)");
    InputCreater.style.height = "calc(41.5vh - 24.5vh)";
  } else if (Index.length == 0) {
    tempsuggetion1.textContent = "Nothing Found...";
    tempsuggetion2.style.display = "none";
    tempsuggetion3.style.display = "none";
    tempsuggetion4.style.display = "none";
    tempsuggetion5.style.display = "none";
    tempsuggetion1.setAttribute("id", "");
    tempsuggetion1.setAttribute("onclick", "");
    InputCreater.style.height = "calc(41.5vh - 24.5vh)";
    locatebtn.removeAttribute("onclick")
  }
}

function fntempsugeestor(i) {
  alert(`${i}`);
}
