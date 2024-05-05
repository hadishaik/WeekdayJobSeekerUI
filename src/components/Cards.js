import React from "react";
import Card from "./Card";

const Cards = ({ styles, data }) => {
  return (
    <section className="" style={styles.cards} key={2}>
      {data?.map((item) => (
        <Card
          item={item}
          card={styles.card}
          cardSpace={styles.cardSpace}
          postedOn={styles.postedDate}
          companyDetails={styles.organization}
          aboutUs={styles.aboutUs}
          expSection={styles.expSection}
          imgStyles={styles.imgStyles}
          imgStyles2={styles.imgStyles2}
          btnStyles={styles.btnStyles}
          btnStyles2={styles.btnStyles2}
          btnTitle={"Easy Apply"}
          btnTitle2={"Unlock refferal asks"}
        />
      ))}
    </section>
  );
};

export default React.memo(Cards);
