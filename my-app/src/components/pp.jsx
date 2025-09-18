import React from 'react';
import './pp.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <div className="policy-content">
        <section className='pp-section'>
          <h2 className='pp-h2'>1. Information We Collect</h2>
          <p className='pp-p'>When you use SkillByte, we collect:</p>
          <ul className='pp-ul'>
            <li className='pp-li'>Account information (name, email, password)</li>
            <li className='pp-li'>Learning progress and course completion data</li>
            <li className='pp-li'>Usage data and interaction with our platform</li>
            <li className='pp-li'>Device information and IP address</li>
          </ul>
        </section>

        <sectio className='pp-section'>
          <h2 className='pp-h2'>2. How We Use Your Information</h2>
          <p className='pp-p'>We use your information to:</p>
          <ul className='pp-ul'>
            <li className='pp-li'>Provide personalized learning experiences</li>
            <li className='pp-li'>Track your progress in courses</li>
            <li className='pp-li'>Improve our educational content</li>
            <li className='pp-li'>Send important updates about your courses</li>
            <li className='pp-li'>Maintain and enhance platform security</li>
          </ul>
        </sectio>

        <section className='pp-section'>
          <h2 className='pp-h2'>3. Data Protection</h2>
          <p className='pp-p'>SkillByte implements industry-standard security measures to protect your data. We:</p>
          <ul className='pp-ul'>
            <li className='pp-li'>Encrypt all sensitive information</li>
            <li className='pp-li'>Regularly update our security protocols</li>
            <li className='pp-li'>Restrict access to personal data</li>
            <li className='pp-li'>Monitor for potential security breaches</li>
          </ul>
        </section>

        <section className='pp-section'>
          <h2 className='pp-h2'>4. Data Sharing</h2>
          <p className='pp-p'>We do not sell your personal information. We may share data with:</p>
          <ul className='pp-ul'>
            <li className='pp-li'>Service providers who help operate our platform</li>
            <li className='pp-li'>Analytics partners to improve our services</li>
            <li className='pp-li'>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className='pp-section'>
          <h2 className='pp-h2'>5. Your Rights</h2>
          <p className='pp-p'>You have the right to:</p>
          <ul className='pp-ul'>
            <li className='pp-li'>Access your personal data</li>
            <li className='pp-li'>Correct inaccurate information</li>
            <li className='pp-li'>Request deletion of your data</li>
            <li className='pp-li'>Export your learning progress</li>
            <li className='pp-li'>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className='pp-section'>
          <h2 className='pp-h2'>6. Contact Us</h2>
          <p className='pp-p'>If you have questions about this privacy policy or your data, contact us at:</p>
          <p className='pp-p'>Email: privacy@skillbyte.com</p>
          <p>Address: [Your Business Address]</p>
        </section>

        <div className="policy-footer">
          <p className='pp-p'>Last updated: September 18, 2025</p>
          <p className='pp-p'>SkillByte &copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;