import { Building2 } from 'lucide-react';

const LocalGovernmentTaxes = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Building2 size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Local Government Taxes</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Guide to decentralized entities taxes and fees
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>Local Government Taxes Overview</h2>
          <p>Local government taxes include Immovable Property Tax, Trading License Tax, and Rental Income Tax.</p>
        </section>
      </div>
    </div>
  );
};

export default LocalGovernmentTaxes;
