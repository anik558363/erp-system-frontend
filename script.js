// Initialize Lucide Icons
lucide.createIcons();

// Mobile Sidebar Toggle Logic (Common for all pages)
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        sidebarBackdrop.classList.toggle('show');
    });

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => {
            sidebar.classList.remove('show');
            sidebarBackdrop.classList.remove('show');
        });
    }
}


// Fast Order Modal Logic and Step Navigation

let currentStep = 2; // Starting directly at Step 2 (Products) like in your screenshot

function changeStep(direction) {
    currentStep += direction;
    if (currentStep < 1) currentStep = 1;
    if (currentStep > 3) currentStep = 3;

    updateStepView();
}

function updateStepView() {
    document.getElementById('orderStep1').classList.add('d-none');
    document.getElementById('orderStep2').classList.add('d-none');
    document.getElementById('orderStep3').classList.add('d-none');

    document.getElementById(`orderStep${currentStep}`).classList.remove('d-none');

    // Indicators
    document.getElementById('stepIndicator1').className = currentStep === 1 ? 'badge bg-emerald px-2 py-1' : 'badge bg-secondary px-2 py-1';
    document.getElementById('stepIndicator2').className = currentStep === 2 ? 'badge bg-emerald px-2 py-1' : 'badge bg-secondary px-2 py-1';
    document.getElementById('stepIndicator3').className = currentStep === 3 ? 'badge bg-emerald px-2 py-1' : 'badge bg-secondary px-2 py-1';

    // Buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (currentStep === 1) {
        prevBtn.classList.add('d-none');
        nextBtn.classList.remove('d-none');
        nextBtn.innerText = 'Next: Products →';
        submitBtn.classList.add('d-none');
    } else if (currentStep === 2) {
        prevBtn.classList.remove('d-none');
        nextBtn.classList.remove('d-none');
        nextBtn.innerText = 'Next: Review Order (1) →';
        submitBtn.classList.add('d-none');
    } else if (currentStep === 3) {
        prevBtn.classList.remove('d-none');
        nextBtn.classList.add('d-none');
        submitBtn.classList.remove('d-none');
    }
}

function submitOrder() {
    // Hide steps and show success alert
    document.getElementById('orderStep3').classList.add('d-none');
    document.getElementById('orderSuccessAlert').classList.remove('d-none');
    document.getElementById('prevBtn').classList.add('d-none');
    document.getElementById('submitBtn').classList.add('d-none');
    document.getElementById('modalTotalText').classList.add('d-none');

    // Auto close modal after 2 seconds
    setTimeout(() => {
        let modalEl = document.getElementById('fastOrderModal');
        let modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        location.reload(); // Refresh to reset state
    }, 2000);
}



// Mock Database for Salesmen
const salesmenData = [
    {
        name: "Rafiqul Islam",
        id: "user-sales-1",
        route: "Dhanmondi & Mohammadpur",
        phone: "01811-223344",
        joined: "2021-05-10",
        email: "rafiqul@noorsupermart.com",
        avatar: "R",
        avatarColor: "bg-emerald",
        stores: 0,
        orders: 0,
        ordersAmount: "৳0",
        collection: "৳0",
        sales: "৳0",
        salesCount: "0 orders total",
        returns: "৳0",
        netSales: "৳0",
        due: "৳0",
        dueShops: "0 shops due",
        tabsData: [
            { name: "Due Summary by Shop", count: 0, type: "due", rows: [] },
            { name: "Assigned Customer Directory", count: 0, type: "customers", rows: [] },
            { name: "Order History", count: 0, type: "orders", rows: [] },
            { name: "Collection History", count: 0, type: "collections", rows: [] },
            { name: "Return History", count: 0, type: "returns", rows: [] }
        ]
    },
    {
        name: "Tariqul Alam",
        id: "user-sales-2",
        route: "Mirpur & Uttara",
        phone: "01622-445566",
        joined: "2022-09-10",
        email: "tariqul@noorsupermart.com",
        avatar: "T",
        avatarColor: "bg-primary",
        stores: 1,
        orders: 8,
        ordersAmount: "৳20",
        collection: "৳0",
        sales: "৳32",
        salesCount: "9 orders total",
        returns: "৳0",
        netSales: "৳32",
        due: "৳0",
        dueShops: "1 shops due",
        tabsData: [
            {
                name: "Due Summary by Shop",
                count: 1,
                type: "due",
                rows: [
                    { code: "NSM-CUST-1001", shop: "test", proprietor: "test", area: "Dhanmondi", limit: "৳50,000", lastOrder: "2026-11-03", due: "৳0" }
                ]
            },
            {
                name: "Assigned Customer Directory",
                count: 1,
                type: "customers",
                rows: [
                    { code: "NSM-CUST-1001", shop: "test", proprietor: "test", phone: "01931654590", area: "Dhanmondi", status: "ACTIVE" }
                ]
            },
            {
                name: "Order History",
                count: 9,
                type: "orders",
                rows: [
                    { orderNo: "ORD-9021", date: "2026-11-03", shop: "test", items: "test (1 Bag)", total: "৳2", status: "DELIVERED" },
                    { orderNo: "ORD-9020", date: "2026-11-02", shop: "test", items: "fasdf (5 Box)", total: "৳30", status: "DELIVERED" }
                ]
            },
            { name: "Collection History", count: 0, type: "collections", rows: [] },
            { name: "Return History", count: 0, type: "returns", rows: [] }
        ]
    },
    {
        name: "Md. Mizanur Rahman (মিজান)",
        id: "user-sales-mizan",
        route: "Gulshan & Badda Route",
        phone: "01712-445588",
        joined: "2022-01-15",
        email: "mizan@noorsupermart.com",
        avatar: "M",
        avatarColor: "bg-warning",
        stores: 0,
        orders: 0,
        ordersAmount: "৳0",
        collection: "৳0",
        sales: "৳0",
        salesCount: "0 orders total",
        returns: "৳0",
        netSales: "৳0",
        due: "৳0",
        dueShops: "0 shops due",
        tabsData: [
            { name: "Due Summary by Shop", count: 0, type: "due", rows: [] },
            { name: "Assigned Customer Directory", count: 0, type: "customers", rows: [] },
            { name: "Order History", count: 0, type: "orders", rows: [] },
            { name: "Collection History", count: 0, type: "collections", rows: [] },
            { name: "Return History", count: 0, type: "returns", rows: [] }
        ]
    }
];

