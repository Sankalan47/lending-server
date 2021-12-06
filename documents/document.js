module.exports = () => {
  const today = new Date();
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>PDF Result Template</title>
        <style>
          .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            font-family: "Times New Roman", Times, serif;
          }
          .letter {
            padding: 4rem;
          }
          .letter--title {
            text-decoration: underline;
            text-align: center;
            margin-bottom: 3rem;
          }
          .recipient {
        
          }
          .to {
            
            margin-bottom: 40px;
          }
          .date {

            float : right;
            margin-top: -200px;
            margin-left: -50px;
          }
          .sectionPara{
            margin-bottom: 2rem;
          }
          .margin-top {
            margin-top: 50px;
          }
          .justify-center {
            text-align: center;
          }
          .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
          }
          table,
          th,
          td {
            border-collapse: collapse;
            border: 1px solid black;
          }
          .invoice-box table td {
            padding: 5px;
            vertical-align: top;
          }
          .invoice-box table tr td:nth-child(2) {
            text-align: right;
          }
          .invoice-box table tr.top table td {
            padding-bottom: 20px;
          }
          .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
          }
          .invoice-box table tr.information table td {
            padding-bottom: 40px;
          }
          .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
          }
          .invoice-box table tr.details td {
            padding-bottom: 20px;
          }
          .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
          }
          .invoice-box table tr.item.last td {
            border-bottom: none;
          }
          .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
          }
          @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
            }
            .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
            }
          }
        </style>
      </head>
      <body>
        <div class="invoice-box">
          <div class="letter">
            <h2 class="letter--title">Legal Scrutiny Report</h2>
            <div class="recipient">
              <div class="to">
                <p>To,</p>
                <p>_________________________________</p>
                <p>_________________________________</p>
                <p>_________________________________</p>
              </div>
              <div class="date">
                <p>Date:</p>
              </div>
            </div>
            <div class="letter--heading">
              <p>Sir/Madam,</p>
            </div>
            <div class="letter--subject">
              <p>Subject: ___________________________________________________</p>
            </div>
            <div class="table--heading">
              <h3>PART - I: LIST OF DOCUMENTS SCRUTINISED</h3>
            </div>
            <table>
              <tr>
                <th>Sl. No.</th>
                <th>Description of thedocument</th>
                <th>Document Number</th>
                <th>Date of the Document</th>
              </tr>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
    
            <br />
            <div class="letter--desc1">
              <h3>PART- II: DESCRIPTION OF THE PROPERTY OFFERED AS SECURITY</h3>
              <p class="sectionPara">
                All that piece and parcel of property bearing Site No. ________
                Katha No. ________, formed in land bearing Survey No. ___________,
                situated at ___________________________________, measuring East to
                West _______ feet, and North to South _________ feet, in all
                measuring square feet, presently comes within the limits of
                ________________________ and bounded on:
              </p>
              <div class="letter--desc--bottom">
                <p>East By: __________</p>
                <p>West By: __________</p>
                <p>North By: __________</p>
                <p>South By: __________</p>
              </div>
            </div>
    
            <div class="letter--desc2">
              <h3>PART- III: FLOW OF TITLE</h3>
              <ol>
                <li class="sectionPara">
                  Originally the Property belongs to ______________________________
                  acquire through a registered sale deed document no.
                  _________________ dated: __________ land in survey no. ______,
                  situated at ______________________ , measuring East to West _____
                  feet, and North to South ______ feet, in all measuring square feet
                  _______________
                </li>
                <li class="sectionPara">
                  ______________________ along with ________________________
                  executed a sale deed in favor of ______________________ in survey
                  no. _________, measuring square feet in a sale deed document
                  bearing no. ___________ dated: ________, in all measuring
                  __________ square feet.
                </li>
                <li class="sectionPara">
                  There was an agreement for sale between _______________ and
                  ____________ in a document dated: ___________ registered as
                  document no. _______________, dated: __________ and stored in
                  _________________________, registered in the Office of the
                  Sub-Registrar, ________________________
                </li>
                <li class="sectionPara">
                  One _________________ purchased this property from
                  ____________________ through a registered sale deed dated:
                  ____________________ as document no. _________ dated:
                  _______________ land in survey no. __________ , situated at
                  ______________________________ , measuring East to West _____
                  feet, and North to South ____ feet, in all measuring _______
                  square feet.
                </li>
                <li class="sectionPara">
                  The _____________________________________ Trust (Registered), its
                  representative of its secretary __________________ purchased the
                  property from _________________ though a registered sale deed
                  dated: _________________ as document no. __________ , dated:
                  _________ , in all measuring __________ square feet.
                </li>
                <li class="sectionPara">
                  Originally the Property was given to one _________________________
                  by Government of ____________ in a document no. ___________ dated:
                  ___________ land in survey no. ______ , situated at
                  _________________________________ measuring East to West _____
                  feet, and North to South ______ feet, in all measuring _______
                  square feet, presently comes within the limits of
                  _____________________________
                </li>
                <li class="sectionPara">
                  A Deed of Confirmation executed by _______________ in favor of
                  _______________ in survey no. ___________, measuring __________
                  square feet conforming that the absolute owner of the property as
                  ______________________________
                </li>
                <li class="sectionPara">
                  __________________ also acquired a Khatha in his name in a
                  document dated: _________ and license to build a house granted by
                  ________________ in favor of _____________ in a document no.
                  ____________, dated: ____________, in all measuring ______ square
                  feet.
                </li>
                <li class="sectionPara">
                  ________________________ executed a registered Gift deed in favor
                  of ____________ in a document dated: ________________ and gifted
                  the property in survey no. ___________, measuring ____________
                  square feet to _______________. He was under possession and
                  enjoyment for a period of ______ years; the Encumbrance
                  Certificate suggest the same. feet.
                </li>
                <li class="sectionPara">
                  The property originally belongs to ______________________,
                  acquired by way of partition in a document no. _______________
                  dated: ________________ land in survey no. _______, situated at
                  _________________________________, measuring East to West ______
                  feet, and North to South _________ feet, in all measuring
                  __________ square feet, presently comes within the limits of
                  ___________________________
                </li>
                <li class="sectionPara">
                  The property is acquired in the name of ______________________ by
                  way of Will from the _________________ in a document no.
                  _________________ dated: _________ land in survey no. _________,
                  situated at _________________________________, measuring East to
                  West ___________ feet, and North to South _______ feet, in all
                  measuring ___________ square feet, presently comes within the
                  limits of ________________________
                </li>
                <li class="sectionPara">
                  Originally the Property was given to one ___________________ by
                  Government of ____________ by way of Military Patta in a document
                  bearing no. ___________ dated: _______________ land in survey no.
                  _____ situated at _________________________, measuring East to
                  West ______ feet, and North to South _______ feet, in all
                  measuring square feet, presently comes within the limits of
                  _____________________________
                </li>
                <li class="sectionPara">
                  Originally the Property was given to one _____________________ by
                  way of Court auctioned property in a document bearing no.
                  _________ dated: ____________ land in survey no. _________ ,
                  situated at _____________________________, measuring East to West
                  _______ feet, and North to South ________ feet, in all measuring
                  _______ square feet, presently comes within the limits of
                  ____________________________
                </li>
                <li class="sectionPara">
                  Originally the property is part of HUF (Hindu Undivided Family)
                  was partitioned and a part of the original land is given to one
                  ___________________ by way of partition ________ in a document
                  bearing no. _______________ dated: ____________ land in survey no.
                  _______, situated at __________________, measuring East to West
                  _____ feet, and North to South ________ feet, in all measuring
                  __________ square feet, presently comes within the limits of
                  _______________________
                </li>
                <li class="sectionPara">
                  The Genealogy certificate of ___________________________ is
                  collected from the office of ______________ document bearing no.
                  _____________ dated: __________
                </li>
                <li class="sectionPara">
                  The Death Certificate of ____________________________ is collected
                  from the office of _______________________ document bearing no.
                  ____________ dated: _________
                </li>
              </ol>
            </div>
            <div class="letter--desc2">
              <h3>PART – IV: ENCUMBRANCE CERTIFICATE</h3>
              <p class="sectionPara">
                The E.C for a Period of _______________ years commencing from dated:
                ___________ to dated: _____________ discloses that the recent copy
                of the Encumbrance Certificate is submitted to disclose the title of
                the ____________________, the document shows that there is
                _____________ taken on this property. Thus, it is clear that there
                _____________________ over the property proposed for security.
              </p>
            </div>
            <div class="letter--desc2">
              <h3>PART – V: CONCLUSION</h3>
              <p class="sectionPara">
                The applicant/proposed mortgage has got _______ title for _________
                years. I am of the opinion that, the loan applicant
                ________________________ has got clear, valid, absolute and
                marketable title over the property proposed for security and he can
                create an equitable mortgage by deposing the original registered
                sale deed document bearing no.: ______________________________
                dated: ____________________ in favor of the Bank.
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div class="letter--desc3">
              <h3>CERTIFICATE / LEGAL OPINION</h3>
              <p class="sectionPara">
                The documents referred to above satisfy the requirements of creating
                Simple Mortgage and I further certify that:
              </p>
              <ol>
                <li class="sectionPara">
                  Flow of Title for the last _____ years was observed i.e., who was
                  the owner of the said property ________ years ago, how and when
                  the title flowed to the applicant, stage by stage. In proof of
                  such flow, all relevant documents are verified.
                </li>
                <li class="sectionPara">
                  On verification of current year’s assessment, tax receipt is
                  obtained to ascertain that there are no arrears of land/house tax.
                </li>
                <li class="sectionPara">
                  All the documents/papers submitted are valid, the executants are
                  competent to execute, the documents are properly stamped and
                  registered by the competent authority.
                </li>
                <li class="sectionPara">
                  It is ensured that all documents/papers up to the _________ years
                  are available. Title is sustained on the ground of Sale Deed.
                </li>
                <li class="sectionPara">The applicant belongs to Joint Hindu Family.</li>
                <li class="sectionPara">
                  The title is sustained on the ground of inheritance, the family
                  genealogy is ascertained and flow of title is also considered as
                  per provision of succession law.
                </li>
                <li class="sectionPara">
                  A shared partition deed of proposers is obtained as proof of the
                  applicant’s’ share in the ancestral property.
                </li>
                <li class="sectionPara">
                  The parties who are members of the partition in the property have
                  relinquished their right over the same from all co-parceners of
                  the family who has got right over that ancestral property.
                </li>
                <li class="sectionPara">
                  After the receipt of EC, it is verified that all the
                  known/existing transactions of sale/purchase/mortgage/charge, etc.
                  are found in E.C, which is free form encumbrance.
                </li>
                <li class="sectionPara">
                  The Registered Sale Deed submitted is the original copy ensuring
                  the Title of the applicant and the E.C suggests the same.
                </li>
                <li class="sectionPara">
                  The following conditions of the Trust is followed and the Trust
                  has issued a possession certificate according to their rules and
                  regulations
                </li>
                <li class="sectionPara">
                  It is ascertained that the identity of the property is established
                </li>
                <li class="sectionPara">
                  The present owner of the property is ________________________ who
                  is competent to create charge over the properties.
                </li>
              </ol>
            </div>
            <br />
            <br />
            <br />
            <div class="letter--footer">
              <div class="recipient">
                <div class="to">
                  <p>Place:</p>
                  <p>Date:</p>
                </div>
                <div class="date">
                  <p>Advocate</p>
                  <p>______________________</p>
                  <p>______________________</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
};
