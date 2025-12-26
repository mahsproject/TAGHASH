// Function to switch tabs in the services section
function switchTab(event, targetId) {
    // 1. Remove 'active' class from all Buttons
    const buttons = document.querySelectorAll('.nav-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Add 'active' class to the clicked Button
    event.currentTarget.classList.add('active');

    // 3. Hide all Content Panels
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // 4. Show the target Panel
    const targetPanel = document.getElementById(targetId);
    if(targetPanel) {
        targetPanel.classList.add('active');
    }
}

// Scroll to Contact
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if(contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to generate and download a PDF using jsPDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Formatting
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.setTextColor(26, 35, 126); // Dark Blue
    doc.text("#taghash - Services List", 20, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black
    
    let y = 35; 
    const lineHeight = 6; // Reduced slightly to fit more content
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    
    // Content Data
    const content = [
        "1. FUND SETUP",
        "• Structuring and IM entity setup",
        "• Drafting and Finalizing PPM",
        "• Co-ordinating in appointment of Trustee",
        "• Trust Deed",
        "• Investment Management Agreement",
        "• Register with SEBI: Application to SEBI with all required details",
        "",
        "2. ONE-TIME REGISTRATION",
        "• Review of PPM and contribution agreement from an operational perspective",
        "• KRA Registration",
        "• CKYC Registration",
        "• LEI Registration",
        "• GIIN registration",
        "• PAN for fund and scheme",
        "• TAN for scheme",
        "• Appointment of RTA",
        "• Appointment of Custodian",
        "• FIU registration",
        "• GST registration if required",
        "• RBI entity master registration for filing Form INVI",
        "• SEBI scores registration",
        "• Setting up the Fund as an issuer with NSDL and CDSL",
        "",
        "3. INVESTOR ONBOARDING",
        "• Co-ordinating the execution of subscription documents",
        "• Dispatch of signed agreements",
        "• Investor KYC procedures",
        "• Updating and maintaining investor database",
        "",
        "4. INVESTOR COMPLIANCE & REPORTING",
        "• Uploading KYC documents in KRA and C-KYC System",
        "• FATCA/CRS compliances",
        "• Co-ordinating the issue of K1s to overseas investors and PFIC analysis",
        "• Issuance of Forms 64C and 16A",
        "• Quarterly reporting (capital account statement and financials)",
        "• Investor transparency reports along with annual audited financial statements",
        "• Inputs for advance tax",
        "",
        "5. CAPITAL CALLS & DISTRIBUTION",
        "• Issuance of call letters/drawdown notices",
        "• Tracking wire transfers and co-ordinating with Trustees",
        "• Co-ordinating with banks for inward foreign remittances",
        "• Follow ups for fund realization",
        "• Computation of distribution as per prescribed methodology",
        "• Handling payouts in close co-ordination with investment manager",
        "• Issuance of distribution letter/notices",
        "",
        "6. INVESTOR-SPECIFIC REQUESTS",
        "• Compliance with side letters",
        "• Unit statements or investment related confirmation as required",
        "• Processing the transfer or transmission of units",
        "• Processing of Institutional Investor Queries",
        "",
        "7. BOOK-KEEPING, MIS & CASHFLOW MANAGEMENT",
        "• Maintaining general ledgers for income & expense items",
        "• Documentation and assistance during fund audits",
        "• Maintain and record portfolio investment activity",
        "• Assistance during scrutiny conducted by any authority",
        "• Monthly MIS on fund performance in agreed format",
        "• Planning capital calls",
        "• Treasury management",
        "• Weekly/monthly fund position reports",
        "",
        "8. FUND ACCOUNTING",
        "• Setting up the chart of accounts and maintenance of Investor MIS",
        "• Drawdown, Investment, Income and Expenses accounting and MIS",
        "• Computation of tax and other levies and generation of related reports",
        "• Prepare Investment, Divestment calculations as per distribution waterfall",
        "• Calculation of Management Fees, Operating and other expenses",
        "• Accounts payable activities",
        "• Preparation of financial statements for audit and management",
        "• Preparation of NAV statement basis valuation",
        "",
        "9. INVESTMENT & VALUATION",
        "• Creating requisite documents and maintaining a database of portfolio companies",
        "• Recording essential documentation and signing off the investment check list",
        "• Co-ordinating the valuation of portfolio investments",
        "• Quarterly collection of KPIs from portfolio companies",
        "",
        "10. FUND COMPLIANCES",
        "• Prepare and file SEBI Quarterly report",
        "• Prepare and Submit CTR to the trustee",
        "• Prepare and submit Benchmarking information to various agencies",
        "• Reporting of foreign investment made in SEBI portal",
        "• Maintaining SEBI complaints register",
        "• Assisting the Investment Manager with adhoc requirements of SEBI",
        "• Coordination and providing required information for PPM audit",
        "• Payment of Stamp duty",
        "• Assist in Annual PPM filing with SEBI",
        "• Preparation and circulation of investor charter if not part of PPM",
        "• Renewal of LEI number on an annual basis",
        "• Assistance in filing income tax returns for the fund",
        "• Monthly and quarterly and TDS compliance",
        "• Filing of Form 64D, Invi, Form DI, Annual return of foreign assets",
        "• Following up with the AD banker on ODI acknowledgement",
        "• Computation of capital gain/loss on investments",
        "• PPM Audit",
        "• SEBI Compliance: Digital Accessibility Circular 2025",
        "",
        "11. FUND REPORTING",
        "• Preparation of Monthly/ Quarterly/Annual financial reports",
        "• Trustee Compliance report",
        "",
        "12. TRUSTEE INTERFACING",
        "• Co-ordinating with the Trustee for all operations",
        "• Preparation of the associated documents",
        "",
        "13. CERTIFICATION & ATTESTATION SERVICES",
        "• CA certificates and statutory attestations",
        "• Form 15CB and remittance-related certifications",
        "• Form 64D certification support",
        "• Coordination with auditors and chartered accountants",
        "• Verification of fund and investor data",
        "• Timely completion aligned with regulatory deadlines",
        "",
        "14. REGULATORY NOTICES & AUTHORITY COORDINATION",
        "• Review and classification of regulatory notices",
        "• Data collation and document compilation",
        "• Coordination with internal teams and advisors",
        "• Information submission support",
        "• Tracking timelines and regulatory follow-ups",
        "• Liaison support with statutory authorities",
        "",
        "15. SEBI APPROVAL FOR ODI INVESTMENTS",
        "• ODI eligibility and compliance assessment",
        "• Preparation of approval-related documentation",
        "• SEBI filing and submission coordination",
        "• Support for disclosures and declarations",
        "• Liaison with custodians and intermediaries",
        "• Monitoring approval status and timelines",
        "",
        "16. INVESTOR ACCREDITATION SUPPORT",
        "• Investor eligibility verification",
        "• Documentation and evidence collection",
        "• Coordination with accreditation agencies",
        "• Process tracking and status updates",
        "• Support for renewals and validity checks",
        "• Seamless integration with onboarding workflow",
        "",
        "17. DIGITAL DISABILITY ASSESSMENT",
        "• Accessibility compliance assessment",
        "• Review against applicable disability standards",
        "• Identification of gaps and improvement areas",
        "• Digital platform usability evaluation",
        "• Compliance documentation support",
        "• Advisory for inclusive digital practices",
        "",
        "18. CYBERSECURITY COMPLIANCE (CSCRF)",
        "• CSCRF compliance readiness assessment",
        "• Identification of cybersecurity gaps",
        "• Documentation and policy support",
        "• Coordination with IT and security teams",
        "• Compliance tracking and reporting support",
        "• Alignment with regulatory cybersecurity requirements"
    ];

    // Loop to add text
    content.forEach(line => {
        if (y + lineHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        const splitText = doc.splitTextToSize(line, 170);
        doc.text(splitText, margin, y);
        y += (lineHeight * splitText.length);
    });

    doc.save("TagHash_Services.pdf");
}

// Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
    const observers = [
        document.querySelector('.hero-content'),
        document.querySelector('.section-header'),
        document.querySelector('.contact-card'),
        document.querySelector('.services-nav'),
        document.querySelector('.services-content-area')
    ];

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    observers.forEach(el => {
        if (el) scrollObserver.observe(el);
    });
});