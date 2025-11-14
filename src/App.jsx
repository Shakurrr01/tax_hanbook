import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContextProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import RRAInfo from './pages/RRAInfo';
import Definitions from './pages/Definitions';
import Acronyms from './pages/Acronyms';
import LawsRulings from './pages/LawsRulings';
import Obligations from './pages/Obligations';
import Audits from './pages/Audits';
import Refunds from './pages/Refunds';
import Appeals from './pages/Appeals';
import DebtManagement from './pages/DebtManagement';
import Certificates from './pages/Certificates';
import VATReward from './pages/VATReward';
import CommunicateRRA from './pages/CommunicateRRA';
import OnlineRequests from './pages/OnlineRequests';
import MotorVehicle from './pages/MotorVehicle';
import MyRRA from './pages/MyRRA';
import Registration from './pages/Registration';
import DomesticTaxes from './pages/DomesticTaxes';
import VAT from './pages/VAT';
import ExciseExplanation from './pages/ExciseExplanation';
import WithholdingTaxes from './pages/WithholdingTaxes';
import WithholdingTaxesExplanation from './pages/WithholdingTaxesExplanation';
import WithholdingTaxesDeclaration from './pages/WithholdingTaxesDeclaration';
import GamingTaxExplanation from './pages/GamingTaxExplanation';
import GamingTaxDeclaration from './pages/GamingTaxDeclaration';
import GamingTaxPenalties from './pages/GamingTaxPenalties';
import RegistrationExplanation from './pages/RegistrationExplanation';
import RegistrationGuide from './pages/RegistrationGuide';
import DomesticDeclaration from './pages/DomesticDeclaration';
import DomesticPenalties from './pages/DomesticPenalties';
import MiningRoyaltyExplanation from './pages/MiningRoyaltyExplanation';
import MiningRoyaltyDeclaration from './pages/MiningRoyaltyDeclaration';
import CapitalGainsTaxExplanation from './pages/CapitalGainsTaxExplanation';
import CapitalGainsTaxDeclaration from './pages/CapitalGainsTaxDeclaration';
import LocalGovernmentTaxes from './pages/LocalGovernmentTaxes';
import DecentralisedEntities from './pages/DecentralisedEntities';
import ImmovablePropertyTax from './pages/ImmovablePropertyTax';
import TradingLicenseTax from './pages/TradingLicenseTax';
import RentalIncomeTax from './pages/RentalIncomeTax';
import FeeLeviedDecentralisedEntities from './pages/FeeLeviedDecentralisedEntities';
import TaxCentres from './pages/TaxCentres';
import RegisteringDecentralisedEntities from './pages/RegisteringDecentralisedEntities';
import DeclaringDecentralisedEntitiesLgt from './pages/DeclaringDecentralisedEntitiesLgt';
import RoadMaintenanceExplanation from './pages/RoadMaintenanceExplanation';
import RoadMaintenanceDeclaration from './pages/RoadMaintenanceDeclaration';
import TourismTaxExplanation from './pages/TourismTaxExplanation';
import TourismTaxDeclaration from './pages/TourismTaxDeclaration';
import CustomsExplanation from './pages/CustomsExplanation';
import CustomDuties from './pages/CustomDuties';
import ClearingAgents from './pages/ClearingAgents';
import BorderPortsAndDryPorts from './pages/BorderPortsAndDryPorts';
import DeclaringImportsAndExport from './pages/DeclaringImportsAndExport';
import FacilitationSchema from './pages/FacilitationSchema';
import ImportingMotoVehicle from './pages/ImportingMotoVehicle';
import CustomsPenalties from './pages/CustomsPenalties';
import MethodsOfPayingTaxes from './pages/MethodsOfPayingTaxes';
import AcknowledgementReceipt from './pages/AcknowledgementReceipt';
import PayingUsingBankingAndEpayment from './pages/PayingUsingBankingAndEpayment';
import EPaymentMobileMoney from './pages/EPaymentMobileMoney';
import EPaymentMobicash from './pages/EPaymentMobicash';
import PayingAtBank from './pages/PayingAtBank';
import PayingTaxes from './pages/PayingTaxes';
import Faqs from './pages/Faqs';
import Deregistration from './pages/Deregistration';
import SearchResults from './pages/SearchResults';
import './App.css';
import './styles/LandingPages.css';

