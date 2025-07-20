import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center py-12 px-4 bg-white">
      <div className="w-full max-w-4xl">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500">Last updated: July 20, 2025</p>
        </div>

        <div className="space-y-16 text-gray-700 text-lg text-left">
          {/* Introduction */}
          <section>
            <p>
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our website or use our services. Please read this policy
              carefully to understand our views and practices regarding your
              personal data.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us when registering, placing an order, subscribing to a
              newsletter, or otherwise contacting us. This information may
              include your name, email address, phone number, billing and
              shipping addresses.
            </p>
            <p className="mt-4">
              Additionally, we automatically collect certain information about
              your device and usage patterns through cookies and similar
              technologies, such as IP address, browser type, operating system,
              and browsing behavior.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                To provide, operate, and maintain our website and services.
              </li>
              <li>To improve, personalize, and expand our services.</li>
              <li>
                To communicate with you, including customer service and
                promotional emails.
              </li>
              <li>To process transactions and send you related information.</li>
              <li>
                To monitor usage and detect any unauthorized or fraudulent
                activities.
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage, and deliver personalized content. You
              can control cookies through your browser settings, but disabling
              cookies may limit some features.
            </p>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Sharing Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist in operating our website and business, under
              confidentiality agreements.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure.
            </p>
          </section>

          {/* Your Data Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal data, such as access, correction, deletion, or objection
              to processing. Please contact us if you wish to exercise these
              rights.
            </p>
          </section>

          {/* Children’s Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children
              without parental consent. If we discover such data, we will
              promptly delete it.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              with a new effective date.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-sky-500 hover:underline"
              >
                privacy@example.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
