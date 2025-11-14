import { Phone, Mail, MapPin, Globe, Users } from 'lucide-react';

const RRAInfo = () => {
  // Helper function to format phone number for tel: link
  const formatPhoneForTel = (phone) => {
    // Remove spaces and parentheses, but keep the + sign for international numbers
    return phone.replace(/\s+/g, '').replace(/[()]/g, '');
  };

  // Helper function to create clickable phone link
  const PhoneLink = ({ phone, children }) => {
    const telLink = `tel:${formatPhoneForTel(phone)}`;
    return (
      <a
        href={telLink}
        style={{
          color: '#093e61',
          textDecoration: 'underline',
          fontWeight: 500,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.color = '#5B9BD5'}
        onMouseLeave={(e) => e.target.style.color = '#093e61'}
      >
        {children || phone}
      </a>
    );
  };

  const socialMediaLinks = [
    "https://www.instagram.com/rwandarevenue/",
    "https://x.com/rrainfo",
    "https://www.youtube.com/@rwandarevenueauthority6148",
    "https://www.facebook.com/RwandaRevenueAuthority",
    "https://whatsapp.com/channel/0029Va5vwyEBadmXBapTbw3o",
    "https://www.tiktok.com/@rrataxtoks?_t=ZM-8vk7aIeu8XP&_r=1"
  ];

  const domesticTaxCentres = {
    "City of Kigali": [
      { name: "RRA Headquarters", phone: "078818 5516" },
      { name: "Gasabo", phone: "078818 5784" },
      { name: "Kicukiro", phone: "078818 5579" },
      { name: "Nyarugenge", phone: "078818 5515" }
    ],
    "Eastern Province": [
      { name: "Bugesera", phone: "078818 5781" },
      { name: "Gatsibo", phone: "078818 5606" },
      { name: "Kayonza", phone: "078818 5806" },
      { name: "Kirehe", phone: "078818 5805" },
      { name: "Ngoma", phone: "078818 5821" },
      { name: "Nyagatare", phone: "078818 5542" },
      { name: "Rwamagana", phone: "078818 5569" }
    ],
    "Southern Province": [
      { name: "Gisagara", phone: "078818 5815" },
      { name: "Huye", phone: "078818 5604" },
      { name: "Kamonyi", phone: "078818 5810" },
      { name: "Nyamagabe", phone: "078818 5533" },
      { name: "Nyanza", phone: "078818 5536" },
      { name: "Nyaruguru", phone: "078818 5666" },
      { name: "Ruhango", phone: "078818 5535" }
    ],
    "Western Province": [
      { name: "Karongi", phone: "078818 5532" },
      { name: "Ngororero", phone: "078818 5811" },
      { name: "Nyabihu", phone: "078818 5838" },
      { name: "Nyamasheke", phone: "078818 5549" },
      { name: "Rubavu", phone: "078818 5629" },
      { name: "Rusizi", phone: "078818 5537" },
      { name: "Rutsiro", phone: "078818 5813" }
    ],
    "Northern Province": [
      { name: "Burera", phone: "078818 5812" },
      { name: "Gakenke", phone: "078818 5808" },
      { name: "Gicumbi", phone: "078818 5568" },
      { name: "Musanze", phone: "078818 5628" },
      { name: "Rulindo", phone: "078818 5832" }
    ]
  };


  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Users size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">RRA Contact Details</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                RRA is "Here For You, To Serve" and is available to be contacted in many ways.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Contact Information Section */}
        <section className="content-section">
          <h2>By telephone:</h2>
          <ul className="content-list">
            <li><strong>RRA Call Centre:</strong> <PhoneLink phone="3004">3004</PhoneLink></li>
            <li><strong>RRA Internatianal Calls:</strong> <PhoneLink phone="+250 (0) 788 185 500">+250 (0) 788 185 500</PhoneLink></li>
          </ul>
        </section>

        <section className="content-section">
          <h2>By email:</h2>
          <p className="content-paragraph">
            <a href="https://ecms.rra.gov.rw/registered_taxpayer" target="_blank" rel="noopener noreferrer" className="content-link">
              https://ecms.rra.gov.rw/registered_taxpayer
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>On the RRA website 'Contact Us' section at:</h2>
          <p className="content-paragraph">
            <a href="https://www.rra.gov.rw/en/contact-us" target="_blank" rel="noopener noreferrer" className="content-link">
              https://www.rra.gov.rw/en/contact-us
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>By post:</h2>
          <div className="address-block">
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda Revenue Authority,</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Silver Back Mall</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kicukiro - Sonatube</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kigali</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda</p>
            <p className="content-paragraph" style={{ marginBottom: '0' }}>P. O. Box 3987</p>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="content-section">
          <h2>By social media:</h2>
          <div className="social-links-list">
            {socialMediaLinks.map((url, index) => (
              <p key={index} className="content-paragraph" style={{ marginBottom: '0.75rem' }}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="content-link">
                  {url}
                </a>
              </p>
            ))}
          </div>
        </section>

        {/* Departments/Divisions Section */}
        <section className="content-section">
          <h2>By departments/divisions:</h2>
          <p className="content-paragraph">
            The contact details for the Commissioner General, Deputy Commissioner General and Commissioner for Corporate Services as well as for each operational or support department/division are listed on the RRA website. Visit the 'About Us' section of the RRA website at:
          </p>
          <p className="content-paragraph">
            <a href="https://www.rra.gov.rw/en/about-us/rra-profile" target="_blank" rel="noopener noreferrer" className="content-link">
              https://www.rra.gov.rw/en/about-us/rra-profile
            </a>
          </p>
          <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
            In particular, the contact details for the Commissioner for Customs Services Department (CSD) are:
          </p>
          <div className="address-block" style={{ marginTop: '1rem' }}>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Commissioner for Customs Services Department,</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda Revenue Authority</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Doubai Port World (DPW)</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kicukiro/Masaka</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kigali</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda</p>
            <p className="content-paragraph" style={{ marginBottom: '0' }}>P. O. Box 3987</p>
          </div>
        </section>

        {/* Domestic Tax Centres Section */}
        <section className="content-section">
          <h2>At Domestic Tax Centres:</h2>
          <p className="content-paragraph">
            Domestic Tax Centres can be used to register and declare both domestic taxes and local government taxes and fees. In addition, domestic tax offices are available to help with a wide range of issues facing taxpayers.
          </p>
          <p className="content-paragraph">
            There is at least one Domestic Tax Centre in every District. The opening hours of each domestic tax centre is 09:00 to 17:00 on Monday to Friday, excluding national holidays.
          </p>
          <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
            The contact details of Domestic Tax Centres are listed by province below:
          </p>

          {Object.entries(domesticTaxCentres).map(([province, centres]) => (
            <div key={province} style={{ marginTop: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{province}</h3>
              <ul className="content-list">
                {centres.map((centre, index) => (
                  <li key={index}>
                    <strong>{centre.name}</strong> - <PhoneLink phone={centre.phone}>{centre.phone}</PhoneLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Border Posts and Dry Ports Section */}
        <section className="content-section">
          <h2>At Border Posts and Dry Ports:</h2>
          <p className="content-paragraph">
            RRA Border Posts and Dry Ports can be used for imports, exports and other customs processes. The contact details of RRA Border Posts and Dry Ports are listed on page 387.
          </p>
        </section>

        {/* Local Government Tax Centres Section */}
        <section className="content-section">
          <h2>At Local Government Tax Centres</h2>
          <p className="content-paragraph">
            Local Government Tax Centres can be used to register and declare Local Government Taxes (LGT) and fees. The contact details of Local Government Tax Centres are listed on page 334.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RRAInfo;