let currentSalesmanIndex = 1; // Default to Tariqul Alam
let currentActiveTab = 0;

function selectSalesman(index, btnElement) {
    currentSalesmanIndex = index;

    // Update Salesman Buttons Active State
    let btns = document.querySelectorAll('.salesman-btn');
    btns.forEach(b => {
        b.classList.remove('btn-dark', 'text-white', 'shadow-xs', 'active-salesman');
        b.classList.add('btn-light', 'border', 'text-secondary');
    });
    btnElement.classList.remove('btn-light', 'border', 'text-secondary');
    btnElement.classList.add('btn-dark', 'text-white', 'shadow-xs', 'active-salesman');

    renderSalesmanData();
}

function renderSalesmanData() {
    const data = salesmenData[currentSalesmanIndex];

    // Render Profile Card
    document.getElementById('salesmanAvatar').innerText = data.name.charAt(0);
    document.getElementById('salesmanAvatar').className = `${data.avatarColor} text-white fw-bold rounded d-flex align-items-center justify-content-center font-mono`;
    document.getElementById('salesmanName').innerText = data.name;
    document.getElementById('salesmanId').innerText = `ID: ${data.id}`;
    document.getElementById('salesmanPhone').innerText = data.phone;
    document.getElementById('salesmanRoute').innerText = data.route;
    document.getElementById('salesmanJoined').innerText = `Joined: ${data.joined} | Email: ${data.email}`;
    document.getElementById('salesmanStores').innerHTML = `${data.stores} <span class="fw-normal text-muted fs-6">Shops</span>`;

    // Render Metrics
    document.getElementById('metricOrders').innerText = data.orders;
    document.getElementById('metricOrdersAmount').innerText = data.ordersAmount;
    document.getElementById('metricCollection').innerText = data.collection;
    document.getElementById('metricSales').innerText = data.sales;
    document.getElementById('metricSalesCount').innerText = data.salesCount;
    document.getElementById('metricReturns').innerText = data.returns;
    document.getElementById('metricNetSales').innerText = data.netSales;
    document.getElementById('metricDue').innerText = data.due;
    document.getElementById('metricDueShops').innerText = data.dueShops;

    // Render Tabs & Content
    renderTabs();
    renderTableContent();
}

function renderTabs() {
    const data = salesmenData[currentSalesmanIndex];
    const container = document.getElementById('tabContainer');
    container.innerHTML = '';

    data.tabsData.forEach((tab, idx) => {
        let isActive = idx === currentActiveTab;
        let btnClass = isActive ? 'btn-dark text-white fw-semibold bg-dark shadow-xs' : 'btn-light border text-secondary fw-medium';

        container.innerHTML += `
                    <button class="salesman-tab btn btn-sm ${btnClass} px-3 py-2" onclick="switchTab(${idx}, this)">
                        ${tab.name} (${tab.count})
                    </button>
                `;
    });
}

