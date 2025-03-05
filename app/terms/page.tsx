import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer for AI Chatbot
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing and using the AI financial literacy chatbot,
            you acknowledge that you have read, understood, and agreed to be
            bound by these Terms of Use. If you do not agree with these terms,
            do not use the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Educational Purposes Only:</span> 
             The Chatbot is designed to provide general financial literacy and 
            educational content. It does not offer personalized financial advice, 
            investment strategies, tax recommendations, or legal guidance. Decisions 
            based on information provided by the Chatbot are made at your own risk.**
          </li>
           <li className="text-gray-700">
            <span className="font-semibold">No Warranties:</span> The Chatbot is
            provided "as is" and "as available" without any warranties, express
            or implied. DollaSense makes no representations or 
            guarantees about the accuracy, completeness, or timeliness of any 
            financial information provided. **Users should independently verify 
            information and consult a qualified financial professional before making 
            financial decisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            DollaSense does not guarantee that the Chatbot will be available at all
            times, be uninterrupted, secure, or error-free. No technical
            support, maintenance, or updates are guaranteed or required to be
            provided.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To
            the fullest extent permitted by applicable law, DollaSense shall not be
            liable for any direct, indirect, incidental, consequential, special,
            exemplary, or punitive damages arising from or related to your use
            of or inability to use the Chatbot. This includes but is not limited
            to loss of profits, data, business, or any other losses, even if
            DollaSense has been advised of the possibility of such damages.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            The Chatbot is intended for informational and general purposes only.
            It does not constitute legal, financial, medical, or professional
            advice. Any reliance on the information provided by the Chatbot is
            at your own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> You are
            solely responsible for your use of the Chatbot and any actions or
            decisions made based on its output. DollaSense is not responsible for any
            consequences resulting from the use or misuse of the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span>{" "}
            You acknowledge that any data transmitted to or through the Chatbot
            is not secured and may be processed by third parties. Do not upload,
            share, or transmit any sensitive, confidential, or personal
            information. All conversations conducted through the Chatbot are
            considered equivalent to public postings, and DollaSense does not
            guarantee the confidentiality or security of any data shared.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> You agree to
            indemnify, defend, and hold harmless DollaSense from any claims,
            liabilities, damages, losses, and expenses, including reasonable
            legal fees, arising from your use of the Chatbot or violation of
            these Terms of Use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> DollaSense
            reserves the right to modify these Terms of Use at any time without
            prior notice. Continued use of the Chatbot constitutes acceptance of
            the modified terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of
            Use shall be governed by and construed in accordance with the laws
            of the applicable jurisdiction without regard to its conflict of law
            provisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> If you
            have any questions or concerns regarding these Terms of Use, please
            contact Dollasense at unc.lorraine@gmail.com.
          </li>
        </ol>
      </div>
    </div>
  );
}
