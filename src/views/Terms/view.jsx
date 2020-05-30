/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React from 'react';
import { Container } from 'react-bootstrap';
import { PublicHeader, PublicFooter } from '../../components';

const TermsOfService = () => (
  <Container>
    <PublicHeader />
    <div className="text-white">
      <h1 className="mb-2 text-primary">Terms of Service</h1>
      <h2>Terms</h2>
      <p>
        By accessing the website at
        <a href="https://cmseditor.netlify.app">https://cmseditor.netlify.app</a>
        , you are agreeing to be bound by these terms of service, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable local laws. If you do not
        agree with any of these terms, you are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and trademark law.
      </p>
      <h2>Use License</h2>
      <ol type="a">
        <li>
          Permission is granted to temporarily download one copy of the materials (information or software)
          on Quanda.Dev&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title, and under this license you may not:
          <ol type="i">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Quanda.Dev&apos;s website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or mirror the materials on any other server.</li>
          </ol>
        </li>
        <li>
          This license shall automatically terminate if you violate any of
          these restrictions and may be terminated by Quanda.Dev at any time.
          Upon terminating your viewing of these materials or upon the termination of
          this license, you must destroy any downloaded materials in your possession whether
          in electronic or printed format.
        </li>
      </ol>
      <h2>Disclaimer</h2>
      <ol type="a">
        <li>
          The materials on Quanda.Dev&apos;s website are provided on an &apos;as is&apos; basis.
          Quanda.Dev makes no warranties, expressed or implied, and hereby disclaims and negates all
          other warranties including, without limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </li>
        <li>
          Further, Quanda.Dev does not warrant or make any representations concerning the accuracy, likely results,
          or reliability of the use of the materials on its website or otherwise relating to such materials or on any
          sites linked to this site.
        </li>
      </ol>
      <h2>Limitations</h2>
      <p>
        In no event shall Quanda.Dev or its suppliers be liable for any damages (including, without limitation,
        damages for loss of data or profit, or due to business interruption) arising out of the use or inability
        to use the materials on Quanda.Dev&apos;s website, even if Quanda.Dev or a Quanda.Dev authorized representative
        has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not
        allow limitations on implied warranties, or limitations of liability for consequential or incidental damages,
        these limitations may not apply to you.
      </p>
      <h2>Accuracy of materials</h2>
      <p>
        The materials appearing on Quanda.Dev&apos;s website could include technical, typographical, or photographic errors.
        Quanda.Dev does not warrant that any of the materials on its website are accurate, complete or current. Quanda.Dev
        may make changes to the materials contained on its website at any time without notice. However Quanda.Dev does
        not make any commitment to update the materials.
      </p>
      <h2>Links</h2>
      <p>
        Quanda.Dev has not reviewed all of the sites linked to its website and is not responsible for the contents
        of any such linked site. The inclusion of any link does not imply endorsement by Quanda.Dev of the site. Use
        of any such linked website is at the user&apos;s own risk.
      </p>
      <h2>Modifications</h2>
      <p>
        Quanda.Dev may revise these terms of service for its website at any time without notice. By using this website
        you are agreeing to be bound by the then current version of these terms of service.
      </p>
      <h2>Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of New York, NY and you
        irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </p>
      <p>Terms of Use created with GetTerms.</p>
    </div>
    <PublicFooter />
  </Container>
);

export default TermsOfService;
