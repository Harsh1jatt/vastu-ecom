import styles from './RefundPolicy.module.css';
import replaceSiteVariables from '../utils/replaceSiteVariables';

const refundSections = [
    {
        title: "No Return Policy",
        content: [
            `We do not offer any return option on any of the products sold by {SITE_NAME}. Once a product is sold, no refund will be provided under any circumstances. All merchandise sold by {SITE_NAME} is sold as-is without any guarantee.`,
            `By making a purchase, you are confirming that you have read and fully understand our no-refund policy. Please do not accept the parcel if the box is damaged or torn.`
        ]
    },

    {
        title: "7 Days Exchange",
        content: [
            `We provide an exchange only if you receive a wrong product or a damaged product. An unboxing video is mandatory to claim an exchange. Do not accept the parcel if the box is damaged or torn.`,
            `Replacements will only be issued after inspection by our team.`
        ]
    },

    {
        title: "Exchange Eligibility",
        content: [
            `Our 7-day replacement policy is applicable only to the following cases:`
        ],
        list: [
            `Wrong Item Received – must be verified via unboxing video.`,
            `Defective or Damaged item received – must be verified via unboxing video.`
        ],
        footer: `The following cases will NOT be eligible under our replacement policy: any item that has been damaged or washed by the customer; any item not sent in its original packaging along with the original box and inserts; any item not in its original condition.`
    },

    {
        title: "More Details",
        content: [
            `Based on the pictures and unboxing video shared by the customer, our team will determine whether a replacement is warranted. The decision of our team in this regard is final.`
        ],
        list: [
            `We charge a flat return fee of ₹100 in case of accepted returns for size issues.`,
            `In case of Prepaid Orders – if the customer is unavailable or delivery could not be made successfully by our courier partners, refunds will be issued to the in-store wallet after deducting shipping fees.`,
            `We are not responsible if the customer overpays to the courier person without observing the COD amount on the bill.`,
            `If the customer contacts us after the 7-day return policy has lapsed, {SITE_NAME} will not be able to cater to those requests.`
        ]
    },

    {
        title: "Cancellation by the Customer",
        content: [
            `If you need to cancel an order within 24 hours of placing it, or if your order has not yet been shipped, we will try our best to assist you with the refund. The refund will be processed through the same mode of payment and may take up to 7–8 working days to reflect in your account.`,
            `We appreciate it if you inform us as soon as possible in case you do not want an order, so that we do not dispatch it and save on courier cost and effort. To contact us, please visit the "Contact Us" page.`
        ],
        list: [
            `If you cancel before dispatch – we will refund the entire amount (for pre-paid orders).`,
            `If you cancel after dispatch – we will refund the amount after deducting shipping charges (for pre-paid orders). This applies even on free shipping orders, as courier charges are incurred once the product is shipped.`
        ]
    },

    {
        title: `Cancellation by {SITE_NAME}`,
        content: [
            `{SITE_NAME} reserves full rights and control to cancel any order at any given time without prior notice.`
        ]
    },

    {
        title: "Missing Item in the Parcel",
        content: [
            `If you find the parcel damaged or torn, do not accept it — we will send another parcel. If you find any items missing upon opening, please record an unboxing video and share it with us to initiate a claim.`
        ],
        highlight: `Important: Do not accept the parcel if the box is damaged or torn. No claim will be entertained without an unboxing video.`
    },

    {
        title: "Refunds",
        content: [
            `Once a product is sold, no refund will be provided. Refunds are issued only in exceptional cases — such as an item delivered with a delay of multiple weeks, or if the customer has repeatedly received incorrect or damaged items.`,
            `After we process your approved refund, the amount will be credited to your original payment method via UPI or Net Banking within 4–5 business days. The actual time may vary depending on your bank's processing time and third-party payment gateway policies.`
        ]
    },

    {
        title: "How to Start a Return / Replacement",
        content: [
            `Follow the steps below to raise a return or replacement request:`
        ],
            list: [
            `Share your order number and phone/email via WhatsApp to {WHATSAPP_NUMBER}.`,
            `You will be given an option to return or exchange your item.`,
            `Include your order number, photos, and videos of the damaged or incorrect product along with any comments.`,
            `If your order is eligible for a return, we will initiate a return courier request.`,
            `After the courier partner returns the product, we will inspect it and — upon approval — issue the amount as an in-store wallet credit, discount code, or gift card for your next order.`
        ],
        footer: `If a courier partner is not available for return pickup from your pincode, you will need to courier the product back to us. A replacement will be issued once the product is received and inspected.`
    },

    {
        title: "Damages and Issues",
        content: [
            `Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or incorrect, so that we can evaluate the issue and make it right.`
        ]
    },

    {
        title: "Exceptions / Non-Returnable Items",
        content: [
            `Certain types of items cannot be returned or replaced. We do not issue refunds for our Premium range products — however, we offer free 6-month replacement on our Premium range. Please get in touch if you have questions or concerns about your specific item.`
        ],
        footer: `Unfortunately, we cannot accept returns on sale items or gift cards.`
    },

    {
        title: "Exchanges",
        content: [
            `The fastest way to ensure you get what you want is to return the item you have. Once the return is accepted, make a separate purchase for the new item.`
        ]
    }
];

const RefundPolicy = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <h1>Refund &amp; Returns Policy</h1>
                    <p>
                        Please read our refund and exchange policy carefully before making a purchase.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.noRefundBanner}>
                        ⚠️ Once a product is sold, <strong>no refund will be provided</strong> under any circumstances. All sales are final.
                    </div>

                    {replaceSiteVariables(refundSections).map((section) => (
                        <section
                            key={section.title}
                            className={styles.section}
                        >
                            <h2>{section.title}</h2>

                            {section.content?.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}

                            {section.list?.length > 0 && (
                                <ul>
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.footer && (
                                <p className={styles.footerText}>
                                    {section.footer}
                                </p>
                            )}

                            {section.highlight && (
                                <div className={styles.highlightBox}>
                                    {section.highlight}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;