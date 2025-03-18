/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";

const PrivacyPolicy = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        width={1000}
        footer={[
          <div
            className="text-primary text-base cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Close
          </div>,
        ]}
        title="Privacy & Policy"
        centered
        onCancel={() => setOpen(false)}
        open={open}
      >
        <div className=" leading-6 space-y-6">
          <div className="space-y-3">
            <h4 className="font-bold text-center text-3xl">Privacy policy</h4>
            <p>
              This “Privacy Policy” describes the privacy practices of
              Prostrikers in connection with the{" "}
              <a href="https://prostrikers.com">https://prostrikers.com</a>{" "}
              website, and any other website that we own or control and which
              posts or links to this Privacy Policy (collectively, the
              “Service”), in connection with our marketing activities, and as
              otherwise described in this Privacy Policy. In addition, this
              Privacy Policy describes your rights and choices with respect to
              the Personal Information we collect.
            </p>
            <p>
              We collect personal information as described below. Note, however,
              that our business customers may transmit personal information to
              us as part of the services we provide through our voice and
              messaging platforms, as well as other Services. This Privacy
              Policy does not apply to such personal information that we process
              on behalf of our business customers. Our use of this personal
              information is restricted by our agreements with those business
              customers. If you have concerns regarding personal information
              that we process on behalf of a business, please review their
              privacy policy and direct your concerns to that business, or
              review their privacy policy.
            </p>
            <div className="space-y-1">
              <p>Table of Contents</p>
              <ul className="list-disc pl-6">
                <li>Personal Information We Collect</li>
                <li>How We Use Your Personal Information</li>
                <li>How We Share Your Personal Information</li>
                <li>Your Choices</li>
                <li>Other Sites and Services</li>
                <li>Security Practices</li>
                <li>Children</li>
                <li>Changes to this Privacy Policy</li>
                <li>How to Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">
              Personal Information We Collect
            </h4>
            <p>
              <strong>Information you provide to us</strong>. Personal
              information you provide to us through the Service or otherwise
              includes:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Business and personal contact information, such as your first
                and last name, email and mailing addresses, phone number,
                professional title and company name.
              </li>
              <li>
                Profile information, such as your username and password that you
                may set to establish an online account with us.
              </li>
              <li>
                Registration information, such as information that may be
                related to a service or an event you register for.
              </li>
              <li>
                Feedback or correspondence, such as information you provide when
                you contact us with questions, feedback, or otherwise correspond
                with us online.
              </li>
              <li>
                Precise geolocation information, such as when you authorize us
                to access your location.
              </li>
              <li>
                Transaction information, such as information about payments to
                and from you and other details of products or services you have
                purchased from us.
              </li>
              <li>
                Usage information, such as any content you upload to the Service
                or otherwise submit to us, including information you provide
                when you use any interactive features of the Service
              </li>
              <li>
                Marketing information, such as your preferences for receiving
                communications about our activities, events, and publications,
                and details about how you engage with our communications.
              </li>
              <li>
                Other information that we may collect which is not specifically
                listed here, but which we will use in accordance with this
                Privacy Policy or as otherwise disclosed at the time of
                collection.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p>
              <strong>
                Information we obtain from social media platforms.
              </strong>{" "}
              We may maintain pages for our Company on social media platforms,
              such as, LinkedIn, Twitter, Google, YouTube, Instagram, and other
              third-party platforms. When you visit or interact with our pages
              on those platforms, the platform provider’s privacy policy will
              apply to your interactions and their collection, use and
              processing of your personal information. You or the platforms may
              provide us with information through the platform, and we will
              treat such information in accordance with this Privacy Policy.
            </p>
            <p>
              <strong>Information we obtain from other third parties.</strong>
              We may receive personal information about you from third-party
              sources, such as marketing partners, publicly-available sources
              and data providers. Our use of any information obtained from our
              business customers is restricted by our agreements with those
              business partners.
            </p>
            <p>
              A list of our sub-processors and nature of processing can be
              requested by contacting{" "}
              <a href="mailto:admin@prostrikers.com" className="text-blue-600">
                admin@prostrikers.com
              </a>
              .
            </p>
            <p>
              <strong>Marketing and advertising</strong>. We do not sell your
              personal information or the personal information of your users. We
              and our service providers and our third-party advertising
              partners, may collect and use your personal information for
              marketing and advertising purposes:
            </p>
            <ul className="pl-8 space-y-2">
              <li>
                <strong>Direct marketing.</strong>. We may send you Prostrikers
                -related direct marketing communications as permitted by law,
                including by email and mail. You may opt-out of our marketing
                communications as described in the Opt-out of marketing
                communications section below
              </li>
              <li>
                <strong>Interest-based advertising.</strong>.We may engage
                third-party advertising companies and social media companies to
                display ads on our Service and other online services. These
                companies may use cookies and similar technologies to collect
                information about your interaction (including the data described
                in the “Cookies and Other Information Collected by Automated
                Means” section below) over time across the Service, our
                communications and other online services, and use that
                information to serve online ads that they think will interest
                you. This is called interest-based advertising. We may also
                share information about our users with these companies to
                facilitate interest-based advertising to those or similar users
                on other online platforms. You can learn more about your choices
                for limiting interest-based advertising in the Advertising
                choices section below.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p>
              <strong>
                Cookies and Other Information Collected by Automated Means:
              </strong>
              We, our service providers, and our business partners may
              automatically log information about you, your computer, and
              activity occurring on or through the Service. The information that
              may be collected automatically includes your computer type and
              version number, manufacturer and model, device identifier (such as
              the Google Advertising ID or Apple ID for Advertising), browser
              type, screen resolution, IP address, the website you visited
              before browsing to our website, general location information such
              as city, state or geographic area; and information about your use
              of and actions on the Service, such as pages or screens you
              viewed, how long you spent on a page or screen, navigation paths
              between pages or screens, information about your activity on a
              page or screen, access times, and length of access. Our service
              providers and business partners may collect this type of
              information over time and across third-party websites.
            </p>
            <p>
              On our webpages, this information is collected using cookies,
              browser web storage (also known as locally stored objects, or
              “LSOs”), web beacons, and similar technologies, and our emails may
              also contain web beacons.
            </p>
            <p>
              <strong>Referrals</strong>: Users of the Service may have the
              opportunity to refer friends or other contacts to us. If you are
              an existing user, you may only submit a referral if you have
              permission to provide the referral’s contact information to us so
              that we may contact them.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">
              How We Use Your Personal Information
            </h4>
            <p>
              We do not share your personal information with third parties
              without your consent, except in the following circumstances or as
              described in this Privacy Policy:
            </p>
            <p>
              <strong>Related Companies</strong>. We may share your personal
              information with our affiliates, subsidiaries, and other related
              companies. Related companies will only use the information as
              described in this Privacy Policy.
            </p>
            <p>
              <strong>Service providers.</strong> We may share your personal
              information with third-party companies and individuals that
              provide services on our behalf or help us operate the Service
              (such as customer support, hosting, analytics, call or message
              routing, email delivery, marketing, and database management
              services). These third parties may use your personal information
              only as directed or authorized by us and in a manner consistent
              with this Privacy Policy, and are prohibited from using or
              disclosing your information for any other purpose.
            </p>
            <p>
              <strong>Partners.</strong> We may disclose your personal
              information to professional advisors, such as lawyers, bankers,
              auditors and insurers, where necessary in the course of the
              professional services that they render to us.
            </p>
            <p>
              <strong>Professional advisors.</strong> We may sometimes share
              your personal information with partners or enable partners to
              collect information directly via our Service.
            </p>
            <p>
              <strong>For compliance, fraud prevention and safety.</strong>We
              may share your personal information for the compliance, fraud
              prevention and safety purposes described above.
            </p>
            <p>
              <strong>Business transfers.</strong>We may sell, transfer or
              otherwise share some or all of our business or assets, including
              your personal information, in connection with a business
              transaction (or potential business transaction) such as a
              corporate divestiture, merger, consolidation, acquisition,
              reorganization or sale of assets, or in the event of bankruptcy or
              dissolution.
            </p>
            <p>
              <strong>IMPORTANT DISCLOSURE:</strong>We do not share your contact
              information or opt-in data with third parties for marketing
              purposes. Your personal information will only be used in
              accordance with this privacy policy, and we respect your privacy
              rights.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">Your Choices</h4>
            <p>
              In this section, we describe the rights and choices available to
              all users.
            </p>
            <p>
              <strong>Access or Update Your Information.</strong> If you have
              registered for an account with us, you may review and update
              certain personal information in your account profile by logging
              into the account.
            </p>
            <p>
              <strong>Text message communications.</strong> We use text
              messaging to communicate with you about your service. Normal
              messaging rates apply and the frequency of messages may vary.
              Mobile Carriers are not liable for delayed or undelivered
              messages.
            </p>
            <p>
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. All other categories exclude
              text messaging originator opt-in data and consent; this
              information will not be shared with any third parties
            </p>
            <p>
              <strong>Opt-out of text message communications</strong>. You may
              opt-out of text messaging at any time by replying to any message
              with STOP contacting us at admin@prostrikers.com. This will end
              the communications from that particular phone number. You may
              continue to receive service-related and other non-marketing text
              messages from other phone numbers managed by{" "}
              <strong>KDUN Holdings LLC DBA Prostrikers</strong>, and you may
              opt out of those in a similar fashion.
            </p>
            <p>
              <strong>Opt-out of marketing communications</strong>. You may
              opt-out of marketing-related emails by following the opt-out or
              unsubscribe instructions at the bottom of the email, or by
              contacting us at{" "}
              <a href="mailto:admin@prostrikers.com" className="text-blue-600">
                admin@prostrikers.com
              </a>{" "}
              You may continue to receive service-related and other nonmarketing
              emails.
            </p>
            <p>
              <strong>Cookies</strong>. Most browser settings let you delete and
              reject cookies placed by websites. Many browsers accept cookies by
              default until you change your settings. If you do not accept
              cookies, you may not be able to use all functionality of the
              Service and it may not work properly. For more information about
              cookies, including how to see what cookies have been set on your
              browser and how to manage and delete them, visit{" "}
              <a
                href="https://
              www.allaboutcookies.org"
              >
                https:// www.allaboutcookies.org
              </a>{" "}
              . We use Google Analytics to help us understand user activity on
              the Service. You can learn more about Google Analytics cookies at{" "}
              <a
                href="https://
              developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
              >
                https://
                developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
              </a>{" "}
              and about how Google protects your data at{" "}
              <a href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </a>
              . You can prevent the use of Google Analytics relating to your use
              of the Service by downloading and installing a browser plugin
              available at{" "}
              <a href="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <strong>Advertising choices.</strong> You can limit use of your
              information for interest-based advertising by:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Browser settings. Blocking third-party cookies in your browser
                settings.
              </li>
              <li>
                Privacy browsers/plug-ins. By using privacy browsers or
                ad-blocking browser plugins that let you block tracking
                technologies.
              </li>
              <li>
                Platform settings. Google offers opt-out features that let you
                opt-out of use of your information for interest-based
                advertising:
                <ul className="pl-6 list-outside">
                  <li>
                    Google:{" "}
                    <a href="https://adssettings.google.com">
                      https://adssettings.google.com
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Ad industry tools. Opting out of interest-based ads from
                companies participating in the following industry opt-out
                programs:
                <ul className="pl-6 list-outside">
                  <li>
                    Network Advertising Initiative:{" "}
                    <a href="https://optout.networkadvertising.org">
                      https://optout.networkadvertising.org
                    </a>
                  </li>
                  <li>
                    Digital Advertising Alliance:{" "}
                    <a href="https://optout.aboutads.info">
                      https://optout.aboutads.info
                    </a>
                  </li>
                  <li>
                    AppChoices mobile app, available at{" "}
                    <a href="https://www.youradchoices.com/appchoices">
                      https://www.youradchoices.com/appchoices,
                    </a>{" "}
                    which will allow you to opt-out of interest-based ads in
                    mobile apps served by participating members of the Digital
                    Advertising Alliance.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p>
              You will need to apply these opt-out settings on each device from
              which you wish to opt-out.
            </p>
            <p>
              <strong>Do Not Track.</strong> Some Internet browsers may be
              configured to send “Do Not Track” signals to the online services
              that you visit. We currently do not respond to “Do Not Track” or
              similar signals. To find out more about “Do Not Track,” please
              visit{" "}
              <a href="https://www.allaboutdnt.com">
                https://www.allaboutdnt.com
              </a>
              .
            </p>
            <p>
              <strong>Choosing not to share your personal information</strong>.
              Where we are required by law to collect your personal information,
              or where we need your personal information in order to provide the
              Service to you, if you do not provide this information when
              requested (or you later ask to delete it), we may not be able to
              provide you with our services. We will tell you what information
              you must provide to receive the Service by designating it as
              required at the time of collection or through other appropriate
              means.
            </p>
            <p>
              <strong>How can you delete the data we collect from you?</strong>{" "}
              Based on the laws of some countries, you may have the right to
              request access to the personal information we collect from you,
              change that information, or delete it in some circumstances. To
              request to delete your personal information, please submit a
              request form by clicking here{" "}
              <a href="https://prostrikers.com/">https://prostrikers.com/</a>{" "}
              contact. We will respond to your request within 30 days
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">Other Sites and Services</h4>
            <p>
              The Service may contain links to other websites, and other online
              services operated by third parties. These links are not an
              endorsement of, or representation that we are affiliated with, any
              third party. In addition, our content may be included on web pages
              or online services that are not associated with us. We do not
              control third-party websites, or online services, and we are not
              responsible for their actions. Other websites and services follow
              different rules regarding the collection, use and sharing of your
              personal information. We encourage you to read the privacy
              policies of the other websites and online services you use.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">Security Practices</h4>
            <p>
              The security of your personal information is important to us. We
              employ a number of organizational, technical and physical
              safeguards designed to protect the personal information we
              collect. However, security risk is inherent in all internet and
              information technologies and we cannot guarantee the security of
              your personal information. Email, in particular, is an insecure
              way to transmit personal information. Please take special care
              regarding what information you send to us via email or text
              message.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">Children</h4>
            <p>
              The Service is not directed to, and we do not knowingly collect
              personal information from, anyone under the age of 13. If a parent
              or guardian becomes aware that his or her child has provided us
              with information without their consent, he or she should contact
              us. We will delete such information from our files as soon as
              reasonably practicable. We encourage parents with concerns to
              contact us.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">
              Changes to this Privacy Policy
            </h4>
            <p>
              We reserve the right to modify this Privacy Policy at any time. If
              we make material changes to this Privacy Policy, we will notify
              you by updating the date of this Privacy Policy and posting it on
              the Service. We may, and if required by law, will also provide
              notification of changes in another way that we believe is
              reasonably likely to reach you, such as via e-mail (if you have an
              account where we have your contact information) or another manner
              through the Service.
            </p>
            <p>
              Any modifications to this Privacy Policy will be effective upon
              our posting the new terms and/or upon implementation of the new
              changes on the Service (or as otherwise indicated at the time of
              posting). In all cases, your continued use of the Service after
              the posting of any modified Privacy Policy indicates your
              acceptance of the terms of the modified Privacy Policy
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold  text-lg">How to Contact Us</h4>
            <p>
              If you would like to exercise your rights under this Policy,
              please submit your request to:{" "}
              <a href="mailto:admin@prostrikers.com" className="text-blue-600">
                admin@prostrikers.com
              </a>
              .
            </p>
            <p>
              Please direct any questions or comments about this Policy or
              privacy practices to{" "}
              <a href="mailto:admin@prostrikers.com" className="text-blue-600">
                admin@prostrikers.com
              </a>{" "}
              . You may also write to us via postal mail at:
            </p>
            <p>
              <strong>
                Pro Strikers 2230 16th Street Sacramento CA 95818 USA
              </strong>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PrivacyPolicy;