import Foreword from './pages/Foreword';
import VDS from './pages/VDS';
import ExchangeInfo from './pages/ExchangeInfo';
import IncomeTaxExplanation from './pages/IncomeTaxExplanation';
import RealRegimeDetails from './pages/RealRegimeDetails';
import MDeclarationFlatLumpIQP from './pages/MDeclarationFlatLumpIQP';
import MDeclarationMotorVehicle from './pages/MDeclarationMotorVehicle';
import DeclaringFlatTaxLumpSumIQP from './pages/DeclaringFlatTaxLumpSumIQP';
import DeclaringMotorVehicleIncomeTax from './pages/DeclaringMotorVehicleIncomeTax';
import DeclaringFlatTaxETax from './pages/DeclaringFlatTaxE-Tax';
import DeclaringLumpSumETax from './pages/DeclaringLumpSumE-Tax';
import DeclaringRealRegimeETax from './pages/DeclaringRealRegimeE-Tax';
import DeclaringIQPIncomeTax from './pages/DeclaringIQPIncomeTax';
import InstalmentPayments from './pages/InstalmentPayments';
import PayeExplanation from './pages/PayeExplanation';
import PayeDeclaration from './pages/PayeDeclaration';
import VatExplanation from './pages/VatExplanation';
import VatDeclaration from './pages/VatDeclaration';
import ElectronicInvoicingSystemExplanation from './pages/ElectronicInvoicingSystemExplanation';
import EisEbmsPenalties from './pages/EisEbmsPenalties';
import IntroductionLanding from './pages/IntroductionLanding';
import RegistrationLanding from './pages/RegistrationLanding';
import VatLanding from './pages/VatLanding';
import OtherTaxesLanding from './pages/OtherTaxesLanding';
import OtherTaxesEntities from './pages/OtherTaxesEntities';
import PitCitLanding from './pages/PitCitLanding';
import OtherTaxSubmenuLanding from './pages/OtherTaxSubmenuLanding';
import VatUnified from './pages/VatUnified';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <LanguageProvider>
      <Router
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <ScrollToTop />
        <div className="app">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="main-container">
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<IntroductionLanding />} />
                <Route path="/introduction-original" element={<Introduction />} />
                <Route path="/foreword" element={<Foreword />} />
                <Route path="/rra-info" element={<RRAInfo />} />
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/acronyms" element={<Acronyms />} />
                <Route path="/laws-rulings" element={<LawsRulings />} />
                <Route path="/obligations" element={<Obligations />} />
                <Route path="/audits" element={<Audits />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/appeals" element={<Appeals />} />
                <Route path="/debt-management" element={<DebtManagement />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/vds" element={<VDS />} />
                <Route path="/vat-reward" element={<VATReward />} />
                <Route path="/communicate-rra" element={<CommunicateRRA />} />
                <Route path="/online-requests" element={<OnlineRequests />} />
                <Route path="/exchange-info" element={<ExchangeInfo />} />
                <Route path="/motor-vehicle" element={<MotorVehicle />} />
                <Route path="/myrra" element={<MyRRA />} />
                <Route path="/registration" element={<RegistrationLanding />} />
                <Route path="/registration-original" element={<Registration />} />
                <Route path="/registration-explanation" element={<RegistrationExplanation />} />
                <Route path="/registration-guide" element={<RegistrationGuide />} />
                <Route path="/domestic-taxes" element={<DomesticTaxes />} />
                <Route path="/domestic-declaration" element={<DomesticDeclaration />} />
                <Route path="/domestic-penalties" element={<DomesticPenalties />} />
                <Route path="/income-tax-explanation" element={<IncomeTaxExplanation />} />
                <Route path="/real-regime-details" element={<RealRegimeDetails />} />
                <Route path="/m-declaration-flat-lump-iqp" element={<MDeclarationFlatLumpIQP />} />
                <Route path="/m-declaration-motor-vehicle" element={<MDeclarationMotorVehicle />} />
                <Route path="/declaring-flat-tax-lump-sum-iqp" element={<DeclaringFlatTaxLumpSumIQP />} />
                <Route path="/declaring-motor-vehicle-income-tax" element={<DeclaringMotorVehicleIncomeTax />} />
                <Route path="/declaring-flat-tax-e-tax" element={<DeclaringFlatTaxETax />} />
                <Route path="/declaring-lump-sum-e-tax" element={<DeclaringLumpSumETax />} />
                <Route path="/declaring-real-regime-e-tax" element={<DeclaringRealRegimeETax />} />
                <Route path="/declaring-iqp-income-tax" element={<DeclaringIQPIncomeTax />} />
                <Route path="/instalment-payments" element={<InstalmentPayments />} />
                <Route path="/paye-explanation" element={<PayeExplanation />} />
                <Route path="/paye-declaration" element={<PayeDeclaration />} />
                <Route path="/vat-explanation" element={<VatExplanation />} />
                <Route path="/vat-declaration" element={<VatDeclaration />} />
                <Route path="/electronic-invoicing-system-explanation" element={<ElectronicInvoicingSystemExplanation />} />
                <Route path="/eis-ebms-penalties" element={<EisEbmsPenalties />} />
                <Route path="/vat" element={<VatLanding />} />
                <Route path="/vat-original" element={<VAT />} />
                <Route path="/excise-explanation" element={<ExciseExplanation />} />
                <Route path="/withholding-taxes" element={<WithholdingTaxes />} />
                <Route path="/withholding-taxes-explanation" element={<WithholdingTaxesExplanation />} />
                <Route path="/withholding-taxes-declaration" element={<WithholdingTaxesDeclaration />} />
                <Route path="/gaming-tax-explanation" element={<GamingTaxExplanation />} />
                <Route path="/gaming-tax-declaration" element={<GamingTaxDeclaration />} />
                <Route path="/gaming-tax-penalties" element={<GamingTaxPenalties />} />
                <Route path="/mining-royalty-explanation" element={<MiningRoyaltyExplanation />} />
                <Route path="/mining-royalty-declaration" element={<MiningRoyaltyDeclaration />} />
                <Route path="/capital-gains-tax-explanation" element={<CapitalGainsTaxExplanation />} />
                <Route path="/capital-gains-tax-declaration" element={<CapitalGainsTaxDeclaration />} />
                <Route path="/local-government-taxes-original" element={<LocalGovernmentTaxes />} />
                <Route path="/decentralised-entities" element={<DecentralisedEntities />} />
                <Route path="/immovable-property-tax" element={<ImmovablePropertyTax />} />
                <Route path="/trading-license-tax" element={<TradingLicenseTax />} />
                <Route path="/rental-income-tax" element={<RentalIncomeTax />} />
                <Route path="/fee-levied-decentralised-entities" element={<FeeLeviedDecentralisedEntities />} />
                <Route path="/tax-centres" element={<TaxCentres />} />
                <Route path="/registering-decentralised-entities" element={<RegisteringDecentralisedEntities />} />
                <Route path="/declaring-decentralised-entities-lgt" element={<DeclaringDecentralisedEntitiesLgt />} />
                <Route path="/road-maintenance-explanation" element={<RoadMaintenanceExplanation />} />
                <Route path="/road-maintenance-declaration" element={<RoadMaintenanceDeclaration />} />
                <Route path="/tourism-tax-explanation" element={<TourismTaxExplanation />} />
                <Route path="/tourism-tax-declaration" element={<TourismTaxDeclaration />} />
                <Route path="/customs-explanation" element={<CustomsExplanation />} />
                <Route path="/custom-duties" element={<CustomDuties />} />
                <Route path="/clearing-agents" element={<ClearingAgents />} />
                <Route path="/border-ports-and-dry-ports" element={<BorderPortsAndDryPorts />} />
                <Route path="/declaring-imports-and-export" element={<DeclaringImportsAndExport />} />
                <Route path="/facilitation-schema" element={<FacilitationSchema />} />
                <Route path="/importing-moto-vehicle" element={<ImportingMotoVehicle />} />
                <Route path="/customs-penalties" element={<CustomsPenalties />} />
                <Route path="/methods-of-paying-taxes" element={<MethodsOfPayingTaxes />} />
                <Route path="/acknowledgement-receipt" element={<AcknowledgementReceipt />} />
                <Route path="/paying-using-banking-and-epayment" element={<PayingUsingBankingAndEpayment />} />
                <Route path="/e-payment-mobile-money" element={<EPaymentMobileMoney />} />
                <Route path="/e-payment-mobicash" element={<EPaymentMobicash />} />
                <Route path="/paying-at-bank" element={<PayingAtBank />} />
                <Route path="/paying-taxes" element={<PayingTaxes />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/deregistration" element={<Deregistration />} />
                <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
                <Route path="/other-taxes-entities" element={<OtherTaxesEntities />} />
                <Route path="/pit-cit" element={<PitCitLanding />} />
                <Route path="/other-taxes" element={<OtherTaxesLanding />} />
                <Route path="/other-taxes-original" element={<OtherTaxesLanding />} />
                <Route path="/other-tax-submenu" element={<OtherTaxSubmenuLanding />} />
                <Route path="/vat-unified" element={<VatUnified />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
