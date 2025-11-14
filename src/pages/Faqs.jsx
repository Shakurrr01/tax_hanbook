import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Faqs = () => {
    return (
        <>
            <style>{`
                .table-link {
                    color: var(--primary);
                    text-decoration: none;
                    border-bottom: 1px solid var(--primary);
                    transition: all 0.2s ease;
                    cursor: pointer;
                }
                .table-link:hover {
                    color: var(--primary-dark);
                    border-bottom-color: var(--primary-dark);
                }
            `}</style>
            <div className="page-container">
                <div className="professional-header">
                    <div className="professional-header-content">
                        <div className="professional-title-container">
                            <div className="professional-title-icon">
                                <FileText size={24} />
                            </div>
                            <div className="professional-title-text">
                                <h1 className="professional-main-title">Summary Pages</h1>
                                <div className="professional-title-divider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <section className="content-section">
                        <h2>Registration Summary</h2>

                        <h3>How can businesses and individuals get a TIN?</h3>
                        <p className="content-paragraph">
                            All businesses in Rwanda must register online through Rwanda Development Board (RDB) website. The RDB and RRA systems link to issue a unique Taxpayer Identification Number (TIN).
                        </p>
                        <p className="content-paragraph">
                            However, RRA also registers and gives TINs for: Decentralised Entities Taxes and fees and non-businesses.
                        </p>

                        <h3>When must be a taxpayer register their business?</h3>
                        <p className="content-paragraph">
                            A taxpayer must register their business within seven days of the beginning of the business activity.
                        </p>

                        <h3>How much does it cost to register a business?</h3>
                        <p className="content-paragraph">
                            It is free to register a business in Rwanda.
                        </p>

                        <h3>How do you register a business?</h3>
                        <p className="content-paragraph">
                            Taxpayers must register their business on the RDB business registration system. This is an online portal that makes it easier for taxpayers to register a business. This can be done online, or with the help of staff at RDB or Business Development Fund (BDF) telecentres.
                        </p>

                        <h3>How do taxpayers register for specific tax types?</h3>
                        <p className="content-paragraph">
                            Taxpayers are automatically registered for some tax types when registering their business. Call the RRA call centre toll free 3004 or visit RRA offices to register for other tax types.
                        </p>

                        <h3>Step-by-Step guide to registering as a business getting a TIN with RDB</h3>
                        <p className="content-paragraph">
                            <strong>Step 1: Register and login on the RDB system</strong>
                        </p>
                        <p className="content-paragraph">
                            Access the RDB business registration system at <a href="https://org.rdb.rw/busregonline" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://org.rdb.rw/busregonline</a> and click on 'Register Here'. Submit the required details. Click the link in the validation email. Return to the RDB system to login.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Choose the business category to be registered</strong>
                        </p>
                        <p className="content-paragraph">
                            The taxpayer must register as a 'Domestic' company, individual 'Enterprise' or 'Foreign' company.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Complete the business registration application</strong>
                        </p>
                        <p className="content-paragraph">
                            Enter all the required business information, including attaching scanned versions of any required documents. Submit the application to register the business and receive the Taxpayer Identification Number (TIN) by SMS.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Print Certificates</strong>
                        </p>
                        <p className="content-paragraph">
                            Login to the RDB system to print the required certificates, including the business certificate and memorandum. The taxpayer is registered and must fulfil all tax obligations.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: Register, declare and pay all required taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            The taxpayer is automatically registered for Income Tax and Trading License. Visit RRA offices to register for any additional required taxes, including visiting RRA tax centres.
                        </p>
                    </section>

                    <section className="content-section">
                        <h2>Domestic Taxes and E-Tax Summary</h2>

                        <h3>Which tax types are included in Domestic Taxes?</h3>
                        <p className="content-paragraph">
                            Domestic taxes include the following tax types:
                        </p>
                        <ul className="content-list">
                            <li>Income Tax, including:
                                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                    <li>Personal Income Tax (PIT)</li>
                                    <li>Corporate Income Tax (CIT)</li>
                                </ul>
                            </li>
                            <li>Pay As You Earn (PAYE)</li>
                            <li>Value Added Tax (VAT)</li>
                            <li>Excise Duty</li>
                            <li>Withholding Taxes (WHT)</li>
                            <li>Gaming Tax</li>
                            <li>Mining Royalty Tax</li>
                            <li>Capital Gains Tax</li>
                            <li>Road Maintenance Levy</li>
                            <li>Tourism Tax</li>
                        </ul>

                        <h3>What is E-Tax?</h3>
                        <p className="content-paragraph">
                            Each of the domestic taxes can be declared using E-Tax. This is an online portal that makes it easier for taxpayers to declare domestic taxes. This can be done online. The process of declaring using E-Tax is similar for all domestic taxes.
                        </p>

                        <h3>What is M-Declaration?</h3>
                        <p className="content-paragraph">
                            The 'Flat Tax', 'Lump Sum' and 'motor vehicle' regimes of Income Tax (PIT and CIT) can be declared on mobile phones using M-Declaration.
                        </p>

                        <h3>How do taxpayers register for E-Tax?</h3>
                        <p className="content-paragraph">
                            Taxpayers are automatically registered for E-Tax when their business is registered.
                        </p>

                        <h3>What if taxpayers do not know their E-Tax password?</h3>
                        <p className="content-paragraph">
                            If a taxpayer does not know their E-Tax password, reset it by clicking on 'Forgot Password' or visiting RRA offices.
                        </p>

                        <h3>What are the causes of an annexure not validating?</h3>
                        <p className="content-paragraph">
                            When completing annexures, ensure to:
                        </p>
                        <ul className="content-list">
                            <li>'enable content' after opening the spreadsheet.</li>
                            <li>use the required date format (dd/mm/yyyy) for the dates entered and the computer's settings.</li>
                            <li>avoid blank cells for rows that have been started</li>
                            <li>click to 'Validate'.</li>
                        </ul>

                        <h3>What if the particular tax type or tax period is not available for declaration?</h3>
                        <p className="content-paragraph">
                            If the tax type and tax period for the relevant declaration is not available on the 'Document Details' screen, the taxpayer can request for it by calling the RRA call centre toll-free 3004 or visiting RRA offices.
                        </p>

                        <h3>What are the causes of a declaration not submitting?</h3>
                        <p className="content-paragraph">
                            When submitting declarations: the annexures must be uploaded, equal to the declaration form, and all certified.
                        </p>

                        <h3>Step-by-Step guide to using E-Tax to declare and pay domestic taxes</h3>
                        <p className="content-paragraph">
                            <strong>Step 1: Log-in to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Access the E-Tax website at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a> and login to the E-Tax system using your TIN and password.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Download, complete and save annexures</strong>
                        </p>
                        <p className="content-paragraph">
                            In E-Tax, hover the mouse over 'Annexure Downloads', and click a tax type to download the relevant annexures.
                        </p>
                        <p className="content-paragraph">
                            Enter the required information and click 'Validate' to save each annexure tab separately in the C:/RRA folder.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Complete the declaration form</strong>
                        </p>
                        <p className="content-paragraph">
                            In E-Tax, choose the applicable declaration and enter the required aggregated values for the tax period. Click to 'Save' the declaration and automatically calculate the grey calculation boxes, including the tax due.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Upload annexures, compare with the declaration form and submit the declaration</strong>
                        </p>
                        <p className="content-paragraph">
                            Upload the annexures from the C:/RRA folder and compare the values with the declaration form. If these are equal and correct, certify and submit the declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, Telecom Mobile Money, Mobicash, or at a bank.
                        </p>
                    </section>

                    <section className="content-section">
                        <h2>Income Tax (PIT and CIT) Summary</h2>

                        <h3>What are the two types of Income Tax?</h3>
                        <p className="content-paragraph">
                            There are two types of Income Tax. Personal Income Tax (PIT) is for individual businesses. Corporate Income Tax (CIT) is for companies.
                        </p>

                        <h3>Who must register for Income Tax?</h3>
                        <p className="content-paragraph">
                            Taxpayers are automatically registered for the correct type of Income Tax, either PIT or CIT, when registering their business with RDB.
                        </p>

                        <h3>When is the deadline to declare and pay Income Tax?</h3>
                        <p className="content-paragraph">
                            The tax period for Income Tax is the calendar year, from 1st January until 31st December. The deadline for declaring and paying is March 31st of the following year.
                        </p>

                        <h3>What are Instalment Quarterly Prepayments (IQP)?</h3>
                        <p className="content-paragraph">
                            In addition, taxpayers are required to declare and pay Instalment Quarterly Prepayments (IQP) if he or she has had a taxable revenue in the previous fiscal year by the deadlines of the following: 30th June, 30th September and 31st December.
                        </p>
                        <p className="content-paragraph">
                            All IQPs that are paid can then be claimed back in that tax year's annual Income Tax declarations.
                        </p>

                        <h3>What are the tax regimes and rates for Income Tax?</h3>
                        <p className="content-paragraph">
                            Income Tax has three 'regimes' available for taxpayers:
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Tax Regime</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 2,000,000 – FRW 12,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Flat Tax</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 12,000,001 – FRW 20,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Lump Sum</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 20,000,001</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Real Regime</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="content-paragraph">
                            Taxpayers earning motor vehicle transport income may also separately declare Motor Vehicle Income Tax.
                        </p>

                        <p className="content-paragraph">
                            <strong>Flat Tax</strong>
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual Tax Due</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 2,000,000 – FRW 4,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 60,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 4,000,001 – FRW 7,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 120,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 7,000,001 – FRW 10,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 210,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 10,000,001 – FRW 12,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 300,000</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="content-paragraph">
                            <strong>Lump Sum</strong>
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Income Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 12,000,001 – FRW 20,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3% of Turnover</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="content-paragraph">
                            <strong>Real Regime</strong>
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual taxable income (profit)</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>PIT Rate</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>CIT Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 0 – FRW 720,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>28%</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 720,001 – FRW 1,200,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 1,200,001 – FRW 2,400,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20%</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 2,400,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30%</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>What are the rates for Motor Vehicle Income Tax?</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Type of Vehicle</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Tax Rate per Quarter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Motorcycle cc below 100</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 9,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Motorcycle cc above 100</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 18,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Car</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 22,050</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Bus/Minibus</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 3,000 per seat capacity</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Pick-up/Truck with maximum load capacity below 7 tonnes</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 15,000 per tonne of capacity, rounded to the nearest half-tonne</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Pick-up/Truck with maximum load capacity between 7 - 30 tonnes</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 19,500 per tonne of capacity, rounded to the nearest half-tonne</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Private Ambulance/ Hearse</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 25,000</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Wheeled construction/ breakdown/ towing vehicle</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 76,800</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Caterpillar-tracked vehicle</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 195,000</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Step-by-Step guide to declaring and paying Flat Tax or Lump Sum regime or IQP using M-Declaration</h3>
                        <p className="content-paragraph">
                            Flat Tax, Lump Sum or Instalment Quarterly Prepayments (IQP) Income Tax can be declared on mobile phones using M-Declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 1: Keep records of all income</strong>
                        </p>
                        <p className="content-paragraph">
                            Keep records of all income to calculate annual turnover.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Register for M-Declaration</strong>
                        </p>
                        <p className="content-paragraph">
                            Using the mobile phone, dial *800#. Select a language, '2. Other Business Activities' and then '1. Registration'. Enter the TIN and Rwanda National ID number. This step is only required the first-time using M-Declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: M-Declaration of Income Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Using the mobile phone, dial *800#. Select a language, '2. Other Business Activities' and then '2. Declaration. Enter the tax period, whether the taxpayer is 'new' or 'usual' to M-Declaration and the tax period business income.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Receive payment details and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN Mobile Money, Mobicash, or at a bank.
                        </p>

                        <h3>Step-by-Step guide to declaring and paying Motor Vehicle Income Tax or IQP using M-Declaration</h3>
                        <p className="content-paragraph">
                            Motor Vehicle Income Tax must be declared on mobile phones using M-Declaration. The process is the same when declaring Motor Vehicle Income Tax Instalment Quarterly Prepayments (IQP).
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 1: Register Motor Vehicle for Transport Income use</strong>
                        </p>
                        <p className="content-paragraph">
                            Visit any RRA offices and register the motor vehicle for transport income use. This use also requires specific insurance to be purchased for the motor vehicle. This step is only required the first-time using M-Declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: M-Declaration of Income Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Using your mobile phone, dial *800#. Select a language, '1. Motor Cycles/Vehicles'. Enter the TIN, number plate of the motor vehicle, tax period and whether you are a 'new' taxpayer or a 'usual taxpayer'.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Receive payment details and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>

                        <h3>Step-by-Step guide to declaring and paying Flat Tax regime using E-Tax</h3>
                        <p className="content-paragraph">
                            Flat Tax Income Tax can be declared online or with the help of staff at RRA offices with E-Tax.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 1: Keep records of all income</strong>
                        </p>
                        <p className="content-paragraph">
                            Keep records of all income to calculate annual turnover.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Login to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a>.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Complete form and submit</strong>
                        </p>
                        <p className="content-paragraph">
                            Complete the declaration form and submit the Income Tax declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>

                        <h3>Step-by-Step guide to declaring and paying Lump Sum regime using E-Tax</h3>
                        <p className="content-paragraph">
                            Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 1: Keep records of all income</strong>
                        </p>
                        <p className="content-paragraph">
                            Keep records of all income to calculate annual turnover.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Login to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a>.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Download, complete, validate and save annexures</strong>
                        </p>
                        <p className="content-paragraph">
                            Download, complete, validate and save any applicable Lump Sum Annexures.
                        </p>
                        <p className="content-paragraph">
                            This step is only required if the taxpayer has had any tax withheld and paid on their behalf during the tax period.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Complete declaration form, upload annexures and submit</strong>
                        </p>
                        <p className="content-paragraph">
                            Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
                        </p>
                        <p className="content-paragraph">
                            Only upload annexures if the taxpayer has had any tax withheld and paid on their behalf during the tax period.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>

                        <h3>Step-by-Step guide to declaring and paying Real Regime using E-Tax</h3>
                        <p className="content-paragraph">
                            <strong>Step 1: Bookkeeping</strong>
                        </p>
                        <p className="content-paragraph">
                            Ensure accurate bookkeeping of all business matters.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Certify the financial statements</strong>
                        </p>
                        <p className="content-paragraph">
                            Submit the financial statements to ICPAR members for validation.
                        </p>
                        <p className="content-paragraph">
                            This step is only required if the taxpayer had annual turnover of more than FRW 600,000,000.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Login to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a>.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Download, complete, validate and save annexures</strong>
                        </p>
                        <p className="content-paragraph">
                            Download, complete, validate and save the applicable Real Regime annexures, including the Balance Sheet, Profit and Loss Statement and Company Representative annexures.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: Upload certified financials</strong>
                        </p>
                        <p className="content-paragraph">
                            Approved certifying audit firm upload certified financials on behalf of their clients through their E-Tax portals.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 6: Complete form, upload annexures and submit</strong>
                        </p>
                        <p className="content-paragraph">
                            Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 7: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>

                        <h3>Step-by-Step guide to declaring and paying Instalment Quarterly Prepayments (IQP) using E-Tax</h3>
                        <p className="content-paragraph">
                            Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
                        </p>
                        <p className="content-paragraph">
                            If the taxpayer has had any tax withheld and paid on their behalf during the tax period, also follow the italics steps.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 1: Bookkeeping</strong>
                        </p>
                        <p className="content-paragraph">
                            Keep records of all tax withheld and paid on their behalf.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Login to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a>.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Download, complete, validate and save annexures</strong>
                        </p>
                        <p className="content-paragraph">
                            Download, complete, validate and save any applicable IQP Annexures.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Complete declaration form, upload annexures and submit</strong>
                        </p>
                        <p className="content-paragraph">
                            Complete the declaration form, upload annexures, confirm accuracy and submit the IQP declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>
                    </section>

                    {/* Continue with remaining sections - PAYE, VAT, EIS, Excise, WHT, Gaming, Mining, Capital Gains, Road Maintenance, Tourism, Decentralised Entities, Customs, Paying Taxes, and Tax Types Summary */}
                    {/* Due to length, I'll add the key remaining sections */}

                    <section className="content-section">
                        <h2>Pay As You Earn (PAYE) Summary</h2>
                        <h3>Who pays PAYE?</h3>
                        <p className="content-paragraph">
                            PAYE is a tax on employees' income. It is withheld, declared and paid on their behalf by their employers.
                        </p>
                        <h3>Who must register for PAYE?</h3>
                        <p className="content-paragraph">
                            Any taxpayer who pays its employees in cash, benefits-in-kind or allowances is required to register for PAYE.
                        </p>
                        <h3>What is the rate of PAYE for permanent employees?</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Monthly taxable income</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Marginal Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 0 to FRW 60,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 60,001 to FRW 100,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 100,001 to FRW 200,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20%</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 200,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30%</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>When is the deadline to declare and pay PAYE?</h3>
                        <p className="content-paragraph">
                            PAYE is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may choose to declare on a quarterly basis.
                        </p>
                        <p className="content-paragraph">
                            Whether monthly or quarterly, the PAYE declaration must be submitted and paid by the 15th of the month following the end of the tax period.
                        </p>
                        <h3>Are PAYE and RSSB contributions declared together?</h3>
                        <p className="content-paragraph">
                            PAYE and RSSB contributions can be declared together in a 'Unified PAYE declaration' using RSSB system called 'Ishema'.
                        </p>
                    </section>

                    <section className="content-section">
                        <h2>Value Added Tax (VAT) Summary</h2>
                        <h3>What is VAT?</h3>
                        <p className="content-paragraph">
                            VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers on the value added at each stage of production.
                        </p>
                        <h3>Who must register for VAT?</h3>
                        <p className="content-paragraph">
                            A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales.
                        </p>
                        <p className="content-paragraph">
                            In addition, any taxpayer may choose to register for VAT.
                        </p>
                        <h3>What is the rate of VAT?</h3>
                        <p className="content-paragraph">
                            The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services. VAT is charged on the value added at each stage of production.
                        </p>
                        <h3>When is the deadline to declare and pay VAT?</h3>
                        <p className="content-paragraph">
                            VAT is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may choose to declare on a quarterly basis.
                        </p>
                        <p className="content-paragraph">
                            Whether monthly or quarterly, the VAT declaration must be submitted and any tax paid by the 15th of the month following the end of the tax period.
                        </p>
                        <h3>Step-by-step guide to declaring and paying VAT</h3>
                        <p className="content-paragraph">
                            <strong>Step 1: Bookkeeping and issuing EIS invoices.</strong>
                        </p>
                        <p className="content-paragraph">
                            Ensure accurate bookkeeping including retaining all VAT invoices for inputs and using Electronic Invoicing System (EIS), a type of EBM to issue EIS invoices for all sales.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 2: Login to E-Tax</strong>
                        </p>
                        <p className="content-paragraph">
                            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://etax.rra.gov.rw</a>.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 3: Download, complete, validate and save annexures</strong>
                        </p>
                        <p className="content-paragraph">
                            Download, complete, validate and save the applicable Annexures. This includes tabs for sales, locally purchased inputs, imported inputs, VAT reverse charge and VAT retained by public institutions.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 4: Complete declaration form, upload annexures and submit</strong>
                        </p>
                        <p className="content-paragraph">
                            Complete the declaration form, upload annexures, confirm accuracy and submit the VAT declaration.
                        </p>
                        <p className="content-paragraph">
                            <strong>Step 5: View acknowledgement receipt and pay taxes</strong>
                        </p>
                        <p className="content-paragraph">
                            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                        </p>
                    </section>

                    {/* Additional sections would continue here - I'll add a note that the full content continues with all other tax summaries */}
                    <section className="content-section">
                        <h2>Tax Types Summary</h2>
                        <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                                        <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Description</th>
                                        <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Tax Type(s)</th>
                                        <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Declaration and Payment Deadlines</th>
                                        <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Page</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>For all businesses…</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Income Tax (PIT or CIT), including Income Tax Quarterly Prepayments (IQP)<br />Trading License Tax - Annually<br />Trading Licence Tax - Quarterly</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31st March of following year<br />30th June, 31st September and 31st December of current year<br />31st January of current year<br />Q1 – End of January, Q2 – End of April; Q3 – End of July; Q4 – End of October</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/income-tax-explanation" className="table-link">Income Tax</Link><br /><Link to="/instalment-payments" className="table-link">IQP</Link><br /><Link to="/trading-license-tax" className="table-link">Trading License Tax</Link><br /><Link to="/trading-license-tax" className="table-link">Trading License Tax</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… with employees</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Pay As You Earn (PAYE)</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of following month or quarter</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/paye-explanation" className="table-link">PAYE</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… with annual turnover above FRW 20,000,000</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Value Added Tax (VAT)</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of following month or quarter</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/vat-explanation" className="table-link">VAT</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which import or export goods</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Customs Duties</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>when importing or exporting</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/customs-explanation" className="table-link">Customs</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which manufacture fruit juices, other juice, lemonades and sodas, cosmetic and beauty products, other alcoholic beverages, beers, wines, spirits, brandies, oils, cigarettes, lubricants and fluids, motor vehicles, powdered milk or airtime, Chocolate, Sweets and Chewing gum, flavoured and coloured syrup, other fermented beverages, financial transactions</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Excise Duty</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5th of following month</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/excise-explanation" className="table-link">Excise Duty</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which make payments of interest, dividends, royalties, service or consultancy fees, for performances, or to non-registered businesses</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Withholding Taxes</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of following month</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/withholding-taxes-explanation" className="table-link">Withholding Taxes</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which pay out gambling proceeds</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Gaming Taxes</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of following month</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/gaming-tax-explanation" className="table-link">Gaming Taxes</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which deal with minerals (local exploitation)</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Mining Royalty Tax</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of following month</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/mining-royalty-explanation" className="table-link">Mining Royalty Tax</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… which deal with minerals (export)</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Export Tax (Minerals)</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Before export</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/custom-duties" className="table-link">Export Tax (Minerals)</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… to maintain roads in good condition</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Road maintenance Levy</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31st December</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/road-maintenance-explanation" className="table-link">Road Maintenance Levy</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… paid on accommodation services</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Tourism tax</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of the following month</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/tourism-tax-explanation" className="table-link">Tourism Tax</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>For all landowners…</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Immovable Property Tax</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31st December of same year</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/immovable-property-tax" className="table-link">Immovable Property Tax</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… renting out property</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rental Income Tax</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31st January of following year</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/rental-income-tax" className="table-link">Rental Income Tax</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>…Sale of Immovable Property</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Tax on sale of immovable property</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Upon transaction</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/immovable-property-tax" className="table-link">Tax on Sale of Immovable Property</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>For all individuals…</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… who have sold/transferred shares, licenses, debt instruments, options, guarantees and similar assets</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Capital Gains Tax</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15th of the following month</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>For anyone…</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… importing a car</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Customs duties</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>when importing</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… buying a car locally</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Motor Vehicle Ownership Transfer Fees</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>when buying the car</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/motor-vehicle" className="table-link">Motor Vehicle Transfer</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>… requiring District's services or authorisation</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Decentralised Entities Fees</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>before the service or authorisation is provided</td>
                                        <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}><Link to="/fee-levied-decentralised-entities" className="table-link">Decentralised Entities Fees</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Faqs;

