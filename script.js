
const cars = [
    {
        id: 1,
        name: 'Tesla Model S',
        brand: 'Tesla',
        year: 2024,
        price: '$89,990',
        engine: 'Electric',
        horsepower: '450 HP',
        image: 'images/Tesla Model S.jpeg'
    },
    {
        id: 2,
        name: 'BMW M440i',
        brand: 'BMW',
        year: 2024,
        price: '$78,500',
        engine: 'Turbocharged',
        horsepower: '382 HP',
        image: 'images/BMW M440i.jpeg'
    },
    {
        id: 3,
        name: 'Mercedes AMG C63',
        brand: 'Mercedes',
        year: 2023,
        price: '$85,000',
        engine: 'Twin-Turbo V8',
        horsepower: '503 HP',
        image: 'images/Mercedes AMG C63.jpeg'
    },
    {
        id: 4,
        name: 'Audi RS6 Avant',
        brand: 'Audi',
        year: 2024,
        price: '$110,000',
        engine: 'Twin-Turbo V10',
        horsepower: '592 HP',
        image: 'images/Audi RS6 Avant.jpeg'
    },
    {
        id: 5,
        name: 'Porsche 911 Turbo',
        brand: 'Porsche',
        year: 2023,
        price: '$195,000',
        engine: 'Twin-Turbo Flat-6',
        horsepower: '640 HP',
        image: 'images/Porsche 911 Turbo.jpeg'
    },
    {
        id: 6,
        name: 'Lamborghini Huracan',
        brand: 'Lamborghini',
        year: 2023,
        price: '$250,000',
        engine: 'Naturally Aspirated',
        horsepower: '640 HP',
        image: 'images/Lamborghini Huracan.jpeg'
    },
    {
        id: 7,
        name: 'Ferrari F8 Tributo',
        brand: 'Ferrari',
        year: 2022,
        price: '$280,000',
        engine: 'Twin-Turbo V12',
        horsepower: '710 HP',
        image: 'images/Ferrari F8 Tributo.jpeg'
    },
    {
        id: 8,
        name: 'Jaguar F-Type',
        brand: 'Jaguar',
        year: 2024,
        price: '$61,000',
        engine: 'Supercharged V8',
        horsepower: '575 HP',
        image: 'images/Jaguar F-Type.jpeg'
    },
    {
        id: 9,
        name: 'Chevrolet Corvette',
        brand: 'Chevrolet',
        year: 2024,
        price: '$67,500',
        engine: 'Twin-Turbo V8',
        horsepower: '495 HP',
        image: 'images/Chevrolet Corvette.jpeg'
    }
];

const carGrid = document.getElementById('carGrid');
const searchInput = document.getElementById('searchInput');

// Display all cars
function displayCars(carsToDisplay) {
    carGrid.innerHTML = '';

    if (carsToDisplay.length === 0) {
        carGrid.innerHTML = `
                    <div style="grid-column: 1 / -1;">
                        <div class="empty-state">
                            <div class="empty-state-icon">🔍</div>
                            <h3>No cars found</h3>
                            <p>Try adjusting your search criteria</p>
                        </div>
                    </div>
                `;
        return;
    }

    carsToDisplay.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
                    <div class="car-image">
                        ${car.image ? `<img src="${car.image}" alt="${car.name}" onerror="this.style.display='none'">` : car.name}
                    </div>
                    <div class="car-info">
                        <div class="car-name">${car.name}</div>
                        <div class="car-year">${car.brand} • ${car.year}</div>
                        <div class="car-specs">
                            <div class="spec-item">${car.engine}</div>
                            <div class="spec-item">${car.horsepower}</div>
                        </div>
                        <div class="car-price">${car.price}</div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                `;
        carGrid.appendChild(carCard);
    });
}

// Search functionality
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm) ||
        car.brand.toLowerCase().includes(searchTerm) ||
        car.year.toString().includes(searchTerm)
    );
    displayCars(filteredCars);
});

// Initial display
displayCars(cars);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});