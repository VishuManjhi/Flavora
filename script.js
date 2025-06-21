// Database operations
const appSlug = 'flavora-app';
let userId = localStorage.getItem('userId') || 'user-' + Date.now();
localStorage.setItem('userId', userId);

// City data
const cityData = {
    lucknow: {
        name: 'Lucknow',
        image: 'rumi darwaza.jpg',
        dishes: [
            {
                name: 'Deva Kebab Paratha',
                type: 'veg',
                image: 'kaathi roll.jpg',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Sharma ki chai',
                type: 'veg',
                image: 'chai.jpg',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Tunday Kebab',
                type: 'non-veg',
                image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Idrees ki Biryani', 
                type: 'non-veg',
                image: 'idrees.jpg',
                rating: 4.9,
                location: 'ganj'
            },
            {
                name: 'Malai Makhan,Chowk',
                type: 'sweet',
                image: 'makkhan malai.jpg',
                rating: 4.5,
                location: 'ganj'
            }
        ]
    },
    kanpur: {
        name: 'Kanpur',
        image: 'blue.jpg',
        dishes: [
            {
                name: 'Thagu ke laddoo',
                type: 'veg',
                image: 'laddoo.jpg',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Bajpai Ke Chole Bhaturee',
                type: 'spicy',
                image: 'chhole.jpg',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Shri Bholenath Chaat House',
                type: 'veg',
                image: 'kanpur chaat.jpg',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Shri Kachori Bhandar',
                type: 'veg',
                image: 'kachori.jpg',
                rating: 4.9,
                location: 'ganj'
            },
            {
                name: 'Prakash Sweets and Namkeen',
                type: 'sweet',
                image: 'jaelbi.jpg',
                rating: 4.6,
                location: 'ganj'
            }
        ]
    },
    varanasi: {
        name: 'Varanasi',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80',
        dishes: [
            {
                name: 'Pehlwan Lassi',
                type: 'sweet',
                image: 'lassi.jpg',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Vada Pav',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Pav Bhaji',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Bhel Puri',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.6,
                location: 'ganj'
            }
        ]
    },
    prayagraj: {
        name: 'Prayagraj',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80',
        dishes: [
            {
                name: 'Vada Pav',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Pav Bhaji',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Bhel Puri',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.6,
                location: 'ganj'
            }
        ]
    },
    agra: {
        name: 'Agra',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80',
        dishes: [
            {
                name: 'Vada Pav',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Pav Bhaji',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Bhel Puri',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.6,
                location: 'ganj'
            }
        ]
    },
    mathura: {
        name: 'Mathura',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80',
        dishes: [
            {
                name: 'Vada Pav',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.8,
                location: 'ganj'
            },
            {
                name: 'Pav Bhaji',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80',
                rating: 4.7,
                location: 'ganj'
            },
            {
                name: 'Bhel Puri',
                type: 'veg',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
                rating: 4.6,
                location: 'ganj'
            }
        ]
    }
};

// UI Functions
function showSection(section) {
    document.querySelectorAll('#landing, #login, #signup, #main').forEach(el => el.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

function toggleDropdown() {
    document.getElementById('dropdown').classList.toggle('hidden');
}

function logout() {
    showSection('landing');
    showToast('Logged out successfully');
}

function showCityDetails(city) {
    const cityInfo = cityData[city];
    document.getElementById('main').classList.add('hidden');
    document.getElementById('cityDetails').classList.remove('hidden');
    document.getElementById('cityHeroImage').src = cityInfo.image;
    document.getElementById('cityName').textContent = cityInfo.name;
    displayDishes(cityInfo.dishes);
}

function backToMain() {
    document.getElementById('cityDetails').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
}

function displayDishes(dishes, filter = 'all') {
    const container = document.getElementById('foodItems');
    container.innerHTML = '';
    
    dishes.filter(dish => filter === 'all' || dish.type === filter).forEach(dish => {
        container.innerHTML += `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="text-xl font-bold">${dish.name}</h4>
                        <span class="text-yellow-400">
                            <i class="bi bi-star-fill"></i> ${dish.rating}
                        </span>
                    </div>
                    <span class="inline-block px-2 py-1 rounded-full text-sm ${dish.type === 'veg' || dish.type === 'sweet' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${dish.type}
                    </span>
                </div>
            </div>
        `;
    });
}

function filterDishes(type) {
    const cityName = document.getElementById('cityName').textContent.toLowerCase();
    displayDishes(cityData[cityName].dishes, type);
}

function showAddLocation() {
    document.getElementById('addLocation').classList.remove('hidden');
}

function hideAddLocation() {
    document.getElementById('addLocation').classList.add('hidden');
}

// Event Listeners
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    showSection('main');
    showToast('Logged in successfully');
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    showSection('main');
    showToast('Account created successfully');
});

document.getElementById('addLocationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAddLocation();
    showToast('Location added successfully');
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach(card => {
        const cityName = card.querySelector('h4').textContent.toLowerCase();
        card.style.display = cityName.includes(searchTerm) ? 'block' : 'none';
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
        document.getElementById('dropdown').classList.add('hidden');
    }
});