function switchTab(index, btnElement) {
    currentActiveTab = index;

    let tabs = document.querySelectorAll('.salesman-tab');
    tabs.forEach(t => {
        t.classList.remove('btn-dark', 'text-white', 'fw-semibold', 'bg-dark', 'shadow-xs');
        t.classList.add('btn-light', 'border', 'text-secondary', 'fw-medium');
    });

    btnElement.classList.remove('btn-light', 'border', 'text-secondary', 'fw-medium');
    btnElement.classList.add('btn-dark', 'text-white', 'fw-semibold', 'bg-dark', 'shadow-xs');

    renderTableContent();
}

function renderTableContent() {
    const data = salesmenData[currentSalesmanIndex];
    const tabObj = data.tabsData[currentActiveTab];
    const container = document.getElementById('tableContainer');

    if (tabObj.rows.length === 0) {
        container.innerHTML = `
                    <div class="card-body p-5 text-center text-muted small">
                        No data found.
                    </div>
                `;
        return;
    }

    // Render based on tab type
    if (tabObj.type === 'due') {
        let rowsHtml = tabObj.rows.map(r => `
                    <tr>
                        <td class="fw-semibold font-mono text-dark">${r.code}</td>
                        <td class="fw-medium text-dark">${r.shop}</td>
                        <td>${r.proprietor}</td>
                        <td>${r.area}</td>
                        <td class="font-mono">${r.limit}</td>
                        <td class="text-muted">${r.lastOrder}</td>
                        <td class="text-end fw-bold text-danger font-mono">${r.due}</td>
                    </tr>
                `).join('');

        container.innerHTML = `
                    <div class="table-responsive">
                        <table class="table align-middle mb-0 custom-table">
                            <thead class="table-light">
                                <tr>
                                    <th>Customer Code</th>
                                    <th>Shop Name</th>
                                    <th>Proprietor</th>
                                    <th>Area</th>
                                    <th>Credit Limit</th>
                                    <th>Last Order</th>
                                    <th class="text-end">Current Due (৳)</th>
                                </tr>
                            </thead>
                            <tbody>${rowsHtml}</tbody>
                        </table>
                    </div>
                `;
    } else if (tabObj.type === 'customers') {
        let rowsHtml = tabObj.rows.map(r => `
                    <tr>
                        <td class="fw-semibold font-mono text-dark">${r.code}</td>
                        <td class="fw-medium text-dark">${r.shop}</td>
                        <td>${r.proprietor}</td>
                        <td>${r.phone}</td>
                        <td>${r.area}</td>
                        <td class="text-center"><span class="badge bg-emerald-subtle text-emerald border">${r.status}</span></td>
                    </tr>
                `).join('');

        container.innerHTML = `
                    <div class="table-responsive">
                        <table class="table align-middle mb-0 custom-table">
                            <thead class="table-light">
                                <tr>
                                    <th>Customer Code</th>
                                    <th>Shop Name</th>
                                    <th>Proprietor</th>
                                    <th>Mobile Phone</th>
                                    <th>Area</th>
                                    <th class="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>${rowsHtml}</tbody>
                        </table>
                    </div>
                `;
    } else if (tabObj.type === 'orders') {
        let rowsHtml = tabObj.rows.map(r => `
                    <tr>
                        <td class="fw-semibold font-mono text-dark">${r.orderNo}</td>
                        <td class="text-muted">${r.date}</td>
                        <td class="fw-medium text-dark">${r.shop}</td>
                        <td><span class="badge bg-light text-dark border">${r.items}</span></td>
                        <td class="text-end fw-bold font-mono">${r.total}</td>
                        <td class="text-center"><span class="badge bg-success-subtle text-success border">${r.status}</span></td>
                    </tr>
                `).join('');

        container.innerHTML = `
                    <div class="table-responsive">
                        <table class="table align-middle mb-0 custom-table">
                            <thead class="table-light">
                                <tr>
                                    <th>Order #</th>
                                    <th>Date</th>
                                    <th>Shop Name</th>
                                    <th>Items Summary</th>
                                    <th class="text-end">Total (৳)</th>
                                    <th class="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>${rowsHtml}</tbody>
                        </table>
                    </div>
                `;
    } else {
        container.innerHTML = `
                    <div class="card-body p-5 text-center text-muted small">
                        No data found.
                    </div>
                `;
    }
}

// Initial Load
window.onload = function () {
    renderSalesmanData();
};
