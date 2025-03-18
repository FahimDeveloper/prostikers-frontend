import { Modal } from "antd";
import { useState } from "react";

const LiabilityWaiver = ({ children }: any) => {
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
        title="Liability Waiver"
        centered
        onCancel={() => setOpen(false)}
        open={open}
      >
        <div className=" leading-6 space-y-6">
          <div className="space-y-5">
            <h4 className="font-bold text-2xl text-center">
              Release And Waiver Of Liability
            </h4>
            <p className="text-base">
              The individual named below (referred to as <strong>“I”</strong> or{" "}
              <strong>“me”</strong>) desires to participate in indoor sports
              activities, including, but not limited to, indoor cricket and
              indoor soccer, Indoor baseball, indoor softball (whether singular
              or plural, hereinafter referred to as the
              <strong> “Activities”</strong>), provided by KDUN Holdings, LLC
              d/b/a Prostrikers indoor sports, a California limited liability
              company (the <strong>“Company”</strong>) with offices and an
              indoor sports facility located at 2230 16th Street Sacramento CA
              95818 (the <strong>“Facility”</strong>). As lawful consideration
              for permission by the Company to participate in the Activities and
              for the intangible value that I will gain by participating in the
              Activities, I agree to all the terms and conditions set forth in
              this agreement (this <strong>“Agreement”</strong>).
            </p>
            <p className="font-bold text-base">
              I AM AWARE OF AND UNDERSTAND THE NATURE OF THE ACTIVITIES, WHICH
              INCLUDES PHYSICAL CONTACT WITH OTHER PARTICIPANTS AND VIGOROUS
              CARDIOVASCULAR EXERCISE, AND THAT I AM IS QUALIFIED, IN GOOD
              HEALTH, AND IN PROPER PHYSICAL CONDITION TO PARTICIPATE IN SUCH
              ACTIVITY. I AM AWARE AND UNDERSTAND THAT THE ACTIVITIES ARE
              DANGEROUS ACTIVITIES AND INVOLVE SERIOUS RISKS, INCLUDING BUT NOT
              LIMITED TO, SPRAINS, FRACTURES, CONCUSSIONS, PARALYSIS, PERMANENT
              DISABILITY, SERIOUS INJURY, DEATH, AND PROPERTY DAMAGE. I
              ACKNOWLEDGE THAT ANY INJURIES THAT I SUSTAIN MAY BE COMPOUNDED BY
              NEGLIGENT EMERGENCY RESPONSE OR RESCUE OPERATIONS OF THE COMPANY.
              I ACKNOWLEDGE THAT I AM KNOWINGLY AND VOLUNTARILY PARTICIPATING IN
              THE ACTIVITIES WITH AN EXPRESS UNDERSTANDING OF THE DANGER
              INVOLVED AND HEREBY AGREE TO ACCEPT AND ASSUME ANY AND ALL RISKS
              OF INJURY, DEATH, OR PROPERTY DAMAGE, WHETHER CAUSED BY THE
              NEGLIGENCE OF THE COMPANY OR OTHERWISE.
            </p>
            <p className="font-bold text-base">
              I HEREBY EXPRESSLY WAIVE AND RELEASE ANY AND ALL CLAIMS, NOW KNOWN
              OR HEREAFTER KNOWN, AGAINST THE COMPANY, AND ITS OFFICERS,
              DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, MEMBERS, SUCCESSORS, AND
              ASSIGNS (COLLECTIVELY, “RELEASEES”), ON ACCOUNT OF INJURY, DEATH,
              OR PROPERTY DAMAGE ARISING OUT OF OR RELATING TO MY PARTICIPATION
              IN THE ACTIVITIES OR USE OF THE FACILITY, WHETHER ARISING OUT OF
              THE NEGLIGENCE OF THE COMPANY OR ANY RELEASEES (EXCLUDING GROSS
              NEGLIGENCE OR INTENTIONAL MISCONDUCT ON THE PART OF THE COMPANY OR
              ITS RELEASEES) OR THE NEGLIGENT OR INTENTIONAL CONDUCT OF OTHER
              PARTICIPANTS OR SPECTATORS, OR OTHERWISE. I COVENANT NOT TO MAKE
              OR BRING ANY SUCH CLAIM AGAINST THE COMPANY OR ANY OTHER RELEASEE,
              AND FOREVER RELEASE AND DISCHARGE THE COMPANY AND ALL OTHER
              RELEASEES FROM LIABILITY UNDER SUCH CLAIMS.
            </p>
            <p className="font-bold text-base">
              I SHALL DEFEND, INDEMNIFY, AND HOLD HARMLESS THE COMPANY AND ALL
              OTHER RELEASEES AGAINST ANY AND ALL LOSSES, DAMAGES, LIABILITIES,
              DEFICIENCIES, CLAIMS, ACTIONS, JUDGMENTS, SETTLEMENTS, INTEREST,
              AWARDS, PENALTIES, FINES, COSTS, OR EXPENSES OF WHATEVER KIND,
              INCLUDING REASONABLE ATTORNEY FEES, FEES AND THE COSTS OF
              ENFORCING ANY RIGHT TO INDEMNIFICATION UNDER THIS AGREEMENT, AND
              THE COST OF PURSUING ANY INSURANCE PROVIDERS, INCURRED BY OR
              AWARDED AGAINST INDEMNIFIED PARTY, ARISING OUT OF OR RESULTING
              FROM ANY CLAIM OF A THIRD PARTY RELATED TO MY PARTICIPATION IN THE
              ACTIVITIES.
            </p>
            <p className="text-base">
              This Agreement constitutes the entire agreement of the Company and
              me with respect to the subject matter contained herein and
              supersedes all prior and contemporaneous understandings,
              agreements, representations, and warranties, both written and
              oral, with respect to such subject matter. I acknowledge and agree
              that no representations or agreements, written or oral, have been
              made to me by the company or any other Releasee with respect to
              any of the subject matter contained in this agreement, and I
              represent and warrant that I am not relying on any such
              representations. If any term or provision of this Agreement or the
              application thereof to any party or circumstance is held invalid,
              illegal, or unenforceable to any extent in any jurisdiction, then
              the remaining terms and provisions and their application to other
              parties or circumstances shall not be affected thereby and shall
              be enforced to the greatest extent permitted by law. This
              Agreement is binding on and shall inure to the benefit of the
              Company and me and their respective successors and assigns. All
              matters arising out of or relating to this Agreement shall be
              governed by and construed in accordance with the internal laws of
              the State of California, excluding any conflict-of-laws rule or
              principle that might refer the governance or the construction of
              this agreement to the laws of another jurisdiction. Any claim or
              cause of action arising under this Agreement may be brought only
              in the federal and state courts located in Sacramento, California
              and I hereby consent to the exclusive jurisdiction of such courts.
              If any action at law or in equity is necessary to enforce the
              terms of this Agreement, the prevailing party shall be entitled to
              receive from the non- prevailing party reasonable attorneys’ fees,
              court costs, and necessary disbursements in addition to all other
              relief to which he or it may be entitled.
            </p>
            <p className="font-bold text-base">
              BY REGISTERING, I ACKNOWLEDGE THAT I HAVE READ AND FULLY
              UNDERSTOOD ALL OF THE TERMS OF THIS AGREEMENT AND THAT I AM
              VOLUNTARILY GIVING UP SUBSTANTIAL LEGAL RIGHTS, INCLUDING THE
              RIGHT TO SUE THE COMPANY, WITHOUT ANY INDUCEMENT, ASSURANCE, OR
              GUARANTEE BEING MADE TO ME. I INTEND MY SIGNATURE TO BE THE
              REQUIRED EVIDENCE OF MY ASSENT TO COMPLETELY AND UNCONDITIONALLY
              RELEASE ALL LIABILITY TO THE GREATEST EXTENT ALLOWED BY LAW.
            </p>
            <p className="font-bold text-base">
              I am the parent or legal guardian of the minor named on the
              registration form. I have the legal capacity to consent to and, by
              registering, I hereby do consent to the terms and conditions of
              this Release and Waiver of Liability and Assumption of Risk on
              behalf of my child or ward.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LiabilityWaiver;
